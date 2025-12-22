import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import NavigationArrow from "../navigation/NavigationArrow";
import BottomCornerLogo from "../BottomCornerLogo";
import { CheckCircle2, Building, Lock, Headphones, Wallet } from "lucide-react";

interface OperationsInfrastructureProps {
  onNavigateNext: () => void;
}

const operatingModel = {
  title: "Scalable operations infrastructure",
  description: "Building the infrastructure for compliant, scalable growth",
};

interface TabContent {
  tabLabel: string;
  overview: string;
  detailOverview?: string;
  strategy?: string[];
  statusBullets?: string[];
}

interface LicensingApproach {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  badgeClass: string;
  tileClass: string;
  overview: string;
  detailOverview?: string;
  strategy?: string[];
  details?: string[];
  status?: string;
  statusBullets?: string[];
  tabs?: TabContent[];
}

const licensingApproaches: LicensingApproach[] = [
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
      "TPA license approved in Tennessee on 12/14/2025",
      "Resident license triggers in-kind approvals in Alaska, Idaho, Indiana, Iowa, Kansas, Rhode Island, South Dakota, Vermont, West Virginia — Timeline to approvals = 2 weeks to 60 days",
      "Coverage in 23+ States by EOQ1 '26",
      "Nationwide Coverage by Q4 2026",
    ],
  },
  {
    id: "trust",
    title: "Insurance Operations & Carrier Contracting Model",
    icon: Building,
    badgeClass: "bg-soft-purple text-brand-darkBlue",
    tileClass: "bg-soft-purple/80 border border-soft-purple/60 text-brand-darkBlue",
    overview: "Contracting vehicles enabling one-to-many carrier relationships through Multiple Employer Trusts and Association partnerships.",
    tabs: [
      {
        tabLabel: "Multiple Trust Establishment",
        overview: "Establishment and management of Multiple Employer Trust (MET) contracting vehicle — our primary method of contracting one (carriers & policies) to many (policyholders).",
        strategy: [
          "One-to-many contracting vehicle",
          "Fiduciary and directed Trust serving as the receiver, holder, and remitter of all insurance premiums",
          "Trust administration and compliance",
          "Regulatory oversight and reporting requirements",
        ],
        statusBullets: [
          "Corporate Trust filed in Delaware with support of Fisher Phillips (ERISA attorney) and Richards, Layton, & Finger (Delaware Statutory Trust attorney) on 12/8/2025",
          "Corporate Trustee appointed through WSFS Bank in Delaware",
          "Trust available for receipt of insurance premiums and contracting with carriers",
          "Next step: By EOJan'26, redirect all current inbound premiums to Trust account (via Dwolla payment facilitator)",
        ],
      },
      {
        tabLabel: "Association Contracting Model",
        overview: "Partnering with established associations to access their carrier contracts and group purchasing power, enabling rapid market entry without direct carrier relationships. Additionally we have created our own association, America's Finest Business Owners Alliance (AFBOA).",
        strategy: [
          "Leverage existing association carrier relationships",
          "Access group purchasing power and negotiated rates",
          "Reduced time-to-market vs. direct carrier contracting",
          "Complementary to MET for broader product access",
        ],
        statusBullets: [
          "Evaluating association partnership opportunities",
          "Target associations with strong SMB membership base",
          "Association model enables access to products not available through MET",
        ],
      },
    ],
  },
  {
    id: "infosec",
    title: "Compliance / Information Security & Data Protection",
    icon: Lock,
    badgeClass: "bg-soft-orange text-brand-darkBlue",
    tileClass: "bg-soft-orange/80 border border-soft-orange/60 text-brand-darkBlue",
    overview: "Enterprise-grade security and compliance framework protecting member data and ensuring regulatory adherence.",
    detailOverview: "SOC 2 (Service Organization Control) is the industry standard for technology companies and service organizations — especially SaaS companies. It verifies that a company has strong security, privacy, and operational controls in place to protect customer data. A SOC 2 audit examines an organization's security posture based on the AICPA's Trust Services Criteria (like A-LIGN), providing an independent, reliable source of assurance. The result is a formal report that companies can share with partners, customers, and investors.",
    strategy: [
      "SOC 2 Type II compliance roadmap and controls",
      "HIPAA-aligned data handling and privacy practices",
      "Encryption at rest and in transit for all sensitive data",
      "Vendor security assessments and third-party risk management",
      "Incident response and business continuity planning",
    ],
    statusBullets: [
      "SOC 2 preparation kicked off with A-LIGN (Auditor) & Concertium (Consultant leading internal preparation)",
      "SOC 2 Type I certification April 2026 — comes with provisional SOC 2 certification which can be communicated/marketed publicly",
      "SOC 2 Type II certification Q1 2027 (requires 12 months of monitoring data post Type I certification)",
      "Parallel workstreams ensuring preparedness and compliance across other compliance frameworks including PCI, PHI, HIPAA, CCPA, AML (SOC 2 preparation supports/solves for most of these frameworks)",
    ],
  },
  {
    id: "customer-service",
    title: "Customer Service Operating Model",
    icon: Headphones,
    badgeClass: "bg-soft-pink text-brand-darkBlue",
    tileClass: "bg-soft-pink/80 border border-soft-pink/60 text-brand-darkBlue",
    overview: "Scalable omni-channel customer and agent support model designed for high-volume SMB servicing.",
    strategy: [
      "AI-first approach: Knowledge base + AI chatbots targeting 65%+ self-serve resolution for policyholders and agents",
      "Strategic advisor: John Sugar (ex VP Service Operations & Customer Support @ Prudential) guiding strategy and partner selection",
      "Top-tier partner criteria: Proven insurance/benefits vertical expertise, technology-forward operations, and cultural alignment",
      "Omni-channel infrastructure: Unified support across chat, email, phone with seamless handoffs and complete customer history",
      "Tiered escalation model: AI → Tier 1 agents → Specialists with defined SLAs at each level",
      "Performance-driven: Real-time dashboards, CSAT tracking, QA programs, and continuous improvement loops",
    ],
    statusBullets: [
      "Evaluating three top-tier nearshore partners (Colombia, Dominican Republic, Belize, Trinidad & Tobago) — 50% cost savings vs. onshore with strong US cultural affinity and English proficiency",
      "Full-service partnership model: not just staffing, but CX capability buildout including dashboards, CSAT analytics, omni-channel technology, playbooks, and knowledge base",
      "Partner selection January 2026; soft go-live early Q2 2026",
      "Future phase: Transition back-office operations to nearshore model for low-value, high-volume tasks",
    ],
  },
  {
    id: "financial-ops",
    title: "Financial Operations",
    icon: Wallet,
    badgeClass: "bg-soft-yellow text-brand-darkBlue",
    tileClass: "bg-soft-yellow/80 border border-soft-yellow/60 text-brand-darkBlue",
    overview: "End-to-end financial operations spanning TPA operations, reseller partner management, and corporate finance.",
    strategy: [
      "TPA Financial Operations: Policyholder invoicing, payment execution, premium collection, carrier remittance, and revenue realization",
      "Reseller Finance Operations: Premium remittance and commission tracking for reselling partners",
      "Corporate Finance Operations: G&A, expenses, payroll, and financial reporting",
      "Trust account management with fiduciary compliance and audit trail",
      "Automated billing workflows with real-time reconciliation",
      "JAMM Capital: Strategic finance and investor relations services",
    ],
    statusBullets: [
      "GrowthForce engaged December 2025 for Accounting, Controller, and Bookkeeping services",
      "2025 books remediation in progress — targeting clean close by EOQ1 '26",
      "Building financial operations foundation: Chart of accounts, GL structure, and reporting framework",
    ],
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
};

