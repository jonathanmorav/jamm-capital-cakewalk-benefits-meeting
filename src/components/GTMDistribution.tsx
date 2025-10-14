import { Handshake, Users, Store } from "lucide-react";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import BottomCornerLogo from "./BottomCornerLogo";
import NavigationArrow from "./navigation/NavigationArrow";
import PartnerLogo from "./PartnerLogo";
import afboaLogo from "../assets/afboa-logo.svg";
import agentsAssociationLogo from "../assets/agents-association-logo.svg";
import kyfbLogo from "../assets/KYFB.jpeg";
import michiganFarmBureauLogo from "../assets/michigan-farm-bureau-logo.svg";
import farmBureauFinancialServicesLogo from "../assets/farm-bureau-financial-services-logo.svg";

interface GTMDistributionProps {
  onNavigateNext: () => void;
}

interface PipelineRow {
  entity: string;
  status: string;
  description?: string;
}

interface ApproachMilestone {
  label: string;
  note?: string;
  notes?: string[];
}

interface ApproachDefinition {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  badgeClass: string;
  tileClass: string;
  overview: string;
  strategy: string[]; // Placeholder bullets to be filled in
  revenueNote?: string; // Placeholder summary
  logos?: {
    id: string;
    name: string;
    smbs?: string;
    policyHolders?: string;
    mrr?: string;
    asset?: string;
  }[]; // Placeholder logo list
  pipeline?: { stage: string; note?: string }[]; // Placeholder stages
  pipelineTable?: PipelineRow[];
  milestones?: ApproachMilestone[]; // Placeholder 24-mo milestones
  footnote?: string;
}

const approaches: ApproachDefinition[] = [
  {
    id: "reseller",
    title: "Reseller",
    icon: Store,
    badgeClass: "bg-soft-blue text-brand-darkBlue",
    tileClass: "bg-soft-blue/80 border border-brand-lightBlue/60 text-brand-darkBlue",
    overview: "Sell through trusted channel partners who sell on our behalf to new and existing accounts.",
    strategy: [
      "Cupcake OS unifies quoting, e-app submission, and in-force management across the multi-carrier portfolio.",
      "Automated status updates and integrated underwriting reduce case management drag for producers and our team.",
      "Bundled product playbooks and pricing guidance lift attach rates while protecting compliance guardrails.",
      "Next-day commission payments and cash-flow tracking inside the OS reinforce loyalty and selling velocity.",
    ],
    logos: [
      { id: "logo-r1", name: "Kentucky Farm Bureau (KYFB)", asset: kyfbLogo },
      { id: "logo-r2", name: "Michigan Farm Bureau", asset: michiganFarmBureauLogo },
      { id: "logo-r3", name: "Farm Bureau Financial Services" },
      { id: "logo-r4", name: "Alera Group" },
      { id: "logo-r5", name: "American Family Insurance" },
    ],
    pipelineTable: [
      { entity: "American Family Insurance", status: "Committed" },
      { entity: "Acrisure", status: "Qualified" },
      { entity: "Michigan Farm Bureau", status: "Qualified" },
      { entity: "Kentucky Farm Bureau", status: "Committed" },
    ],
    milestones: [
      { label: "Q4 2025", notes: ["Onboard first 25 independent re-selling agents"] },
      {
        label: "Q1 2026",
        notes: [
          "Onboard first institutional re-selling partner",
          "Grow independent re-selling agents active to 250",
        ],
      },
      {
        label: "Q3 2026",
        notes: [
          "Grow to 3 institutional re-selling partners",
          "Grow independent re-selling agents active to 1,000",
        ],
      },
      {
        label: "Q1 2027",
        notes: [
          "Grow to 5 institutional re-selling partners",
          "Grow independent re-selling agents active to 2,000",
        ],
      },
    ],
    footnote:
      "* First re-selling persona centers on P&C agents already serving SMBs—Cakewalk extends their book with embedded benefits and rapid commissions.",
  },
  {
    id: "affinity",
    title: "Affinity Groups",
    icon: Users,
    badgeClass: "bg-brand-lightMint text-brand-darkBlue",
    tileClass: "bg-brand-lightMint/70 border border-brand-lightMint/60 text-brand-darkBlue",
    overview: "Leverage associations, unions, alumni orgs, and communities to acquire members.",
    strategy: [
      "Aggregate fragmented SMB demand across chapters and trade verticals to unlock carrier appetite and volume pricing.",
      "Lower CAC with co-branded funnels, warm introductions, and chapter activations that convert meaningfully higher than cold outreach.",
      "Sell through trusted conveners—associations, unions, alumni—to compress sales cycles and lift close rates via built-in social proof.",
      "Return value to the network with revenue share, exclusive pricing, and benchmarking that deepens member engagement and retention.",
      "Standardize onboarding, eligibility, and data-sharing to enable compliant, repeatable rollouts across chapters with shared reporting.",
    ],
    revenueNote: "1,200+ SMBs onboarded, 3,000+ policy holders, generating $60K in monthly recurring revenue.",
    // Logos removed per request; keeping section data focused on pipeline
    pipelineTable: [
      {
        entity: "Pastor Association",
        description: "10,000 pastors across the Pacific Northwest",
        status: "Signed",
      },
      {
        entity: "Builders Association of the Blue Ridge Mountains",
        description: "1,200 SMBs in the homebuilding sector representing 10,000 employees",
        status: "Signed",
      },
      {
        entity: "The Agents Association",
        description: "1,500 independent insurance agencies representing 6,000 employees",
        status: "Signed",
      },
      {
        entity: "Americas Finest Business Owners Alliance",
        description: "1,500 independent SMBs representing 5,000 lives",
        status: "Signed",
      },
    ],
    // Milestones intentionally omitted to remove "Next 24 Months" section for affinity
  },
  {
    id: "embedded",
    title: "Embedded Platform Partnerships",
    icon: Handshake,
    badgeClass: "bg-soft-purple text-brand-darkBlue",
    tileClass: "bg-soft-purple/80 border border-soft-purple/60 text-brand-darkBlue",
    overview:
      "Technology driven embedded insurance / benefits offering within existing Pay, HRIS, Fintech, or other complimentary platforms that meet SMB users at the point of sale.",
    strategy: [
      "Target API-first payroll, HRIS, and vertical SaaS partners where benefits decisions occur during pay or onboarding workflows.",
      "Co-develop embedded quoting, underwriting, and enrollment modules that surface the right coverage using shared platform data.",
      "Establish revenue-share, compliance, and servicing playbooks that motivate partner reps without diluting Cakewalk unit economics.",
      "Instrument joint analytics, billing, and support processes so SMBs receive one-touch service while upsell triggers are flagged automatically.",
    ],
    pipelineTable: [
      {
        entity: "HiQOR",
        description:
          "Health data company serving 3,000,000 users. Cakewalk will use their health data to personalize embedded insurance offerings for both individual and group benefit products with an emphasis on Life Insurance",
        status: "Signed, Launching Q1 2026",
      },
      {
        entity: "Cast & Crew",
        description:
          "Entertainment industry payroll company serving over 500,000 independent / SMB employees across the entertainment industry",
        status: "Qualified",
      },
      {
        entity: "Spot On",
        description:
          "Point of Sale system provider to 60,000 SMBs primarily in the hospitality and restaurant industry",
        status: "Qualified",
      },
    ],
    // Milestones intentionally omitted to remove "Next 24 Months" section for embedded partnerships
  },
];

