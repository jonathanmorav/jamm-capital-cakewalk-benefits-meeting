import { useState } from "react";
import { motion } from "framer-motion";
import BottomCornerLogo from "./BottomCornerLogo";
import NavigationArrow from "./navigation/NavigationArrow";
import cakewalkLogo from "@/assets/cakewalk-logo.png";
import metlifeLogo from "@/assets/metlife-logo.png";
import sunLifeLogo from "@/assets/sunlife-logo.png";
import globeLifeLogo from "@/assets/globe-life-logo.png";
import guardianLogo from "@/assets/guardian-logo.png";
import aflacLogo from "@/assets/aflac-logo.png";
import prudentialLogo from "@/assets/prudential-logo.png";

interface CarrierDefinition {
  name: string;
  status: string;
  summary: string;
  products: string[];
  logo: string;
  logoClassName?: string;
}

const valueChainStages = [
  "Distribution",
  "Product Design",
  "Underwriting",
  "Risk Participation",
  "Admin",
  "Claim Mgmt",
];

const cakewalkActiveStages = new Set([
  "Distribution",
  "Product Design",
  "Underwriting",
  "Risk Participation",
  "Admin",
]);

const connectorsLookup = valueChainStages.reduce<Record<string, boolean>>((acc, stage, index) => {
  const next = valueChainStages[index + 1];
  acc[stage] = Boolean(next && cakewalkActiveStages.has(stage) && cakewalkActiveStages.has(next));
  return acc;
}, {});

const carriers: CarrierDefinition[] = [
  {
    name: "MetLife",
    status: "Live – national payroll embedded",
    summary:
      "MetLife delegates Cakewalk to design bundled supplemental health and financial wellness packages for small group segments.",
    products: ["Supplemental Health", "Financial Wellness"],
    logo: metlifeLogo,
  },
  {
    name: "Sun Life",
    status: "Live – affinity ecosystem",
    summary:
      "Co-developing voluntary benefits and stop-loss layers delivered through affinity alliances on Cakewalk OS.",
    products: ["Voluntary Benefits", "Stop-Loss Overlay"],
    logo: sunLifeLogo,
    logoClassName: "h-12",
  },
  {
    name: "Globe Life",
    status: "Launching – farm bureau footprint",
    summary:
      "Delegated underwriting and administration for regional P&C reseller networks with instant enrollment flows.",
    products: ["Life & AD&D", "Supplemental Accident"],
    logo: globeLifeLogo,
  },
  {
    name: "Guardian",
    status: "Live – SMB affinity programs",
    summary:
      "Guardian relies on Cakewalk to package voluntary benefits and automate enrollment, billing, and in-force servicing across partner channels.",
    products: ["Life & Disability", "Dental", "Vision"],
    logo: guardianLogo,
  },
  {
    name: "Aflac",
    status: "Pilot – embedded payroll partner",
    summary:
      "Delegated product bundling and admin for payroll-native enrollment journeys with automated billing and servicing.",
    products: ["Supplemental Health", "Hospital Indemnity"],
    logo: aflacLogo,
  },
  {
    name: "Prudential",
    status: "Live – digital broker network",
    summary:
      "Prudential taps Cakewalk for delegated underwriting, risk participation, and in-force lifecycle management.",
    products: ["Life & Disability", "Financial Wellness"],
    logo: prudentialLogo,
  },
];

const productCatalog = [
  "Accident Insurance",
  "Critical Illness / Cancer",
  "Dental",
  "Excess Disability",
  "Identity Theft",
  "Long Term Care",
  "Long Term Disability",
  "Medical / Supplemental Health",
  "Short Term Disability",
  "Telehealth",
  "Vision",
];

// Removed Proof Points card

