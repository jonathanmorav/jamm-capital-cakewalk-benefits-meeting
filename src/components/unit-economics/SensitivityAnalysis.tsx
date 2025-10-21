import React from "react";
import { motion } from "framer-motion";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const NET_MARGIN = 0.7;
const HEALTH_PLAN_REVENUE_PER_EMPLOYEE = 40;

const baseAssumptions = {
  avgEmployeesPerSmb: 5,
  premiumPerEmployee: 125,
  commissionRate: 0.25,
  healthAdoptionRate: 0,
};

const periods = [
  { key: "ytd", label: "YTD", smbs: 1200 },
  { key: "2026", label: "2026", smbs: 5000 },
  { key: "2027", label: "2027", smbs: 10000 },
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
      const clamped = Math.min(Math.max(value, 0), 100);
      const normalized = clamped / 100;
      setAssumptions((prev) => ({ ...prev, [key]: normalized }));
    };

  const metrics = React.useMemo(() => {
    const baseRevenuePerLife = assumptions.premiumPerEmployee * assumptions.commissionRate;
    const healthRevenuePerLife = assumptions.healthAdoptionRate * HEALTH_PLAN_REVENUE_PER_EMPLOYEE;
    const totalRevenuePerLife = baseRevenuePerLife + healthRevenuePerLife;
    const baseArrPerLife = baseRevenuePerLife * 12;
    const healthArrPerLife = healthRevenuePerLife * 12;
    const marginPerLife = totalRevenuePerLife * NET_MARGIN;

    return {
      baseRevenuePerLife,
      healthRevenuePerLife,
      totalRevenuePerLife,
      marginPerLife,
      rows: periods.map((period) => {
        const lives = period.smbs * assumptions.avgEmployeesPerSmb;
        const grossAnnualizedPremium = lives * assumptions.premiumPerEmployee * 12;
        const arrBase = baseArrPerLife * lives;
        const arrHealth = healthArrPerLife * lives;
        const arrTotal = arrBase + arrHealth;

        return {
          key: period.key,
          label: period.label,
          smbs: period.smbs,
          lives,
          grossAnnualizedPremium,
          arrBase,
          arrHealth,
          arrTotal,
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
          table calls out the incremental lift that health plan attachment creates on ARR.
        </p>
      </header>

      <div className="mx-auto mb-6 w-full max-w-4xl rounded-2xl border border-brand-lightMint/40 bg-brand-lightMint/20 p-4 text-sm text-brand-darkBlue md:text-base">
        <p className="font-semibold text-brand-darkBlue">Health Plan Attachment Drives Step-Change ARR</p>
        <p className="mt-2 text-brand-gray">
          Every incremental 1% of employees attaching a health plan adds ~${(HEALTH_PLAN_REVENUE_PER_EMPLOYEE * 12).toLocaleString()} ARR per 1,000 enrolled lives. Use the health attach control to visualize how even modest adoption layers meaningful revenue and margin on top of the base benefits business.
        </p>
      </div>

      <div className="grid gap-4 rounded-3xl border border-brand-blue/15 bg-white/95 p-6 shadow-md md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:gap-6 md:p-8">
        <div className="grid gap-4 md:grid-cols-2 md:gap-6">
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
              max={100}
              step={0.5}
              value={Math.round(assumptions.healthAdoptionRate * 1000) / 10}
              onChange={handlePercentChange("healthAdoptionRate")}
              className="text-sm"
            />
            <p className="text-xs text-brand-gray">
              Each enrolled employee with a health plan adds ${HEALTH_PLAN_REVENUE_PER_EMPLOYEE}/month.
            </p>
          </div>
          <div className="md:col-span-2">
            <Button variant="outline" onClick={resetToBaseCase} disabled={isBaseCase} className="w-full md:w-auto">
              Reset to Base Case
            </Button>
          </div>
        </div>

        <div className="overflow-x-auto">
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
                    {employeesFormatter.format(assumptions.avgEmployeesPerSmb)}
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
                    {currencyFormatter.format(metrics.baseRevenuePerLife)}
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
                    {percentFormatter.format(NET_MARGIN)}
                  </TableCell>
                ))}
              </TableRow>
              <TableRow className="hover:bg-brand-lightMint/10">
                <TableCell className="font-medium text-brand-darkBlue">Margin per Life (Monthly)</TableCell>
                {metrics.rows.map((row) => (
                  <TableCell key={`${row.key}-margin-life`} className="text-right tabular-nums text-brand-darkBlue/90">
                    {currencyFormatter.format(metrics.marginPerLife)}
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
