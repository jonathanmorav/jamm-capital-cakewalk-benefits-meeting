import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import NavigationArrow from "../navigation/NavigationArrow";
import BottomCornerLogo from "../BottomCornerLogo";
import { FileText, CheckCircle2, Building, Lock, Headphones, Wallet } from "lucide-react";

interface OperationsInfrastructureProps {
  onNavigateNext: () => void;
}

const operatingModel = {
  title: "Scalable operations infrastructure",
  description: "Building the infrastructure for compliant, scalable growth",
};

interface LicensingApproach {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  badgeClass: string;
  tileClass: string;
  overview: string;
  strategy?: string[];
  details?: string[];
  status?: string;
  statusBullets?: string[];
}

const licensingApproaches: LicensingApproach[] = [
  {
    id: "producer",
    title: "Producer Licensing",
    icon: FileText,
    badgeClass: "bg-soft-blue text-brand-darkBlue",
    tileClass: "bg-soft-blue/80 border border-brand-lightBlue/60 text-brand-darkBlue",
    overview: "Licensing requirements and processes for insurance producers and agents.",
    strategy: [
      "State-by-state licensing requirements and compliance",
      "Producer appointment processes with carriers",
      "Continuing education and renewal management",
      "Multi-state licensing coordination",
    ],
    status: "In Progress",
  },
  {
    id: "tpa",
    title: "TPA Licensing",
    icon: CheckCircle2,
    badgeClass: "bg-brand-lightMint text-brand-darkBlue",
    tileClass: "bg-brand-lightMint/70 border border-brand-lightMint/60 text-brand-darkBlue",
    overview: "Third Party Administrator licensing unlocks delegated authority and end-to-end plan administration capabilities.",
    strategy: [
      "Delegated authority for enrollment, billing, and claims administration (future capability)",
      "Annual audit readiness with SOC 2-aligned compliance controls",
      "Fiduciary trust account management with carrier-grade financial reporting",
      "Scalable infrastructure for member communications and servicing",
    ],
    statusBullets: [
      "Supported by Patton Compliance out of Tallahassee, FL — boutique firm with specialty in TPA licensure with relationships with regulators across all DOIs",
      "TPA Resident License approved on 12/15/2025 in home State of Delaware",
      "Resident license triggers in-kind approvals in Alaska, Idaho, Indiana, Iowa, Kansas, Rhode Island, South Dakota, Vermont, West Virginia — Timeline to approvals = 2 weeks to 60 days",
      "Coverage in 23+ States by EOQ1 '26",
      "Nationwide Coverage by Q4 2026",
    ],
  },
  {
    id: "trust",
    title: "Multiple Employer Trust Establishment",
    icon: Building,
    badgeClass: "bg-soft-purple text-brand-darkBlue",
    tileClass: "bg-soft-purple/80 border border-soft-purple/60 text-brand-darkBlue",
    overview: "Establishment and management of Multiple Employer Trust (MET) structures.",
    strategy: [
      "Trust formation and legal structure",
      "Employer participation agreements",
      "Trust administration and compliance",
      "Regulatory oversight and reporting requirements",
    ],
    status: "Planning",
  },
  {
    id: "infosec",
    title: "Compliance / Information Security & Data Protection",
    icon: Lock,
    badgeClass: "bg-soft-orange text-brand-darkBlue",
    tileClass: "bg-soft-orange/80 border border-soft-orange/60 text-brand-darkBlue",
    overview: "Enterprise-grade security and compliance framework protecting member data and ensuring regulatory adherence.",
    strategy: [
      "SOC 2 Type II compliance roadmap and controls",
      "HIPAA-aligned data handling and privacy practices",
      "Encryption at rest and in transit for all sensitive data",
      "Vendor security assessments and third-party risk management",
      "Incident response and business continuity planning",
    ],
    status: "In Progress",
  },
  {
    id: "customer-service",
    title: "Customer Service Operating Model",
    icon: Headphones,
    badgeClass: "bg-soft-pink text-brand-darkBlue",
    tileClass: "bg-soft-pink/80 border border-soft-pink/60 text-brand-darkBlue",
    overview: "Scalable customer and agent support model designed for high-volume SMB servicing.",
    strategy: [
      "Self-service member portal with 24/7 access",
      "Tiered support model with defined SLAs",
      "Agent enablement tools and knowledge base",
      "Escalation workflows and quality assurance",
      "Omnichannel support (chat, email, phone)",
    ],
    status: "Active",
  },
  {
    id: "financial-ops",
    title: "Financial Operations",
    icon: Wallet,
    badgeClass: "bg-soft-yellow text-brand-darkBlue",
    tileClass: "bg-soft-yellow/80 border border-soft-yellow/60 text-brand-darkBlue",
    overview: "End-to-end financial operations including billing, collections, and carrier remittance.",
    strategy: [
      "Automated premium billing and collection workflows",
      "Carrier remittance and reconciliation processes",
      "Commission tracking and agent payments",
      "Financial reporting and audit trail",
      "Trust account management and compliance",
    ],
    status: "Active",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
};

const OperationsInfrastructure = ({ onNavigateNext }: OperationsInfrastructureProps) => {
  const [activeId, setActiveId] = useState<string>(licensingApproaches[0]?.id ?? "");

  const active = useMemo(
    () => licensingApproaches.find((a) => a.id === activeId),
    [activeId]
  );

  return (
    <section className="relative min-h-screen overflow-hidden bg-white py-16 md:py-24 lg:py-32">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-brand-lightBlue/20 to-brand-lightMint/25" />
      <div className="absolute -top-1/4 right-0 h-3/4 w-2/3 translate-x-1/5 rounded-full bg-brand-lightBlue opacity-[0.05] blur-3xl" />
      <div className="absolute -bottom-1/3 left-[-10%] h-1/2 w-1/2 rounded-full bg-brand-lightMint opacity-[0.08] blur-3xl" />

      <div className="container relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 md:px-6">
        <motion.header
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-left md:text-center"
        >
          <motion.div
            className="inline-flex items-center rounded-full bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-brand-blue shadow-sm"
            variants={fadeUp}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            Operations & Infrastructure
          </motion.div>
          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 font-grotesk text-3xl font-bold text-brand-darkBlue sm:text-4xl md:text-5xl"
          >
            {operatingModel.title}
          </motion.h1>
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-4 text-base text-brand-gray md:text-lg"
          >
            {operatingModel.description}
          </motion.p>
        </motion.header>

        {/* Six clickable boxes */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {licensingApproaches.map((approach) => {
            const isActive = approach.id === activeId;
            return (
              <ApproachCard
                key={approach.id}
                approach={approach}
                isActive={isActive}
                onActivate={setActiveId}
              />
            );
          })}
        </motion.div>

        {/* Content area that changes based on selection */}
        {active && (
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="rounded-3xl border border-brand-blue/15 bg-white/90 p-6 shadow-sm"
          >
            <h2 className="text-2xl font-semibold text-brand-darkBlue">{active.title}</h2>
            <p className="mt-3 text-sm text-brand-gray md:text-base">{active.overview}</p>

            {/* Strategy */}
            {active.strategy?.length ? (
              <div className="mt-6">
                <SectionLabel>Key Components</SectionLabel>
                <ul className="mt-3 space-y-2 text-sm text-brand-gray md:text-base">
                  {active.strategy.map((s) => (
                    <li key={s} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-mint" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {/* Status */}
            {active.statusBullets?.length ? (
              <div className="mt-6">
                <SectionLabel>Status</SectionLabel>
                <ul className="mt-3 space-y-2 text-sm text-brand-gray md:text-base">
                  {active.statusBullets.map((s) => (
                    <li key={s} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-teal" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : active.status ? (
              <div className="mt-6">
                <SectionLabel>Status</SectionLabel>
                <p className="mt-3 text-sm text-brand-gray md:text-base">{active.status}</p>
              </div>
            ) : null}
          </motion.div>
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

interface ApproachCardProps {
  approach: LicensingApproach;
  isActive: boolean;
  onActivate: (id: string) => void;
}

const ApproachCard = ({ approach, isActive, onActivate }: ApproachCardProps) => (
  <motion.button
    type="button"
    onMouseEnter={() => onActivate(approach.id)}
    onFocus={() => onActivate(approach.id)}
    onClick={() => onActivate(approach.id)}
    className={`group relative w-full rounded-2xl border p-4 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-mint focus-visible:outline-offset-2 ${
      approach.tileClass
    } ${isActive ? "ring-2 ring-brand-blue ring-offset-2 ring-offset-white" : ""}`}
  >
    {/* Blinking outer-edge ring (even across all cards) */}
    <motion.span
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 rounded-2xl"
      style={{ boxShadow: "0 0 0 2px #181E2A" }}
      initial={{ opacity: 0.25 }}
      animate={{ opacity: [0.25, 0.55, 0.25] }}
      transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
    />
    <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-brand-darkBlue">
      <approach.icon className="h-4 w-4" />
      <span>{approach.title}</span>
    </h3>
    <p className="mt-3 text-sm text-brand-gray">{approach.overview}</p>
    <p className="mt-3 text-xs text-brand-blue/70">Click to view details</p>
  </motion.button>
);

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue/70">{children}</p>
);

export default OperationsInfrastructure;
