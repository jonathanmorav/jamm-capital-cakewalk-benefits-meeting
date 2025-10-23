import { Brain, ShieldCheck, Wallet } from "lucide-react";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import NavigationArrow from "./navigation/NavigationArrow";
import BottomCornerLogo from "./BottomCornerLogo";

interface CakewalkTechPlatformProps {
  onNavigateNext: () => void;
}

interface PlatformCapability {
  id: string;
  title: string;
  description: string;
  bullets?: string[];
  footer?: string;
}

interface LayerDefinition {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  badgeClass: string;
  tileClass: string;
  items: PlatformCapability[];
}

const layers: LayerDefinition[] = [
  {
    id: "experience",
    title: "Experience Layer",
    icon: Wallet,
    badgeClass: "bg-brand-lightMint text-brand-darkBlue",
    tileClass: "bg-brand-lightMint/70 border border-brand-lightMint/60 text-brand-darkBlue",
    items: [
      {
        id: "application-engine",
        title: "Front‑End Consumer Experience",
        description:
          "Simple, human prompts with smart prefill guide an e‑commerce–style flow that teaches as it recommends.",
        bullets: [
          "Built for SMB owners and employees; also works in reseller, affinity, and embedded partner flows.",
          "Prefills payroll/HRIS and prior session data; progressive disclosure keeps questions short and context‑aware.",
          "Adaptive Q&A adjusts follow‑ups; auto‑validation catches inconsistencies before submission.",
          "Guided shopping with explainers, comparisons, and ‘why this was recommended’ tooltips; calculators tune recommendations.",
          "Retail‑like bundles with real‑time pricing and tax/contribution guidance; flags HSA/FSA and employer‑contribution savings.",
          "Instant handoff to eligibility/underwriting; instant decisions for most applicants, clean routes for edge cases.",
          "One‑motion checkout: contribution splits, payment setup, issuance, and confirmations.",
          "Continuous insight loop builds a structured graph that improves segmentation, pricing, audit, and analytics.",
          "Mobile‑first, WCAG‑minded, SOC2‑aligned with explicit consent and transparent disclosures.",
        ],
      },
      {
        id: "partner-agent-os",
        title: "Partner & Agent OS",
        description: "Cakewalk provides agents with a comprehensive operating system to sell and manage group insurance policies.",
        bullets: [
          "Rapid agent onboarding and eligibility checks.",
          "Quoting tools and near real-time application tracking.",
          "CRM integrations and marketing automation.",
          "Agent payment dashboards with next-day payments.",
          "Performance analytics and insights for every agent.",
        ],
        footer: "This system improves agent productivity, reduces manual effort, and lets agents focus on client engagement to drive velocity.",
      },
      {
        id: "policy-admin-billing",
        title: "Policy Admin & Billing",
        description:
          "Our cloud-native policy administration system automates every phase of the policy lifecycle.",
        bullets: [
          "Dynamic policy contract generation.",
          "Billing, payment processing, retries, and reinstatements.",
          "Endorsements for coverage or beneficiary updates.",
          "Full servicing workflows with member self-service options.",
          "Structured data feeds supporting carrier claims, audit, and compliance reporting.",
        ],
        footer:
          "Owning the stack lets us ship new features, pricing changes, and carrier configurations in days—not quarters.",
      },
    ],
  },
  {
    id: "decision",
    title: "Decision Layer",
    icon: Brain,
    badgeClass: "bg-soft-blue text-brand-darkBlue",
    tileClass: "bg-soft-blue/80 border border-brand-lightBlue/60 text-brand-darkBlue",
    items: [
      {
        id: "real-time-underwriting",
        title: "Real-Time Underwriting",
        description: "Our proprietary rules-based engine taps a consumer information graph generated from our application workflow to assess risk precisely and transparently.",
        bullets: [
          "Instant decisions for most applicants.",
          "Adaptive rule selection that tunes to the applicant profile.",
          "High approval rates with reduced friction and faster decision-making.",
        ],
        footer: "The graph continues to evolve as new applications flow through Cakewalk, refining rule relevance, risk segmentation, and pricing precision.",
      },
      {
        id: "data-intelligence",
        title: "Data Intelligence",
        description: "Machine-learning models monitor persistency, loss performance, and next-best actions across the book.",
      },
    ],
  },
  {
    id: "infrastructure",
    title: "Infrastructure",
    icon: ShieldCheck,
    badgeClass: "bg-soft-purple text-brand-darkBlue",
    tileClass: "bg-soft-purple/80 border border-soft-purple/60 text-brand-darkBlue",
    items: [
      {
        id: "embedded-integration",
        title: "Embedded Integration",
        description: "Payroll, HRIS, identity, payments, and carrier APIs normalized for rapid partner activation.",
      },
      {
        id: "security-compliance",
        title: "Security & Compliance",
        description: "SOC2-ready controls, PII vault, audit logging, and observability baked into every service.",
      },
      {
        id: "scalable-architecture",
        title: "Scalable Architecture",
        description: "Event-driven microservices with health monitoring, SLO tracking, and automated incident response.",
      },
    ],
  },
];