const GTMDistribution = ({ onNavigateNext }: GTMDistributionProps) => {
  const [activeId, setActiveId] = useState<string>(approaches[0]?.id ?? "");

  const active = useMemo(
    () => approaches.find((a) => a.id === activeId),
    [activeId]
  );

  const getRevenueLabel = (id: string) => {
    if (id === "affinity") return "Live Affinity Groups";
    if (id === "reseller") return "Reseller Partners";
    return "Current Revenue Generated";
  };

  return (
    <section className="relative min-h-screen bg-white py-16 md:py-24">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 md:px-6">
        <header className="text-left md:text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-blue">Go‑To‑Market</p>
          <h1 className="mt-3 text-3xl font-bold text-brand-darkBlue md:text-5xl">Distribution Strategy</h1>
          <p className="mt-4 text-base text-brand-gray md:text-lg">
            Three complementary motions that compound reach and efficiency. Click any approach to view details.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {approaches.map((approach) => {
            const isActive = approach.id === activeId;
            return (
              <ApproachCard
                key={approach.id}
                approach={approach}
                isActive={isActive}
                onActivate={setActiveId}
                onExpand={() => {}}
              />
            );
          })}
        </div>

        {active && (
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="rounded-3xl border border-brand-blue/15 bg-white/90 p-6 shadow-sm"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-blue/70">Approach</p>
            <h2 className="mt-2 text-2xl font-semibold text-brand-darkBlue">{active.title}</h2>
            <p className="mt-3 text-sm text-brand-gray md:text-base">{active.overview}</p>

            {/* Strategy */}
            {active.strategy?.length ? (
              <div className="mt-6">
                <SectionLabel>Strategy</SectionLabel>
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

            {/* Revenue & Logos */}
            {active.id !== "embedded" && active.id !== "reseller" ? (
              <div className="mt-6">
                <SectionLabel>{getRevenueLabel(active.id)}</SectionLabel>
                {active.revenueNote ? (
                  <p className="mt-3 text-sm text-brand-gray md:text-base">{active.revenueNote}</p>
                ) : active.id !== "reseller" ? (
                  <p className="mt-3 text-sm text-brand-gray md:text-base">
                    Add revenue summary, contribution %, and trends.
                  </p>
                ) : null}
                <div className="mt-4 flex flex-wrap items-center gap-4">
                  {active.logos && active.logos.length > 0 ? (
                    active.logos.map((l) => (
                      <div
                        key={l.id}
                        className="flex items-center gap-3 rounded-xl border border-brand-blue/10 bg-white px-3 py-2 shadow-sm"
                      >
                        {l.asset ? (
                          <img src={l.asset} alt={`${l.name} logo`} className="h-10 w-auto" />
                        ) : (
                          <PartnerLogo className="h-8" />
                        )}
                        <div className="flex flex-col">
                          <span className="text-sm font-medium text-brand-darkBlue/80">{l.name}</span>
                          {(l.smbs || l.policyHolders || l.mrr) ? (
                            <div className="mt-1 flex flex-wrap gap-3 text-xs text-brand-gray">
                              {l.smbs ? <span>{l.smbs} SMBs</span> : null}
                              {l.policyHolders ? <span>{l.policyHolders} Policy Holders</span> : null}
                              {l.mrr ? <span>{l.mrr} MRR</span> : null}
                            </div>
                          ) : null}
                        </div>
                      </div>
                    ))
                  ) : active.id === "affinity" ? null : (
                    <div className="rounded-xl border border-dashed border-brand-blue/20 bg-white/60 px-3 py-2 text-sm text-brand-gray">
                      Add partner/customer logos here
                    </div>
                  )}
                </div>
                {active.footnote ? (
                  <p className="mt-3 text-xs text-brand-blue/70">{active.footnote}</p>
                ) : null}
              </div>
            ) : null}

            {/* Pipeline */}
            {(active.pipelineTable?.length || active.pipeline?.length) ? (
              <div className="mt-6">
                <SectionLabel>Pipeline / Funnel</SectionLabel>
                {active.pipelineTable?.length ? (
                  <div className="mt-3 overflow-hidden rounded-2xl border border-brand-blue/10 bg-white shadow-sm">
                    {(() => {
                      const hasDescription = active.pipelineTable?.some((row) => row.description);
                      return (
                        <table className="min-w-full divide-y divide-brand-blue/10 text-sm text-brand-gray">
                          <thead className="bg-brand-blue/5 text-brand-darkBlue">
                            <tr>
                              <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-[0.2em]">Entity</th>
                              {hasDescription ? (
                                <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-[0.2em]">Description</th>
                              ) : null}
                              <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-[0.2em]">Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            {active.pipelineTable?.map((row) => (
                              <tr key={`${row.entity}-${row.status}`} className="odd:bg-white even:bg-brand-lightBlue/5">
                                <td className="px-4 py-2 font-medium text-brand-darkBlue/80">{row.entity}</td>
                                {hasDescription ? (
                                  <td className="px-4 py-2 text-brand-gray">{row.description || "—"}</td>
                                ) : null}
                                <td className="px-4 py-2 text-brand-gray">{row.status}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      );
                    })()}
                  </div>
                ) : (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {active.pipeline?.map((st) => (
                      <span
                        key={st.stage}
                        className="rounded-full border border-brand-blue/15 bg-brand-blue/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-darkBlue"
                      >
                        {st.stage}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ) : null}

            {/* Milestones */}
            {active.milestones?.length ? (
              <div className="mt-6">
                <SectionLabel>Next 24 Months</SectionLabel>
                <div className="mt-3 grid gap-3 md:grid-cols-3">
                  {active.milestones.map((m) => (
                    <div key={m.label} className="rounded-2xl border border-brand-blue/10 bg-white p-3 shadow-sm">
                      <p className="text-xs font-semibold uppercase tracking-wide text-brand-blue/70">{m.label}</p>
                      {m.notes && m.notes.length ? (
                        <ul className="mt-2 space-y-1 text-sm text-brand-gray">
                          {m.notes.map((note) => (
                            <li key={note} className="flex items-start gap-2">
                              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-mint" />
                              <span>{note}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="mt-1 text-sm text-brand-gray">{m.note || "Add milestone"}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
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

interface ApproachCardProps {
  approach: ApproachDefinition;
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

export default GTMDistribution;
