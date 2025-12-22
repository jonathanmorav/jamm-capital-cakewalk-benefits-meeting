import { useState, useMemo } from "react";
import { motion as framerMotion } from "framer-motion";
import NavigationArrow from "../navigation/NavigationArrow";
import BottomCornerLogo from "../BottomCornerLogo";
import { Users, Store, Plug, Rocket, Clock, DollarSign, AlertTriangle, Target } from "lucide-react";

interface GTMSpectrumProps {
  onNavigateNext: () => void;
}

interface MotionDefinition {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  position: number; // 0-100 position on spectrum
  velocity: "Slow" | "Moderate" | "Moderate-High" | "High";
  cac: "Low" | "Moderate" | "Moderate-High" | "High";
  badgeClass: string;
  tileClass: string;
  overview: string;
  strengths: string[];
  considerations: string[];
  focusNote: string;
}

const gtmMotions: MotionDefinition[] = [
  {
    id: "affinity",
    title: "Affinity Groups",
    icon: Users,
    position: 10,
    velocity: "Slow",
    cac: "Low",
    badgeClass: "bg-brand-lightMint text-brand-darkBlue",
    tileClass: "bg-brand-lightMint/70 border border-brand-lightMint/60 text-brand-darkBlue",
    overview: "Leverage associations, trade groups, and communities to acquire members through trusted conveners.",
    strengths: [
      "Lowest customer acquisition cost via warm introductions and co-branded funnels",
      "Built-in social proof through trusted community endorsement",
      "High retention through network effects and member engagement",
      "Revenue share deepens association relationships",
    ],
    considerations: [
      "Longest sales cycle—association partnerships take time to cultivate",
      "Requires navigating organizational decision-making processes",
      "Activation dependent on chapter-level engagement and bandwidth",
    ],
    focusNote: "Best for building a defensible, low-CAC foundation with predictable long-term growth.",
  },
  {
    id: "reseller",
    title: "Re-Sellers",
    icon: Store,
    position: 35,
    velocity: "Moderate",
    cac: "Moderate",
    badgeClass: "bg-soft-blue text-brand-darkBlue",
    tileClass: "bg-soft-blue/80 border border-brand-lightBlue/60 text-brand-darkBlue",
    overview: "Sell through trusted channel partners—insurance agencies, financial advisors, P&C brokers—who distribute to their existing SMB books.",
    strengths: [
      "Leverages existing trusted advisor relationships",
      "Producers motivated by commission economics",
      "Scalable through institutional partnerships",
      "Access to established SMB customer bases",
    ],
    considerations: [
      "Value leakage through commission sharing",
      "Risk of being squeezed on economics as partners gain leverage",
      "Dependent on partner prioritization and mindshare",
      "Less control over customer experience and messaging",
    ],
    focusNote: "Effective for scale but requires careful partner selection and economic structuring.",
  },
  {
    id: "embedded",
    title: "Embedded Partnerships",
    icon: Plug,
    position: 65,
    velocity: "Moderate-High",
    cac: "Moderate-High",
    badgeClass: "bg-soft-purple text-brand-darkBlue",
    tileClass: "bg-soft-purple/80 border border-soft-purple/60 text-brand-darkBlue",
    overview: "Technology-driven embedded insurance within existing payroll, HRIS, fintech, or complementary platforms that meet SMB users at point of sale.",
    strengths: [
      "Meet customers in existing workflows—high conversion at point of decision",
      "API-first integration enables seamless experience",
      "Platform data enables personalized offerings",
      "Scalable once integration is built",
    ],
    considerations: [
      "Similar squeeze risk as resellers—platforms may renegotiate terms",
      "Integration complexity and timeline",
      "Dependent on partner's product roadmap and priorities",
      "Revenue share can compress margins",
    ],
    focusNote: "High velocity potential but requires navigating platform dynamics and technical integration.",
  },
  {
    id: "d2c",
    title: "D2C (Direct-to-Consumer)",
    icon: Rocket,
    position: 90,
    velocity: "High",
    cac: "High",
    badgeClass: "bg-soft-orange text-brand-darkBlue",
    tileClass: "bg-soft-orange/80 border border-soft-orange/60 text-brand-darkBlue",
    overview: "Direct acquisition of SMB customers through owned marketing channels, content, and product-led growth.",
    strengths: [
      "Full control over customer experience and brand",
      "Highest velocity—no partner dependencies or approval cycles",
      "Singular focus on SMB owner and team experience",
      "No value leakage or partner dynamics to manage",
      "Direct customer feedback loop for product iteration",
    ],
    considerations: [
      "Highest customer acquisition cost",
      "Requires significant marketing investment and expertise",
      "Longer path to profitability on per-customer basis",
      "Must build brand awareness from scratch",
    ],
    focusNote: "Maximum velocity and control, but capital-intensive. Best when unit economics are proven.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
};

const GTMSpectrum = ({ onNavigateNext }: GTMSpectrumProps) => {
  const [activeId, setActiveId] = useState<string>(gtmMotions[0]?.id ?? "");

  const active = useMemo(
    () => gtmMotions.find((m) => m.id === activeId),
    [activeId]
  );

  return (
    <section className="relative min-h-screen overflow-hidden bg-white py-16 md:py-24 lg:py-32">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-brand-lightBlue/20 to-brand-lightMint/25" />
      <div className="absolute -top-1/4 right-0 h-3/4 w-2/3 translate-x-1/5 rounded-full bg-brand-lightBlue opacity-[0.05] blur-3xl" />
      <div className="absolute -bottom-1/3 left-[-10%] h-1/2 w-1/2 rounded-full bg-brand-lightMint opacity-[0.08] blur-3xl" />

      <div className="container relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 md:px-6">
        <framerMotion.header
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-left md:text-center"
        >
          <framerMotion.div
            className="inline-flex items-center rounded-full bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-brand-blue shadow-sm"
            variants={fadeUp}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            Go-to-Market Strategy
          </framerMotion.div>
          <framerMotion.h1
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 font-grotesk text-3xl font-bold text-brand-darkBlue sm:text-4xl md:text-5xl"
          >
            GTM Motion Spectrum
          </framerMotion.h1>
          <framerMotion.p
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-4 text-base text-brand-gray md:text-lg"
          >
            Balancing velocity, cost, and control across distribution channels
          </framerMotion.p>
        </framerMotion.header>

        {/* Velocity Spectrum Visualization */}
        <framerMotion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-3xl border border-brand-blue/15 bg-white/95 p-6 md:p-8 shadow-sm"
        >
          {/* Spectrum Labels */}
          <div className="mb-4 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.2em] text-brand-gray">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>Slower Velocity</span>
            </div>
            <div className="flex items-center gap-2">
              <span>Faster Velocity</span>
              <Rocket className="h-4 w-4" />
            </div>
          </div>

          {/* Spectrum Bar */}
          <div className="relative h-4 rounded-full bg-gradient-to-r from-brand-lightMint via-soft-blue via-50% via-soft-purple to-soft-orange">
            {/* Position markers for each motion */}
            {gtmMotions.map((gtmMotion) => {
              const IconComponent = gtmMotion.icon;
              return (
                <button
                  key={gtmMotion.id}
                  type="button"
                  onClick={() => setActiveId(gtmMotion.id)}
                  className={`absolute top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ${
                    activeId === gtmMotion.id ? "z-10 scale-125" : "hover:scale-110"
                  }`}
                  style={{ left: `${gtmMotion.position}%` }}
                >
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-full border-2 shadow-md ${
                      activeId === gtmMotion.id
                        ? "border-brand-blue bg-white"
                        : "border-white bg-brand-darkBlue/80"
                    }`}
                  >
                    <IconComponent
                      className={`h-4 w-4 ${
                        activeId === gtmMotion.id ? "text-brand-blue" : "text-white"
                      }`}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Motion Labels Below Spectrum */}
          <div className="relative mt-8 h-20 md:h-12">
            {gtmMotions.map((gtmMotion) => (
              <button
                key={`label-${gtmMotion.id}`}
                type="button"
                onClick={() => setActiveId(gtmMotion.id)}
                className={`absolute -translate-x-1/2 text-center transition-all duration-200 ${
                  activeId === gtmMotion.id
                    ? "font-semibold text-brand-blue"
                    : "text-brand-gray hover:text-brand-darkBlue"
                }`}
                style={{ left: `${gtmMotion.position}%` }}
              >
                <span className="block whitespace-nowrap text-xs md:text-sm">{gtmMotion.title}</span>
              </button>
            ))}
          </div>

          {/* Secondary Axis Labels */}
          <div className="mt-6 flex items-center justify-between border-t border-brand-blue/10 pt-4 text-xs text-brand-gray">
            <div className="flex items-center gap-2">
              <DollarSign className="h-4 w-4 text-brand-mint" />
              <span>Lower CAC</span>
            </div>
            <div className="flex items-center gap-2">
              <span>Higher CAC</span>
              <DollarSign className="h-4 w-4 text-soft-orange" />
            </div>
          </div>
        </framerMotion.div>

        {/* Four Motion Cards */}
        <framerMotion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid gap-4 md:grid-cols-2 lg:grid-cols-4"
        >
          {gtmMotions.map((gtmMotion) => {
            const isActive = gtmMotion.id === activeId;
            return (
              <MotionCard
                key={gtmMotion.id}
                gtmMotion={gtmMotion}
                isActive={isActive}
                onActivate={setActiveId}
              />
            );
          })}
        </framerMotion.div>

        {/* Detail Panel */}
        {active && (
          <framerMotion.div
            key={active.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="rounded-3xl border border-brand-blue/15 bg-white/90 p-6 shadow-sm"
          >
            <div className="flex flex-wrap items-center gap-4">
              <h2 className="text-2xl font-semibold text-brand-darkBlue">{active.title}</h2>
              <div className="flex gap-2">
                <span className={`rounded-full px-3 py-1 text-xs font-semibold ${active.badgeClass}`}>
                  {active.velocity} Velocity
                </span>
                <span className={`rounded-full px-3 py-1 text-xs font-semibold ${active.badgeClass}`}>
                  {active.cac} CAC
                </span>
              </div>
            </div>
            <p className="mt-3 text-sm text-brand-gray md:text-base">{active.overview}</p>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {/* Strengths */}
              <div>
                <div className="flex items-center gap-2">
                  <Target className="h-4 w-4 text-brand-mint" />
                  <SectionLabel>Strengths</SectionLabel>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-brand-gray md:text-base">
                  {active.strengths.map((s) => (
                    <li key={s} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-mint" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Considerations */}
              <div>
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-soft-orange" />
                  <SectionLabel>Considerations</SectionLabel>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-brand-gray md:text-base">
                  {active.considerations.map((c) => (
                    <li key={c} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-soft-orange" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Focus Note */}
            <div className="mt-6 rounded-2xl border border-brand-blue/10 bg-brand-blue/5 p-4">
              <p className="text-sm font-medium text-brand-darkBlue">{active.focusNote}</p>
            </div>
          </framerMotion.div>
        )}
      </div>

      <BottomCornerLogo />
      <div className="mt-12 flex justify-center">
        <NavigationArrow
          onClick={onNavigateNext}
          className="text-brand-blue transition-colors hover:text-brand-purple"
        />
      </div>
    </section>
  );
};

interface MotionCardProps {
  gtmMotion: MotionDefinition;
  isActive: boolean;
  onActivate: (id: string) => void;
}

const MotionCard = ({ gtmMotion, isActive, onActivate }: MotionCardProps) => {
  const IconComponent = gtmMotion.icon;
  return (
    <framerMotion.button
      type="button"
      onMouseEnter={() => onActivate(gtmMotion.id)}
      onFocus={() => onActivate(gtmMotion.id)}
      onClick={() => onActivate(gtmMotion.id)}
      className={`group relative w-full rounded-2xl border p-4 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-mint focus-visible:outline-offset-2 ${
        gtmMotion.tileClass
      } ${isActive ? "ring-2 ring-brand-blue ring-offset-2 ring-offset-white" : ""}`}
    >
      <framerMotion.span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-2xl"
        style={{ boxShadow: "0 0 0 2px #181E2A" }}
        initial={{ opacity: 0.25 }}
        animate={{ opacity: [0.25, 0.55, 0.25] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
      />
      <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-brand-darkBlue">
        <IconComponent className="h-4 w-4" />
        <span>{gtmMotion.title}</span>
      </h3>
      <div className="mt-2 flex gap-2">
        <span className="rounded-full bg-white/60 px-2 py-0.5 text-xs font-medium text-brand-darkBlue">
          {gtmMotion.velocity}
        </span>
        <span className="rounded-full bg-white/60 px-2 py-0.5 text-xs font-medium text-brand-darkBlue">
          {gtmMotion.cac} CAC
        </span>
      </div>
      <p className="mt-3 text-xs text-brand-gray line-clamp-2">{gtmMotion.overview}</p>
    </framerMotion.button>
  );
};

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue/70">{children}</p>
);

export default GTMSpectrum;
