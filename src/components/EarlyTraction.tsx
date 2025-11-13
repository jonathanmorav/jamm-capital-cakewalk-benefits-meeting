import React from "react";
import { motion } from "framer-motion";
import BottomCornerLogo from "./BottomCornerLogo";
import NavigationArrow from "./navigation/NavigationArrow";
import { Check } from "lucide-react";

interface EarlyTractionProps {
  onNavigateNext: () => void;
}

const listStyles = "flex items-start gap-3 text-sm text-brand-gray";

const EarlyTraction = ({ onNavigateNext }: EarlyTractionProps) => {
  return (
    <section className="min-h-screen relative overflow-hidden flex flex-col justify-center py-16 md:py-24 lg:py-32">
      {/* Background similar to UseOfFunds */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-blue-50/30 z-0 bg-brand-lightBlue"></div>
      <div className="absolute -top-1/3 right-0 w-2/3 h-2/3 opacity-[0.04] rounded-full blur-3xl transform translate-x-1/4 animate-pulse-subtle z-0 bg-soft-blue"></div>
      <div className="absolute -bottom-1/4 left-0 w-1/2 h-1/2 bg-brand-lightBlue opacity-[0.05] rounded-full blur-3xl transform -translate-x-1/4 animate-pulse-subtle z-0" style={{ animationDelay: "1.5s" }}></div>

      <div className="container px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center mb-10"
        >
          <motion.div
            className="bg-white rounded-full px-4 py-1.5 mb-4 shadow-sm"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-brand-blue text-sm font-medium">Early Traction</span>
          </motion.div>

          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-blue font-grotesk text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Where we stand 9 months in.
          </motion.h1>
        </motion.div>

        {/* Hero KPI rail */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-8"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {/* Gross Premium Run Rate */}
            <article className="rounded-xl border border-brand-blue/10 bg-white/95 p-5 shadow-sm">
              <p className="text-xs font-medium text-brand-gray">Premium run rate (gross)</p>
              <p className="mt-1 text-4xl md:text-5xl font-bold text-brand-blue font-grotesk">$2.5M</p>
            </article>

            {/* ARR Run Rate */}
            <article className="rounded-xl border border-brand-blue/10 bg-white/95 p-5 shadow-sm">
              <p className="text-xs font-medium text-brand-gray">ARR (run rate)</p>
              <p className="mt-1 text-4xl md:text-5xl font-bold text-brand-blue font-grotesk">$700K+</p>
            </article>

            {/* SMBs */}
            <article className="rounded-xl border border-brand-blue/10 bg-white/95 p-5 shadow-sm">
              <p className="text-xs font-medium text-brand-gray">SMBs on Cakewalk</p>
              <p className="mt-1 text-4xl md:text-5xl font-bold text-brand-blue font-grotesk">1,200+</p>
            </article>

            {/* Employees */}
            <article className="rounded-xl border border-brand-blue/10 bg-white/95 p-5 shadow-sm">
              <p className="text-xs font-medium text-brand-gray">Employees enrolled</p>
              <p className="mt-1 text-4xl md:text-5xl font-bold text-brand-blue font-grotesk">3,000+</p>
            </article>
          </div>
        </motion.section>

        {/* Supporting cards */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-4"
        >
          <div className="grid gap-6 md:grid-cols-2">
            {/* Momentum since launch */}
            <article className="rounded-2xl border border-brand-blue/15 bg-white/95 p-6 shadow-md">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-blue/70">Momentum Since Launch</p>
              <h3 className="mt-2 text-lg font-semibold text-brand-darkBlue">Progress highlights</h3>
              <ul className="mt-4 space-y-3 list-none">
                <li className={listStyles}>
                  <span className="mt-1 shrink-0 flex h-5 w-5 items-center justify-center rounded-full bg-brand-mint/20">
                    <Check className="h-3.5 w-3.5 text-brand-teal" />
                  </span>
                  <span>$750K premium run rate within 90 days of launch</span>
                </li>
                <li className={listStyles}>
                  <span className="mt-1 shrink-0 flex h-5 w-5 items-center justify-center rounded-full bg-brand-mint/20">
                    <Check className="h-3.5 w-3.5 text-brand-teal" />
                  </span>
                  <span>Five-person team built MVP platform and initial GTM distribution</span>
                </li>
                <li className={listStyles}>
                  <span className="mt-1 shrink-0 flex h-5 w-5 items-center justify-center rounded-full bg-brand-mint/20">
                    <Check className="h-3.5 w-3.5 text-brand-teal" />
                  </span>
                  <span>Team has grown to 13 across product, engineering, and operations</span>
                </li>
                <li className={listStyles}>
                  <span className="mt-1 shrink-0 flex h-5 w-5 items-center justify-center rounded-full bg-brand-mint/20">
                    <Check className="h-3.5 w-3.5 text-brand-teal" />
                  </span>
                  <span>Zero dollars spent on customer acquisition</span>
                </li>
              </ul>
            </article>

            {/* Capital Deployed */}
            <article className="rounded-2xl border border-brand-blue/15 bg-white/95 p-6 shadow-md">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-blue/70">Capital Efficiency</p>
              <h3 className="mt-2 text-lg font-semibold text-brand-darkBlue">All-in spend to date</h3>
              <p className="mt-4 text-3xl font-bold text-brand-darkBlue">$700K</p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-brand-blue/70">Key investments</p>
              <ul className="mt-3 space-y-3 list-none">
                <li className={listStyles}>
                  <span className="mt-1 shrink-0 flex h-5 w-5 items-center justify-center rounded-full bg-brand-mint/20">
                    <Check className="h-3.5 w-3.5 text-brand-teal" />
                  </span>
                  <span>Talent across product and engineering</span>
                </li>
                <li className={listStyles}>
                  <span className="mt-1 shrink-0 flex h-5 w-5 items-center justify-center rounded-full bg-brand-mint/20">
                    <Check className="h-3.5 w-3.5 text-brand-teal" />
                  </span>
                  <span>Operations and customer support capacity</span>
                </li>
                <li className={listStyles}>
                  <span className="mt-1 shrink-0 flex h-5 w-5 items-center justify-center rounded-full bg-brand-mint/20">
                    <Check className="h-3.5 w-3.5 text-brand-teal" />
                  </span>
                  <span>Insurance infrastructure (carrier bindings, compliance, admin stack)</span>
                </li>
              </ul>
            </article>
          </div>
        </motion.section>

        {/* Bottom navigation */}
        <div className="mt-10 flex justify-center">
          <NavigationArrow
            onClick={onNavigateNext}
            className="text-brand-blue hover:text-brand-purple transition-colors"
          />
        </div>
      </div>

      <BottomCornerLogo />
    </section>
  );
};

export default EarlyTraction;