const OperationsInfrastructure = ({ onNavigateNext }: OperationsInfrastructureProps) => {
  const [activeId, setActiveId] = useState<string>(licensingApproaches[0]?.id ?? "");
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);

  const active = useMemo(
    () => licensingApproaches.find((a) => a.id === activeId),
    [activeId]
  );

  // Reset tab index when switching cards
  const handleActivate = (id: string) => {
    if (id !== activeId) {
      setActiveTabIndex(0);
    }
    setActiveId(id);
  };

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

        {/* Five clickable boxes - 3 on top, 2 on bottom centered */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-6 [&>*]:lg:col-span-2 [&>*:nth-last-child(2)]:lg:col-start-2 [&>*:nth-last-child(1)]:lg:col-start-4"
        >
          {licensingApproaches.map((approach) => {
            const isActive = approach.id === activeId;
            return (
              <ApproachCard
                key={approach.id}
                approach={approach}
                isActive={isActive}
                onActivate={handleActivate}
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

            {/* Tabbed content for cards with tabs */}
            {active.tabs?.length ? (
              <>
                {/* Tab buttons */}
                <div className="mt-4 flex gap-2 border-b border-brand-blue/10 pb-0">
                  {active.tabs.map((tab, index) => (
                    <button
                      key={tab.tabLabel}
                      type="button"
                      onClick={() => setActiveTabIndex(index)}
                      className={`px-4 py-2 text-sm font-medium transition-colors ${
                        activeTabIndex === index
                          ? "border-b-2 border-brand-blue text-brand-blue"
                          : "text-brand-gray hover:text-brand-darkBlue"
                      }`}
                    >
                      {tab.tabLabel}
                    </button>
                  ))}
                </div>

                {/* Tab content */}
                {active.tabs[activeTabIndex] && (
                  <motion.div
                    key={activeTabIndex}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <p className="mt-4 text-sm text-brand-gray md:text-base">
                      {active.tabs[activeTabIndex].detailOverview || active.tabs[activeTabIndex].overview}
                    </p>

                    {/* Strategy */}
                    {active.tabs[activeTabIndex].strategy?.length ? (
                      <div className="mt-6">
                        <SectionLabel>Key Components</SectionLabel>
                        <ul className="mt-3 space-y-2 text-sm text-brand-gray md:text-base">
                          {active.tabs[activeTabIndex].strategy?.map((s) => (
                            <li key={s} className="flex items-start gap-2">
                              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-mint" />
                              <span>{s}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}

                    {/* Status */}
                    {active.tabs[activeTabIndex].statusBullets?.length ? (
                      <div className="mt-6">
                        <SectionLabel>Status</SectionLabel>
                        <ul className="mt-3 space-y-2 text-sm text-brand-gray md:text-base">
                          {active.tabs[activeTabIndex].statusBullets?.map((s) => (
                            <li key={s} className="flex items-start gap-2">
                              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-teal" />
                              <span>{s}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </motion.div>
                )}
              </>
            ) : (
              /* Non-tabbed content (original behavior) */
              <>
                <p className="mt-3 text-sm text-brand-gray md:text-base">{active.detailOverview || active.overview}</p>

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
              </>
            )}
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
