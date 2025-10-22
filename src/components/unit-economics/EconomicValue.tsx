import React from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const currencyCompactFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 1,
  notation: "compact",
});

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const percentFormatter = new Intl.NumberFormat("en-US", {
  style: "percent",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

const EconomicValue = () => {
  // Assumptions
  const [premiumPerLife, setPremiumPerLife] = React.useState(125);
  const [commissionRatePct, setCommissionRatePct] = React.useState(25);
  const [persistencyYears, setPersistencyYears] = React.useState(7); // ~95% persistency approximated to 7 yrs
  const [agentSmbsPerYear, setAgentSmbsPerYear] = React.useState(5);
  const [livesPerSmb, setLivesPerSmb] = React.useState(5);
  const [agentCutPct, setAgentCutPct] = React.useState(30);
  const [netMarginPct, setNetMarginPct] = React.useState(70); // for showing LTV margin variant

  const [agentCount, setAgentCount] = React.useState(1000);

  const commissionRate = commissionRatePct / 100;
  const agentCut = agentCutPct / 100;
  const netMargin = netMarginPct / 100;

  // Per employee base monthly revenue (excludes health attach)
  const revenuePerLifeMonthly = premiumPerLife * commissionRate; // e.g., 125 * 0.25 = 31.25
  const employeeLtvRevenue = revenuePerLifeMonthly * 12 * persistencyYears;
  const employeeLtvMargin = employeeLtvRevenue * netMargin;

  // Per reseller annual economics
  const livesPerAgentPerYear = agentSmbsPerYear * livesPerSmb; // e.g., 25
  const annualPremiumPerAgent = livesPerAgentPerYear * premiumPerLife * 12; // e.g., 37,500
  const annualCommissionPerAgent = annualPremiumPerAgent * commissionRate; // e.g., 9,375
  const agentPayout = annualCommissionPerAgent * agentCut; // e.g., 2,812.50
  const cakewalkPerAgentArr = annualCommissionPerAgent * (1 - agentCut); // e.g., 6,562.50

  const arrFromAgents = cakewalkPerAgentArr * agentCount;
  const totalAgentPayouts = agentPayout * agentCount;

  const quickCounts = [1000, 5000, 10000];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="mb-16"
    >
      <header className="mx-auto mb-6 w-full max-w-4xl text-left md:text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-blue">Economic Value</p>
        <h3 className="mt-2 text-2xl font-bold text-brand-darkBlue md:text-3xl">Per Employee & Reseller Economics</h3>
        <p className="mt-4 text-sm text-brand-gray md:text-base">
          Assumptions align with the sensitivity model. Employee LTV uses a ~95% persistency proxy (7 years). Base-case excludes health attach.
        </p>
      </header>

      <div className="rounded-3xl border border-brand-blue/15 bg-white/95 p-6 shadow-md md:p-8">
        {/* Inputs Row */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          <div className="space-y-2">
            <Label htmlFor="ev-premium">Premium / Life / Month ($)</Label>
            <Input
              id="ev-premium"
              type="number"
              min={0}
              step={1}
              value={premiumPerLife}
              onChange={(e) => setPremiumPerLife(Math.max(0, Number(e.target.value) || 0))}
              className="text-sm"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="ev-commission">Commission Rate (%)</Label>
            <Input
              id="ev-commission"
              type="number"
              min={0}
              max={100}
              step={0.5}
              value={commissionRatePct}
              onChange={(e) => {
                const v = Number(e.target.value);
                if (!Number.isNaN(v)) setCommissionRatePct(Math.min(100, Math.max(0, v)));
              }}
              className="text-sm"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="ev-persistency">Persistency (years)</Label>
            <Input
              id="ev-persistency"
              type="number"
              min={1}
              step={0.5}
              value={persistencyYears}
              onChange={(e) => setPersistencyYears(Math.max(1, Number(e.target.value) || 1))}
              className="text-sm"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="ev-smbs">Agent SMBs / Year</Label>
            <Input
              id="ev-smbs"
              type="number"
              min={0}
              step={1}
              value={agentSmbsPerYear}
              onChange={(e) => setAgentSmbsPerYear(Math.max(0, Number(e.target.value) || 0))}
              className="text-sm"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="ev-lives">Lives per SMB</Label>
            <Input
              id="ev-lives"
              type="number"
              min={0}
              step={1}
              value={livesPerSmb}
              onChange={(e) => setLivesPerSmb(Math.max(0, Number(e.target.value) || 0))}
              className="text-sm"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="ev-agentcut">Agent Cut of Commission (%)</Label>
            <Input
              id="ev-agentcut"
              type="number"
              min={0}
              max={100}
              step={0.5}
              value={agentCutPct}
              onChange={(e) => {
                const v = Number(e.target.value);
                if (!Number.isNaN(v)) setAgentCutPct(Math.min(100, Math.max(0, v)));
              }}
              className="text-sm"
            />
          </div>
        </div>

        {/* Cards */}
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          {/* Employee LTV */}
          <article className="rounded-2xl border border-brand-blue/15 bg-white/95 p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-blue/70">Per Employee LTV</p>
            <h4 className="mt-2 text-lg font-semibold text-brand-darkBlue">Base (excludes health attach)</h4>
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-xl bg-brand-lightMint/10 p-3">
                <p className="text-brand-gray">Monthly Revenue / Life</p>
                <p className="font-semibold text-brand-darkBlue">{currencyFormatter.format(revenuePerLifeMonthly)}</p>
              </div>
              <div className="rounded-xl bg-brand-lightMint/10 p-3">
                <p className="text-brand-gray">LTV (Revenue, {persistencyYears}y)</p>
                <p className="font-semibold text-brand-darkBlue">{currencyFormatter.format(employeeLtvRevenue)}</p>
              </div>
              <div className="rounded-xl bg-brand-lightMint/10 p-3 col-span-2">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-brand-gray">LTV (Margin)</p>
                    <p className="text-xs text-brand-gray/80">Net Margin
                      <span className="ml-1 font-medium text-brand-darkBlue">{percentFormatter.format(netMargin)}</span>
                    </p>
                  </div>
                  <div className="w-28">
                    <Input
                      aria-label="Net Margin (%)"
                      type="number"
                      min={0}
                      max={100}
                      step={1}
                      value={Math.round(netMarginPct)}
                      onChange={(e) => {
                        const v = Number(e.target.value);
                        if (!Number.isNaN(v)) setNetMarginPct(Math.min(100, Math.max(0, v)));
                      }}
                      className="text-xs"
                    />
                  </div>
                </div>
                <p className="mt-2 font-semibold text-brand-darkBlue">{currencyFormatter.format(employeeLtvMargin)}</p>
              </div>
            </div>
            <p className="mt-3 text-xs text-brand-gray">Persistency proxy ~95% → 7-year duration. Attachment upside increases LTV proportionally.</p>
          </article>

          {/* Reseller Economics */}
          <article className="rounded-2xl border border-brand-blue/15 bg-white/95 p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-blue/70">Per Reseller Economics</p>
            <h4 className="mt-2 text-lg font-semibold text-brand-darkBlue">Annualized Contribution</h4>
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-xl bg-soft-blue/10 p-3">
                <p className="text-brand-gray">Lives / Year</p>
                <p className="font-semibold text-brand-darkBlue">{livesPerAgentPerYear.toLocaleString()}</p>
              </div>
              <div className="rounded-xl bg-soft-blue/10 p-3">
                <p className="text-brand-gray">Annual Premium</p>
                <p className="font-semibold text-brand-darkBlue">{currencyFormatter.format(annualPremiumPerAgent)}</p>
              </div>
              <div className="rounded-xl bg-soft-blue/10 p-3">
                <p className="text-brand-gray">Annual Commission</p>
                <p className="font-semibold text-brand-darkBlue">{currencyFormatter.format(annualCommissionPerAgent)}</p>
              </div>
              <div className="rounded-xl bg-soft-blue/10 p-3">
                <p className="text-brand-gray">Agent Cut</p>
                <p className="font-semibold text-brand-darkBlue">{currencyFormatter.format(agentPayout)}</p>
              </div>
              <div className="col-span-2 rounded-xl bg-soft-blue/10 p-3">
                <p className="text-brand-gray">Cakewalk ARR per Agent</p>
                <p className="font-semibold text-brand-darkBlue">{currencyFormatter.format(cakewalkPerAgentArr)}</p>
              </div>
            </div>
            <p className="mt-3 text-xs text-brand-gray">Assumes steady-state annual production; excludes multi-year stacking for simplicity.</p>
          </article>
        </div>

        {/* Agents-at-Scale Simulator */}
        <div className="mt-8 rounded-2xl border border-brand-blue/10 bg-white/95 p-4 md:p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-blue/70">ARR From Resellers at Scale</p>
              <h5 className="mt-1 text-base font-semibold text-brand-darkBlue">Simulate Agent Network Size</h5>
            </div>
            <div className="flex items-center gap-2">
              {quickCounts.map((c) => (
                <Button key={c} variant={agentCount === c ? "default" : "outline"} onClick={() => setAgentCount(c)}>
                  {c.toLocaleString()}
                </Button>
              ))}
            </div>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl bg-brand-lightMint/10 p-4">
              <p className="text-brand-gray">Cakewalk ARR</p>
              <p className="text-xl font-semibold text-brand-darkBlue">{currencyCompactFormatter.format(arrFromAgents)}</p>
            </div>
            <div className="rounded-xl bg-brand-lightMint/10 p-4">
              <p className="text-brand-gray">Total Agent Payouts</p>
              <p className="text-xl font-semibold text-brand-darkBlue">{currencyCompactFormatter.format(totalAgentPayouts)}</p>
            </div>
            <div className="rounded-xl bg-brand-lightMint/10 p-4">
              <p className="text-brand-gray">ARR / Agent</p>
              <p className="text-xl font-semibold text-brand-darkBlue">{currencyFormatter.format(cakewalkPerAgentArr)}</p>
            </div>
          </div>
          <p className="mt-3 text-xs text-brand-gray">1000 agents → {currencyCompactFormatter.format(cakewalkPerAgentArr * 1000)} ARR; 5000 → {currencyCompactFormatter.format(cakewalkPerAgentArr * 5000)}; 10000 → {currencyCompactFormatter.format(cakewalkPerAgentArr * 10000)}.</p>
        </div>
      </div>
    </motion.section>
  );
};

export default EconomicValue;
