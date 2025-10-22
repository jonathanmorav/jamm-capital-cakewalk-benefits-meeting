import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const allocations = [
  {
    label: "Product Development",
    percent: "45%",
    summary: "Accelerate platform velocity, underwriting automation, and partner integrations.",
    details: [
      "Expand carrier integrations and affinity-ready bundles across the roadmap.",
      "Advance underwriting automation and analytics to lift conversion and retention.",
      "Ship customer-facing enhancements faster with dedicated product squads.",
      "AI driven product selection and recommendation engine."
    ]
  },
  {
    label: "Go-To-Market",
    percent: "30%",
    summary: "Scale reseller, affinity, and embedded channels to sustain low CAC growth.",
    details: [
      "Activate 1,000 high-performing resellers with playbooks, tooling, and incentives.",
      "Grow affinity and embedded channels that deliver 65% lower CAC than direct acquisition.",
      "Stand up dedicated partner success to keep resellers producing and expanding." 
    ]
  },
  {
    label: "Operations",
    percent: "15%",
    summary: "Expand servicing, data, and reporting infrastructure to deliver efficiently.",
    details: [
      "Build AI-native servicing capacity that keeps servicing costs well below industry averages.",
      "Operationalize data, reporting, and compliance workflows for scaled programs.",
      "Invest in customer experience that maintains 95%+ persistency." 
    ]
  },
  {
    label: "Legal & Compliance",
    percent: "10%",
    summary: "Secure multi-state coverage and institutional-ready governance.",
    details: [
      "Secure 50-state TPA licensing coverage to unlock market access.",
      "Maintain best-in-class governance for institutional partnerships and carriers.",
      "Expand regulatory controls and audits as volume scales." 
    ]
  }
];

const CapitalAllocationStrategy = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeAllocation = allocations[activeIndex];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="mb-12"
    >
      <header className="mx-auto mb-6 w-full max-w-4xl text-left md:text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-blue">Capital Allocation Strategy</p>
        <h2 className="mt-3 text-2xl font-bold text-brand-darkBlue md:text-3xl">
          Deploying Capital for Measurable Outcomes
        </h2>
      </header>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {allocations.map((item, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              type="button"
              key={item.label}
              onMouseEnter={() => setActiveIndex(index)}
              onFocus={() => setActiveIndex(index)}
              onClick={() => setActiveIndex(index)}
              aria-pressed={isActive}
              className={`rounded-xl border bg-white/95 p-4 text-center shadow-sm transition focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-mint focus-visible:ring-offset-2 focus-visible:ring-offset-white ${
                isActive
                  ? "border-brand-blue bg-brand-lightMint/30 shadow-md"
                  : "border-brand-blue/20 hover:-translate-y-1 hover:shadow-md"
              }`}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-blue/70">
                {item.label}
              </p>
              <p className="mt-2 text-3xl font-bold text-brand-blue">{item.percent}</p>
              <p className="mt-3 text-sm text-brand-gray">{item.summary}</p>
            </button>
          );
        })}
      </div>

      {activeAllocation && (
        <motion.div
          key={activeAllocation.label}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-8 rounded-2xl border border-brand-blue/15 bg-white/95 p-6 shadow-md"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-blue/70">
            {activeAllocation.label}
          </p>
          <h3 className="mt-2 text-lg font-semibold text-brand-darkBlue">
            {activeAllocation.percent} Allocation — What It Powers
          </h3>
          <ul className="mt-4 space-y-3">
            {activeAllocation.details.map((detail) => (
              <li key={detail} className="flex items-start gap-3 text-sm text-brand-gray">
                <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-brand-mint/30">
                  <Check className="h-3.5 w-3.5 text-brand-teal" />
                </span>
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.section>
  );
};

export default CapitalAllocationStrategy;
