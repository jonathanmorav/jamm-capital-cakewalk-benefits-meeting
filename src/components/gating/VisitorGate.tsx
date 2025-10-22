import React from "react";

declare global {
  interface Window {
    hbspt?: any;
  }
}

const HUBSPOT_PORTAL_ID = "48423090";
const HUBSPOT_FORM_ID = "f16bd7c2-6a03-4969-9303-5d0347210e91";
const HUBSPOT_REGION = "na1"; // adjust if different (e.g., eu1)
const HS_GATE_KEY = "cw.hsGate.complete";

// Use newer embed script recommended by HubSpot
const scriptSrc = "https://js.hsforms.net/forms/embed/v2.js";

const VisitorGate: React.FC = () => {
  const isLocalHost = typeof window !== "undefined" && ["localhost", "127.0.0.1"].includes(window.location.hostname);

  if (isLocalHost) {
    return null;
  }

  const [open, setOpen] = React.useState<boolean>(() => {
    try {
      return localStorage.getItem(HS_GATE_KEY) !== "1";
    } catch {
      return true;
    }
  });
  const formContainerRef = React.useRef<HTMLDivElement | null>(null);
  const scriptLoadedRef = React.useRef<boolean>(false);
  const formCreatedRef = React.useRef<boolean>(false);
  const fallbackTimerRef = React.useRef<number | null>(null);
  const [loadError, setLoadError] = React.useState<string | null>(null);

  // Prevent background scroll when gate is open
  React.useEffect(() => {
    if (open) {
      const { overflow } = document.body.style;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = overflow;
      };
    }
  }, [open]);

  React.useEffect(() => {
    if (!open) return;

    const ensureScript = () =>
      new Promise<void>((resolve, reject) => {
        if (scriptLoadedRef.current || (window as any).hbspt) {
          scriptLoadedRef.current = true;
          resolve();
          return;
        }
        const existing = document.querySelector(`script[src=\"${scriptSrc}\"]`) as HTMLScriptElement | null;
        if (existing) {
          existing.addEventListener("load", () => {
            scriptLoadedRef.current = true;
            resolve();
          });
          existing.addEventListener("error", () => reject(new Error("HubSpot script failed to load")));
          return;
        }
        const s = document.createElement("script");
        s.src = scriptSrc;
        s.async = true;
        s.defer = true;
        s.onload = () => {
          scriptLoadedRef.current = true;
          resolve();
        };
        s.onerror = () => reject(new Error("HubSpot script failed to load"));
        document.head.appendChild(s);
      });

    const createForm = () => {
      if (!window.hbspt || !formContainerRef.current) return;
      // Prevent duplicate renders: if a form already exists in the container, wipe it and recreate once
      const container = formContainerRef.current;
      if (formCreatedRef.current) return;
      if (container.querySelector('form')) {
        container.innerHTML = '';
      }
      try {
        window.hbspt.forms.create({
          portalId: HUBSPOT_PORTAL_ID,
          formId: HUBSPOT_FORM_ID,
          region: HUBSPOT_REGION,
          target: `#hs-form-root`,
          onFormReady: () => {
            formCreatedRef.current = true;
            setLoadError(null);
            if (fallbackTimerRef.current) {
              window.clearTimeout(fallbackTimerRef.current);
              fallbackTimerRef.current = null;
            }
          },
          onFormSubmitted: () => {
            try {
              localStorage.setItem(HS_GATE_KEY, "1");
            } catch {}
            if (fallbackTimerRef.current) {
              window.clearTimeout(fallbackTimerRef.current);
              fallbackTimerRef.current = null;
            }
            setLoadError(null);
            setOpen(false);
          },
          onFormSubmit: () => {
            try {
              localStorage.setItem(HS_GATE_KEY, "1");
            } catch {}
            if (fallbackTimerRef.current) {
              window.clearTimeout(fallbackTimerRef.current);
              fallbackTimerRef.current = null;
            }
            setLoadError(null);
            setOpen(false);
          },
        });
      } catch (e) {
        // no-op; script might not be ready
      }
    };

    let mounted = true;

    // Listen for HubSpot postMessage callbacks as a backup
    const onMessage = (e: MessageEvent) => {
      try {
        const data: any = e.data;
        if (data && data.type === 'hsFormCallback') {
          const evt = data.eventName;
          if (evt === 'onFormSubmitted' || evt === 'onFormSubmit') {
            try { localStorage.setItem(HS_GATE_KEY, '1'); } catch {}
            if (fallbackTimerRef.current) {
              window.clearTimeout(fallbackTimerRef.current);
              fallbackTimerRef.current = null;
            }
            setLoadError(null);
            setOpen(false);
          }
        }
      } catch {}
    };
    window.addEventListener('message', onMessage);
    // store reference for cleanup
    (window as any).__cwHsMsgHandler = onMessage;

    // Observe DOM for thank-you state (belt and suspenders)
    if (formContainerRef.current) {
      const root = formContainerRef.current;
      const observer = new MutationObserver(() => {
        const successNode = root.querySelector('.submitted-message, .hs-form__thank-you, .hs-form-iframe__thank-you');
        if (successNode) {
          try { localStorage.setItem(HS_GATE_KEY, '1'); } catch {}
          if (fallbackTimerRef.current) {
            window.clearTimeout(fallbackTimerRef.current);
            fallbackTimerRef.current = null;
          }
          setLoadError(null);
          setOpen(false);
        }
      });
      observer.observe(root, { childList: true, subtree: true });
      (window as any).__cwHsObserver = observer;
    }
    ensureScript()
      .then(() => {
        if (!mounted) return;
        createForm();
        // Fallback timer if form doesn\'t render in time
        const t = window.setTimeout(() => {
          if (!document.querySelector('#hs-form-root form')) {
            setLoadError(
              "We couldn't load the HubSpot form. Please verify the portalId (typically numeric) and formId, or try disabling script blockers."
            );
          }
        }, 4000);
        fallbackTimerRef.current = t as unknown as number;
      })
      .catch(() => {
        setLoadError("HubSpot script failed to load. Check your network or ad-blockers.");
      });

    return () => {
      mounted = false;
      // cleanup listeners/observers
      const handler = (window as any).__cwHsMsgHandler as ((e: MessageEvent) => void) | undefined;
      if (handler) {
        window.removeEventListener('message', handler);
        (window as any).__cwHsMsgHandler = undefined;
      }
      const obs = (window as any).__cwHsObserver as MutationObserver | undefined;
      if (obs) {
        obs.disconnect();
        (window as any).__cwHsObserver = undefined;
      }
      if (fallbackTimerRef.current) {
        window.clearTimeout(fallbackTimerRef.current);
        fallbackTimerRef.current = null;
      }
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-white/70 backdrop-blur-sm"
    >
      <div className="mx-4 w-full max-w-xl rounded-2xl border border-brand-blue/20 bg-white p-6 shadow-xl">
        <div className="mb-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-blue/70">Access</p>
          <p className="mt-1 text-sm text-brand-gray">Please provide your name and email to continue.</p>
        </div>
        <div ref={formContainerRef} id="hs-form-root" className="min-h-[320px]" />
        {loadError && (
          <p className="mt-3 text-xs text-red-500">{loadError}</p>
        )}
        <p className="mt-3 text-center text-[11px] text-brand-gray/80">We’ll remember this browser so you won’t be asked again.</p>
      </div>
    </div>
  );
};

export default VisitorGate;