const CarrierPartnerships = ({ onNavigateNext }: { onNavigateNext: () => void }) => {
  const [activeCarrier, setActiveCarrier] = useState<CarrierDefinition | null>(null);

  return (
    <section className="relative min-h-screen bg-white px-4 py-16 md:px-10">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white via-brand-lightBlue/20 to-brand-lightMint/40" />

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mx-auto w-full max-w-4xl text-left md:text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-blue">
            Carrier Partnerships
          </p>
          <h1 className="mt-3 text-3xl font-bold text-brand-darkBlue md:text-5xl">
            Delegated Value Chain Coverage
          </h1>
          <p className="mt-4 text-base text-brand-gray md:text-lg">
            National carriers entrust Cakewalk with product design, underwriting, distribution, and administration so
            they can reach SMBs faster while keeping claims execution in-house.
          </p>
        </motion.header>

        <CakewalkValueChainRow />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto w-full max-w-5xl rounded-3xl border border-brand-blue/10 bg-white/95 p-10 shadow-md"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-blue/70">Carrier Partnerships</p>
          <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3">
            {carriers.map((carrier) => {
              const isActive = activeCarrier?.name === carrier.name;

              return (
                <button
                  type="button"
                  key={carrier.name}
                  onClick={() => setActiveCarrier((prev) => (prev?.name === carrier.name ? null : carrier))}
                  aria-pressed={isActive}
                  aria-label={carrier.name}
                  className={`group flex h-28 flex-col items-center justify-center rounded-2xl border border-brand-blue/15 bg-gradient-to-br from-white via-white to-brand-lightMint/15 px-4 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-mint focus-visible:ring-offset-2 focus-visible:ring-offset-white ${
                    isActive ? "border-brand-blue bg-brand-lightMint/30" : ""
                  }`}
                >
                  <img
                    src={carrier.logo}
                    alt={carrier.name}
                    className={`${carrier.logoClassName ?? "h-14"} w-auto object-contain transition-opacity group-hover:opacity-90`}
                  />
                  <span className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-darkBlue/70">
                    {carrier.name}
                  </span>
                </button>
              );
            })}
          </div>

          {activeCarrier && (
            <motion.div
              key={activeCarrier.name}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-10 rounded-2xl border border-brand-blue/15 bg-white/90 p-6 shadow-sm"
            >
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-brand-blue/15 bg-brand-lightMint/10 p-2">
                    <img
                      src={activeCarrier.logo}
                      alt={activeCarrier.name}
                      className="h-full w-auto object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-blue/70">
                      {activeCarrier.name}
                    </p>
                    <p className="text-sm font-medium text-brand-darkBlue/80">{activeCarrier.status}</p>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-sm text-brand-gray">{activeCarrier.summary}</p>
              <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.25em] text-brand-blue/60">
                Delegated product set
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {activeCarrier.products.map((product) => (
                  <span
                    key={`${activeCarrier.name}-${product}`}
                    className="rounded-full border border-brand-blue/20 bg-brand-blue/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-darkBlue/80"
                  >
                    {product}
                  </span>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto w-full max-w-5xl rounded-3xl border border-brand-blue/10 bg-white/95 p-10 shadow-md"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-blue/70">Product Portfolio</p>
          <h2 className="mt-4 text-2xl font-semibold text-brand-darkBlue md:text-3xl">
            Comprehensive Insurance Products We Deliver
          </h2>
          <p className="mt-3 text-sm text-brand-gray md:text-base">
            Cakewalk packages a complete ancillary and core benefits suite, enabling partners to deploy bundled coverage
            tailored to each SMB segment from one operating system.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {productCatalog.map((product) => (
              <div
                key={product}
                className="flex items-center gap-3 rounded-2xl border border-brand-blue/10 bg-brand-lightMint/10 px-4 py-3 text-sm font-medium text-brand-darkBlue/80"
              >
                <span className="flex h-2.5 w-2.5 flex-shrink-0 items-center justify-center rounded-full bg-brand-mint" />
                <span>{product}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Compliance & Control card removed */}
      </div>

      <BottomCornerLogo />

      <div className="mt-12 flex justify-center">
        <NavigationArrow onClick={onNavigateNext} className="text-brand-blue transition-colors hover:text-brand-purple" />
      </div>
    </section>
  );
};

const CakewalkValueChainRow = () => {
  const connectors = connectorsLookup;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mx-auto mt-2 w-full max-w-5xl overflow-hidden rounded-3xl border border-brand-lightBlue/60 bg-white/95 shadow-lg"
    >
      <div className="grid grid-cols-[200px_repeat(6,minmax(0,1fr))] items-stretch">
        <div className="border-b border-dotted border-slate-300 bg-slate-50/80 px-6 py-4 text-sm font-semibold uppercase tracking-wide text-brand-gray">
          Participants
        </div>
        {valueChainStages.map((stage) => (
          <div
            key={stage}
            className="border-l border-b border-dotted border-slate-300 bg-slate-50/80 px-3 py-4 text-center text-xs font-semibold uppercase tracking-wide text-brand-gray"
          >
            {stage}
          </div>
        ))}

        <div className="flex items-center gap-3 border-b border-dotted border-slate-300 px-6 py-6">
          <img src={cakewalkLogo} alt="Cakewalk" className="h-8 w-auto" />
        </div>
        {valueChainStages.map((stage) => {
          const isActive = cakewalkActiveStages.has(stage);
          const showConnector = connectors[stage];

          return (
            <div
              key={`cakewalk-${stage}`}
              className="relative flex flex-col items-center justify-center gap-2 border-l border-b border-dotted border-slate-200 px-3 py-6"
            >
              {isActive && showConnector && (
                <span
                  className="pointer-events-none absolute top-1/2 hidden h-[2px] bg-brand-blue/60 sm:block"
                  style={{ left: "50%", right: "-50%" }}
                />
              )}

              {isActive ? (
                <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-brand-blue bg-brand-blue text-lg font-bold text-white shadow-sm">
                  <motion.span
                    className="pointer-events-none absolute inset-[-6px] rounded-full border opacity-60"
                    style={{ borderColor: "#53EDBE" }}
                    animate={{ scale: [1, 1.15, 1], opacity: [0.6, 0.2, 0.6] }}
                    transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                  />
                  +
                </div>
              ) : (
                <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-brand-blue/40">
                  Carrier
                </span>
              )}
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default CarrierPartnerships;
