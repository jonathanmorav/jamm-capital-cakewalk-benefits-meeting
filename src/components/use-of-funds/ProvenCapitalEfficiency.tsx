
import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const listStyles = "flex items-start gap-3 text-sm text-brand-gray";

const ProvenCapitalEfficiency = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mb-12"
    >
      <header className="mx-auto mb-6 w-full max-w-4xl text-left md:text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-blue">Proven Capital Efficiency</p>
        <h2 className="mt-3 text-2xl font-bold text-brand-darkBlue md:text-3xl">
          Momentum Built with Speed
        </h2>
      </header>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-[1.1fr,1.1fr,0.8fr]">
        <article className="rounded-2xl border border-brand-blue/15 bg-white/95 p-6 shadow-md">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-blue/70">January 2025 Launch</p>
          <h3 className="mt-2 text-lg font-semibold text-brand-darkBlue">Cakewalk Launches</h3>
          <ul className="mt-4 space-y-3">
            <li className={listStyles}>
              <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-brand-mint/20">
                <Check className="h-3.5 w-3.5 text-brand-teal" />
              </span>
              <span>$750K premium run rate within 90 days of launch</span>
            </li>
            
            <li className={listStyles}>
              <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-brand-mint/20">
                <Check className="h-3.5 w-3.5 text-brand-teal" />
              </span>
              <span>Five-person team built MVP platform and initial GTM distribution</span>
            </li>
            <li className={listStyles}>
              <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-brand-mint/20">
                <Check className="h-3.5 w-3.5 text-brand-teal" />
              </span>
              <span>Team has grown to 13 across product, engineering, and operations</span>
            </li>
            <li className={listStyles}>
              <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-brand-mint/20">
                <Check className="h-3.5 w-3.5 text-brand-teal" />
              </span>
              <span>Zero dollars spent on customer acquisition</span>
            </li>
          </ul>
        </article>

        <article className="rounded-2xl border border-brand-blue/15 bg-white/95 p-6 shadow-md">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-blue/70">October 2025 Snapshot</p>
          <h3 className="mt-2 text-lg font-semibold text-brand-darkBlue">Cakewalk October 2025</h3>
          <ul className="mt-4 space-y-3">
            <li className={listStyles}>
              <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-brand-mint/20">
                <Check className="h-3.5 w-3.5 text-brand-teal" />
              </span>
              <span>Team of 13 across product, engineering, and operations</span>
            </li>
            <li className={listStyles}>
              <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-brand-mint/20">
                <Check className="h-3.5 w-3.5 text-brand-teal" />
              </span>
              <span>1,200+ SMBs served</span>
            </li>
            <li className={listStyles}>
              <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-brand-mint/20">
                <Check className="h-3.5 w-3.5 text-brand-teal" />
              </span>
              <span>3,000+ employees enrolled</span>
            </li>
            <li className={listStyles}>
              <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-brand-mint/20">
                <Check className="h-3.5 w-3.5 text-brand-teal" />
              </span>
              <span>ARR (run rate): $700K+</span>
            </li>
          </ul>
        </article>

        <article className="rounded-2xl border border-brand-blue/15 bg-white/95 p-6 shadow-md">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-blue/70">Capital Efficiency</p>
          <h3 className="mt-2 text-lg font-semibold text-brand-darkBlue">All-in spend to date</h3>
          <p className="mt-4 text-3xl font-bold text-brand-darkBlue">$700K</p>
          <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-brand-blue/70">Key investments</p>
          <ul className="mt-3 space-y-3 list-none">
            <li className={listStyles}>
              <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-brand-mint/20">
                <Check className="h-3.5 w-3.5 text-brand-teal" />
              </span>
              <span>Talent across product and engineering</span>
            </li>
            <li className={listStyles}>
              <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-brand-mint/20">
                <Check className="h-3.5 w-3.5 text-brand-teal" />
              </span>
              <span>Operations and customer support capacity</span>
            </li>
            <li className={listStyles}>
              <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-brand-mint/20">
                <Check className="h-3.5 w-3.5 text-brand-teal" />
              </span>
              <span>Insurance infrastructure (carrier bindings, compliance, admin stack)</span>
            </li>
          </ul>
        </article>
      </div>
    </motion.section>
  );
};

export default ProvenCapitalEfficiency;
