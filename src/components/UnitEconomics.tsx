
import React from "react";
import UnitEconomicsHeader from "./unit-economics/UnitEconomicsHeader";
import KeyPerformanceTable from "./unit-economics/KeyPerformanceTable";
import SensitivityAnalysis from "./unit-economics/SensitivityAnalysis";
import EconomicValue from "./unit-economics/EconomicValue";
import SectionFooter from "./use-of-funds/SectionFooter";
import BottomCornerLogo from "./BottomCornerLogo";

interface UnitEconomicsProps {
  onNavigateNext: () => void;
}

const UnitEconomics = ({ onNavigateNext }: UnitEconomicsProps) => {
  return (
    <section className="relative min-h-screen py-16 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto">
        {/* Header */}
        <UnitEconomicsHeader />

        {/* Key Performance Indicators */}
        <KeyPerformanceTable />

        {/* Sensitivity Analysis */}
        <SensitivityAnalysis />

        {/* Economic Value Section */}
        <EconomicValue />

        {/* Four theme cards replacing detailed modules */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-16">
          {/* High Persistency */}
          <article className="rounded-2xl border border-brand-blue/15 bg-white/95 p-6 shadow-md transition hover:shadow-lg">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-blue/70">Retention</p>
            <h3 className="mt-2 text-lg font-semibold text-brand-darkBlue">High Persistency (95%)</h3>
            <p className="mt-3 text-sm text-brand-gray">
              Curated SMB cohorts, guided bundles, and clean servicing flows keep
              members enrolled year over year with persistency around 95%.
            </p>

          </article>

          {/* High Margins */}
          <article className="rounded-2xl border border-brand-blue/15 bg-white/95 p-6 shadow-md transition hover:shadow-lg">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-blue/70">Contribution</p>
            <h3 className="mt-2 text-lg font-semibold text-brand-darkBlue">High Margins</h3>
            <p className="mt-3 text-sm text-brand-gray">
              Owning enrollment, billing, and administration reduces cost-to-serve
              while dynamic pricing and cross‑sell raise contribution per life.
            </p>

          </article>

          {/* Low CAC via aggregated GTM */}
          <article className="rounded-2xl border border-brand-blue/15 bg-white/95 p-6 shadow-md transition hover:shadow-lg">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-blue/70">Acquisition</p>
            <h3 className="mt-2 text-lg font-semibold text-brand-darkBlue">Low CAC via Aggregation</h3>
            <p className="mt-3 text-sm text-brand-gray">
              Aggregated demand from associations, resellers, and embedded partners
              yields warm, qualified SMBs at structurally lower CAC.
            </p>

          </article>

          {/* Value chain + technology leverage */}
          <article className="rounded-2xl border border-brand-blue/15 bg-white/95 p-6 shadow-md transition hover:shadow-lg">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-blue/70">Operating Leverage</p>
            <h3 className="mt-2 text-lg font-semibold text-brand-darkBlue">Value Chain + Technology</h3>
            <p className="mt-3 text-sm text-brand-gray">
              Control across distribution, product, underwriting, and admin expands
              the top line; automation and data services expand the bottom line.
            </p>

          </article>
        </div>

        {/* Footer with navigation */}
        <SectionFooter onNavigateNext={onNavigateNext} />
      </div>
      <BottomCornerLogo />
    </section>
  );
};

export default UnitEconomics;
