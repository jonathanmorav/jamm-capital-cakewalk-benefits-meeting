import React from "react";
import { motion } from "framer-motion";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const HEALTH_PLAN_REVENUE_PER_EMPLOYEE = 15;

const baseAssumptions = {
  avgEmployeesPerSmb: 5,
  premiumPerEmployee: 125,
  commissionRate: 0.25,
  healthAdoptionRate: 0,
};

const periods = [
  {
    key: "ytd",
    label: "YTD",
    smbs: 1200,
    baseAvgEmployees: 3,
    baseLives: 3600,
    baseGrossAnnualizedPremium: 3000000,
    baseArrBase: 800000,
    baseNetMargin: null,
  },
  {
    key: "2026",
    label: "2026",
    smbs: 3500,
    baseAvgEmployees: 5,
    baseLives: 17500,
    baseGrossAnnualizedPremium: 26300000,
    baseArrBase: 6600000,
    baseNetMargin: 0.45,
  },
  {
    key: "2027",
    label: "2027",
    smbs: 10000,
    baseAvgEmployees: 4,
    baseLives: 40000,
    baseGrossAnnualizedPremium: 60000000,
    baseArrBase: 15000000,
    baseNetMargin: 0.7,
  },
];

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

const currencyWholeFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

const percentFormatter = new Intl.NumberFormat("en-US", {
  style: "percent",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

const employeesFormatter = new Intl.NumberFormat("en-US", {
  minimumFractionDigits: 0,
  maximumFractionDigits: 1,
});

const SensitivityAnalysis = () => {
  const [assumptions, setAssumptions] = React.useState(baseAssumptions);

  const handleNumberChange = (key: "avgEmployeesPerSmb" | "premiumPerEmployee") =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = Number(event.target.value);
      if (Number.isNaN(value)) return;
      const sanitized = key === "avgEmployeesPerSmb" ? Math.max(value, 1) : Math.max(value, 0);
      setAssumptions((prev) => ({ ...prev, [key]: sanitized }));
    };

  const handlePercentChange = (key: "commissionRate" | "healthAdoptionRate") =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = Number(event.target.value);
      if (Number.isNaN(value)) return;
      const maxPercent = key === "healthAdoptionRate" ? 5 : 100;
      const clamped = Math.min(Math.max(value, 0), maxPercent);
      const normalized = clamped / 100;
      setAssumptions((prev) => ({ ...prev, [key]: normalized }));
    };

  const metrics = React.useMemo(() => {
    const basePremiumPerEmployee = baseAssumptions.premiumPerEmployee;
    const baseCommissionRate = baseAssumptions.commissionRate;
    const baseRevenuePerLifeBaseline = basePremiumPerEmployee * baseCommissionRate;

    const avgEmployeesMultiplier =
      baseAssumptions.avgEmployeesPerSmb === 0 ? 0 : assumptions.avgEmployeesPerSmb / baseAssumptions.avgEmployeesPerSmb;
    const revenuePerLife = assumptions.premiumPerEmployee * assumptions.commissionRate;
    const healthRevenuePerLife = assumptions.healthAdoptionRate * HEALTH_PLAN_REVENUE_PER_EMPLOYEE;
    const totalRevenuePerLife = revenuePerLife + healthRevenuePerLife;

    return {
      revenuePerLife,
      healthRevenuePerLife,
      totalRevenuePerLife,
      rows: periods.map((period) => {
        const basePremiumScalar =
          period.baseLives === 0 || basePremiumPerEmployee === 0
            ? 0
            : period.baseGrossAnnualizedPremium / (basePremiumPerEmployee * period.baseLives * 12);
        const baseRevenueScalar =
          period.baseLives === 0 || baseRevenuePerLifeBaseline === 0
            ? 0
            : period.baseArrBase / (baseRevenuePerLifeBaseline * period.baseLives * 12);
        const adjustedAvgEmployees = period.baseAvgEmployees * avgEmployeesMultiplier;
        const lives = adjustedAvgEmployees * period.smbs;
        const grossAnnualizedPremium = basePremiumScalar * assumptions.premiumPerEmployee * lives * 12;
        const arrBase = baseRevenueScalar * revenuePerLife * lives * 12;
        const arrHealth = healthRevenuePerLife * lives * 12;
        const arrTotal = arrBase + arrHealth;
        const netMargin = period.baseNetMargin;
        const marginPerLife = netMargin == null ? null : totalRevenuePerLife * netMargin;

        return {
          key: period.key,
          label: period.label,
          smbs: period.smbs,
          avgEmployeesPerSmb: adjustedAvgEmployees,
          lives,
          grossAnnualizedPremium,
          arrBase,
          arrHealth,
          arrTotal,
          netMargin,
          marginPerLife,
        };
      }),
    };
  }, [assumptions]);

  const resetToBaseCase = () => {
    setAssumptions({ ...baseAssumptions });
  };

  const isBaseCase = React.useMemo(() => {
    return (
      assumptions.avgEmployeesPerSmb === baseAssumptions.avgEmployeesPerSmb &&
      assumptions.premiumPerEmployee === baseAssumptions.premiumPerEmployee &&
      assumptions.commissionRate === baseAssumptions.commissionRate &&
      assumptions.healthAdoptionRate === baseAssumptions.healthAdoptionRate
    );
  }, [assumptions]);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="mb-16"
    >
      <header className="mx-auto mb-6 w-full max-w-4xl text-left md:text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-blue">Sensitivity</p>
        <h3 className="mt-2 text-2xl font-bold text-brand-darkBlue md:text-3xl">Unit Economics Sensitivity</h3>
        <p className="mt-4 text-sm text-brand-gray md:text-base">
          Adjust the core assumptions to see how the model responds. Reset to Cakewalk&apos;s base case at any time. The
          table highlights the measured lift from a capped health plan attachment scenario layered on top of the base
          benefits business.
        </p>
      </header>

      <div className="mx-auto mb-6 w-full max-w-4xl rounded-2xl border border-brand-lightMint/40 bg-brand-lightMint/20 p-4 text-sm text-brand-darkBlue md:text-base">
        <p className="font-semibold text-brand-darkBlue">Disciplined Health Attachment Upside</p>
        <p className="mt-2 text-brand-gray">
          Each 1% attach lifts ARR by roughly ${(HEALTH_PLAN_REVENUE_PER_EMPLOYEE * 12 * 10).toLocaleString()} per 1,000 lives on a conservative ${HEALTH_PLAN_REVENUE_PER_EMPLOYEE} per employee assumption; controls cap at 5% to reflect near-term runway.
        </p>
        <p className="mt-2 text-brand-gray">
          Sub-25 life groups juggle ACA 50% minimum contributions even on stripped-down plans, so Cakewalk choreographs compliant contribution strategy, plan design, and administration while owners stay focused on the core business.
        </p>
      </div>

      <div className="rounded-3xl border border-brand-blue/15 bg-white/95 p-6 shadow-md md:p-8">
        <div className="flex flex-col gap-4 md:gap-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-2">
              <Label htmlFor="assumption-avg-employees">Avg Employees per SMB</Label>
              <Input
                id="assumption-avg-employees"
                type="number"
                min={1}
                step={0.5}
                value={assumptions.avgEmployeesPerSmb}
                onChange={handleNumberChange("avgEmployeesPerSmb")}
                className="text-sm"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="assumption-premium">Premium per Employee / Month ($)</Label>
              <Input
                id="assumption-premium"
                type="number"
                min={0}
                step={1}
                value={assumptions.premiumPerEmployee}
                onChange={handleNumberChange("premiumPerEmployee")}
                className="text-sm"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="assumption-commission">Commission Rate (%)</Label>
              <Input
                id="assumption-commission"
                type="number"
                min={0}
                max={100}
                step={0.5}
                value={Math.round(assumptions.commissionRate * 1000) / 10}
                onChange={handlePercentChange("commissionRate")}
                className="text-sm"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="assumption-health">Health Plan Attach (%)</Label>
              <Input
                id="assumption-health"
                type="number"
                min={0}
                max={5}
                step={0.5}
                value={Math.round(assumptions.healthAdoptionRate * 1000) / 10}
                onChange={handlePercentChange("healthAdoptionRate")}
                className="text-sm"
              />
              <p className="text-xs text-brand-gray">
                Capped at 5% adoption; each enrolled employee with a health plan adds ${HEALTH_PLAN_REVENUE_PER_EMPLOYEE}/month.
              </p>
            </div>
          </div>
          <div>
            <Button variant="outline" onClick={resetToBaseCase} disabled={isBaseCase} className="w-full md:w-auto">
              Reset to Base Case
            </Button>
          </div>
        </div>

        <div className="mt-6 overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-gradient-to-r from-soft-blue/60 to-brand-lightMint/40 text-brand-darkBlue">
                <TableHead className="w-1/3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-darkBlue/80">
                  Metric
                </TableHead>
                {metrics.rows.map((row) => (
                  <TableHead
                    key={row.key}
                    className="text-right text-xs font-semibold uppercase tracking-[0.2em] text-brand-darkBlue/80"
                  >
                    {row.label}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="hover:bg-brand-lightMint/10">
                <TableCell className="font-medium text-brand-darkBlue">SMBs Served</TableCell>
                {metrics.rows.map((row) => (
                  <TableCell key={`${row.key}-smbs`} className="text-right tabular-nums text-brand-darkBlue/90">
                    {row.smbs.toLocaleString()}
                  </TableCell>
                ))}
              </TableRow>
              <TableRow className="hover:bg-brand-lightMint/10">
                <TableCell className="font-medium text-brand-darkBlue">Avg Employees per SMB</TableCell>
                {metrics.rows.map((row) => (
                  <TableCell key={`${row.key}-employees`} className="text-right tabular-nums text-brand-darkBlue/90">
                    {employeesFormatter.format(row.avgEmployeesPerSmb)}
                  </TableCell>
                ))}
              </TableRow>
              <TableRow className="hover:bg-brand-lightMint/10">
                <TableCell className="font-medium text-brand-darkBlue">Health Plan Attach</TableCell>
                {metrics.rows.map((row) => (
                  <TableCell key={`${row.key}-health-attach`} className="text-right tabular-nums text-brand-darkBlue/90">
                    {percentFormatter.format(assumptions.healthAdoptionRate)}
                  </TableCell>
                ))}
              </TableRow>
              <TableRow className="bg-brand-lightMint/20 hover:bg-brand-lightMint/30">
                <TableCell className="font-semibold text-brand-darkBlue">Lives Served</TableCell>
                {metrics.rows.map((row) => (
                  <TableCell key={`${row.key}-lives`} className="text-right font-semibold tabular-nums text-brand-darkBlue">
                    {row.lives.toLocaleString()}
                  </TableCell>
                ))}
              </TableRow>
              <TableRow className="hover:bg-brand-lightMint/10">
                <TableCell className="font-medium text-brand-darkBlue">Premium per Employee/Month</TableCell>
                {metrics.rows.map((row) => (
                  <TableCell key={`${row.key}-premium`} className="text-right tabular-nums text-brand-darkBlue/90">
                    {currencyWholeFormatter.format(assumptions.premiumPerEmployee)}
                  </TableCell>
                ))}
              </TableRow>
              <TableRow className="hover:bg-brand-lightMint/10">
                <TableCell className="font-medium text-brand-darkBlue">Gross Annualized Premium</TableCell>
                {metrics.rows.map((row) => (
                  <TableCell key={`${row.key}-gap`} className="text-right tabular-nums text-brand-darkBlue/90">
                    {currencyCompactFormatter.format(row.grossAnnualizedPremium)}
                  </TableCell>
                ))}
              </TableRow>
              <TableRow className="bg-soft-blue/20 hover:bg-soft-blue/30">
                <TableCell className="font-semibold text-brand-darkBlue">ARR (Base Benefits)</TableCell>
                {metrics.rows.map((row) => (
                  <TableCell key={`${row.key}-arr-base`} className="text-right font-semibold tabular-nums text-brand-darkBlue">
                    {currencyCompactFormatter.format(row.arrBase)}
                  </TableCell>
                ))}
              </TableRow>
              <TableRow className="bg-brand-lightMint/30 hover:bg-brand-lightMint/40">
                <TableCell className="font-semibold text-brand-darkBlue">ARR (Incremental Health Plans)</TableCell>
                {metrics.rows.map((row) => (
                  <TableCell
                    key={`${row.key}-arr-health`}
                    className="text-right font-semibold tabular-nums text-brand-teal"
                  >
                    {currencyCompactFormatter.format(row.arrHealth)}
                  </TableCell>
                ))}
              </TableRow>
              <TableRow className="bg-soft-blue/30 hover:bg-soft-blue/40">
                <TableCell className="font-semibold text-brand-darkBlue">ARR (Total)</TableCell>
                {metrics.rows.map((row) => (
                  <TableCell key={`${row.key}-arr-total`} className="text-right font-semibold tabular-nums text-brand-darkBlue">
                    {currencyCompactFormatter.format(row.arrTotal)}
                  </TableCell>
                ))}
              </TableRow>
              <TableRow className="hover:bg-brand-lightMint/10">
                <TableCell className="font-medium text-brand-darkBlue">Base Revenue per Life (Monthly)</TableCell>
                {metrics.rows.map((row) => (
                  <TableCell key={`${row.key}-base-revenue`} className="text-right tabular-nums text-brand-darkBlue/90">
                    {currencyFormatter.format(metrics.revenuePerLife)}
                  </TableCell>
                ))}
              </TableRow>
              <TableRow className="hover:bg-brand-lightMint/10">
                <TableCell className="font-medium text-brand-darkBlue">Health Plan Revenue per Life (Monthly)</TableCell>
                {metrics.rows.map((row) => (
                  <TableCell key={`${row.key}-health-revenue`} className="text-right tabular-nums text-brand-teal/80">
                    {currencyFormatter.format(metrics.healthRevenuePerLife)}
                  </TableCell>
                ))}
              </TableRow>
              <TableRow className="hover:bg-brand-lightMint/10">
                <TableCell className="font-medium text-brand-darkBlue">Revenue per Life (Monthly)</TableCell>
                {metrics.rows.map((row) => (
                  <TableCell key={`${row.key}-revenue-life`} className="text-right tabular-nums text-brand-darkBlue/90">
                    {currencyFormatter.format(metrics.totalRevenuePerLife)}
                  </TableCell>
                ))}
              </TableRow>
              <TableRow className="hover:bg-brand-lightMint/10">
                <TableCell className="font-medium text-brand-darkBlue">Net Margin</TableCell>
                {metrics.rows.map((row) => (
                  <TableCell key={`${row.key}-net-margin`} className="text-right tabular-nums text-brand-darkBlue/90">
                    {row.netMargin == null ? "—" : percentFormatter.format(row.netMargin)}
                  </TableCell>
                ))}
              </TableRow>
              <TableRow className="hover:bg-brand-lightMint/10">
                <TableCell className="font-medium text-brand-darkBlue">Margin per Life (Monthly)</TableCell>
                {metrics.rows.map((row) => (
                  <TableCell key={`${row.key}-margin-life`} className="text-right tabular-nums text-brand-darkBlue/90">
                    {row.marginPerLife == null ? "—" : currencyFormatter.format(row.marginPerLife)}
                  </TableCell>
                ))}
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </motion.section>
  );
};

export default SensitivityAnalysis;
