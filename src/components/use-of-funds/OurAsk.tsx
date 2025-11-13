import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const listStyles = "flex items-start gap-3 text-sm text-brand-gray";

const OurAsk = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.25 }}
      className="mb-12"
    >
      <header className="mx-auto mb-6 w-full max-w-4xl text-left md:text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-blue">Our Ask</p>
        <h2 className="mt-3 text-2xl font-bold text-brand-darkBlue md:text-3xl">
          Fueling the Next Stage of Growth
        </h2>
      </header>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <article className="rounded-2xl border border-brand-blue/15 bg-white/95 p-6 shadow-md">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-blue/70">Completed Round</p>
          <h3 className="mt-2 text-lg font-semibold text-brand-darkBlue">Capital Raised to Date</h3>
          <ul className="mt-4 space-y-3">
            <li className={listStyles}>
              <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-brand-mint/20">
                <Check className="h-3.5 w-3.5 text-brand-teal" />
              </span>
              <span>Pre-seed friends & family round closed in 2025 at a $10M post-money valuation cap.</span>
            </li>
            <li className={listStyles}>
              <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-brand-mint/20">
                <Check className="h-3.5 w-3.5 text-brand-teal" />
              </span>
              <span>$700K deployed to build the platform, initial GTM, and core team.</span>
            </li>
          </ul>
        </article>

        <article className="rounded-2xl border border-brand-blue/15 bg-white/95 p-6 shadow-md">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-blue/70">Current Raise</p>
          <h3 className="mt-2 text-lg font-semibold text-brand-darkBlue">Seed round (SAFE)</h3>
          <ul className="mt-4 space-y-3">
            <li className={listStyles}>
              <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-brand-mint/20">
                <Check className="h-3.5 w-3.5 text-brand-teal" />
              </span>
              <span>Raising our Seed on a SAFE.</span>
            </li>
            <li className={listStyles}>
              <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-brand-mint/20">
                <Check className="h-3.5 w-3.5 text-brand-teal" />
              </span>
              <span>Terms and allocation discussed live; inquire for details.</span>
            </li>
            <li className={listStyles}>
              <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-brand-mint/20">
                <Check className="h-3.5 w-3.5 text-brand-teal" />
              </span>
              <span>Request a meeting to review fit.</span>
            </li>
          </ul>
        </article>

        <article className="rounded-2xl border border-brand-blue/15 bg-white/95 p-6 shadow-md">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-blue/70">24-Month Milestones</p>
          <h3 className="mt-2 text-lg font-semibold text-brand-darkBlue">Commercial Targets</h3>
          <ul className="mt-4 space-y-3">
            <li className={listStyles}>
              <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-brand-mint/20">
                <Check className="h-3.5 w-3.5 text-brand-teal" />
              </span>
              <span>Scale to 40,000 lives served.</span>
            </li>
            <li className={listStyles}>
              <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-brand-mint/20">
                <Check className="h-3.5 w-3.5 text-brand-teal" />
              </span>
              <span>1,000 high-performing resellers activated.</span>
            </li>
            <li className={listStyles}>
              <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-brand-mint/20">
                <Check className="h-3.5 w-3.5 text-brand-teal" />
              </span>
              <span>Affinity business serving 10,000 lives.</span>
            </li>
            <li className={listStyles}>
              <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-brand-mint/20">
                <Check className="h-3.5 w-3.5 text-brand-teal" />
              </span>
              <span>Five institutional resellers in-market.</span>
            </li>
          </ul>
        </article>
      </div>
    </motion.section>
  );
};

export default OurAsk;