const CakewalkTechPlatform = ({ onNavigateNext }: CakewalkTechPlatformProps) => {
  const flattenedTiles = useMemo(
    () =>
      layers.flatMap((layer) =>
        layer.items.map((item) => ({
          ...item,
          layerId: layer.id,
          layerTitle: layer.title,
          badgeClass: layer.badgeClass,
        }))
      ),
    []
  );

  const [activeTileId, setActiveTileId] = useState<string>(
    flattenedTiles[0]?.id ?? ""
  );

  const activeTile = useMemo(
    () => flattenedTiles.find((tile) => tile.id === activeTileId),
    [flattenedTiles, activeTileId]
  );

  return (
    <section className="relative min-h-screen bg-white py-16 md:py-24">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 md:px-6">
        <header className="text-left md:text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-blue">Technology Platform</p>
          <h1 className="mt-3 text-3xl font-bold text-brand-darkBlue md:text-5xl">Cakewalk Technology Stack</h1>
          <p className="mt-4 text-base text-brand-gray md:text-lg">
            The technology and data foundation that keeps every partner, product, and member experience running
            without manual lift.
          </p>
        </header>


        <div className="grid gap-6 md:grid-cols-3">
          {layers.map((layer) => (
            <article
              key={layer.id}
              className="flex h-full flex-col rounded-3xl border border-brand-blue/15 bg-white shadow-sm"
            >
              <div
                className={`flex items-center gap-3 rounded-t-3xl px-5 py-4 text-sm font-semibold uppercase tracking-[0.25em] ${layer.badgeClass}`}
              >
                <layer.icon className="h-5 w-5" />
                <span>{layer.title}</span>
              </div>

              <div className="flex flex-1 flex-col gap-3 p-5">
                {layer.items.map((item) => {
                  const isActive = item.id === activeTileId;
                  return (
                    <TechTile
                      key={item.id}
                      item={item}
                      layerClass={layer.tileClass}
                      isActive={isActive}
                      onActivate={setActiveTileId}
                    />
                  );
                })}
              </div>
            </article>
          ))}
        </div>

        {activeTile && (
          <motion.div
            key={activeTile.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="rounded-3xl border border-brand-blue/15 bg-white/90 p-6 shadow-sm"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-blue/70">
              {activeTile.layerTitle}
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-brand-darkBlue">{activeTile.title}</h2>
            <p className="mt-3 text-sm text-brand-gray md:text-base">{activeTile.description}</p>
            {activeTile.bullets && (
              <ul className="mt-4 space-y-2 text-sm text-brand-gray md:text-base">
                {activeTile.bullets.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-mint" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            )}
            {activeTile.footer && (
              <p className="mt-4 text-sm font-medium text-brand-darkBlue/80 md:text-base">
                {activeTile.footer}
              </p>
            )}
          </motion.div>
        )}
      </div>

      <BottomCornerLogo />
      <div className="mt-12 flex justify-center">
        <NavigationArrow onClick={onNavigateNext} className="text-brand-blue hover:text-brand-purple transition-colors" />
      </div>
    </section>
  );
};

interface TechTileProps {
  item: PlatformCapability;
  layerClass: string;
  isActive: boolean;
  onActivate: (id: string) => void;
}

const TechTile = ({ item, layerClass, isActive, onActivate }: TechTileProps) => (
  <motion.button
    type="button"
    onMouseEnter={() => onActivate(item.id)}
    onFocus={() => onActivate(item.id)}
    onClick={() => onActivate(item.id)}
    className={`group w-full rounded-2xl border p-4 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-mint focus-visible:outline-offset-2 ${
      layerClass
    } ${isActive ? "ring-2 ring-brand-blue ring-offset-2 ring-offset-white" : ""}`}
  >
    <h3 className="text-base font-semibold text-brand-darkBlue">{item.title}</h3>
    <p className="mt-2 text-sm text-brand-gray">{item.description}</p>
  </motion.button>
);

export default CakewalkTechPlatform;
