
import React from "react";
import { motion } from "framer-motion";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";

const KeyPerformanceTable = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mb-16"
    >
      <header className="mx-auto mb-4 w-full max-w-4xl text-left md:text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-blue">KPIs</p>
        <h3 className="mt-2 text-2xl font-bold text-brand-darkBlue md:text-3xl">Key Performance Indicators</h3>
        <p className="mt-2 text-xs text-brand-gray/80 md:text-sm">
          Projections below reflect Cakewalk&apos;s base case with <span className="font-semibold text-brand-darkBlue/80">zero health plan attachment</span>; incremental health revenue (capped at 5% attach) is explored in the sensitivity model.
        </p>
      </header>
      <div className="overflow-x-auto rounded-3xl border border-brand-blue/15 bg-white/95 p-4 shadow-md md:p-6">
        <Table>
          <TableHeader>
            <TableRow className="bg-gradient-to-r from-soft-blue/60 to-brand-lightMint/40 text-brand-darkBlue">
              <TableHead className="w-1/4 text-xs font-semibold uppercase tracking-[0.2em] text-brand-darkBlue/80">Metric</TableHead>
              <TableHead className="text-right text-xs font-semibold uppercase tracking-[0.2em] text-brand-darkBlue/80">YTD</TableHead>
              <TableHead className="text-right text-xs font-semibold uppercase tracking-[0.2em] text-brand-darkBlue/80">2026</TableHead>
              <TableHead className="text-right text-xs font-semibold uppercase tracking-[0.2em] text-brand-darkBlue/80">2027</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {/* SMBs Served added above Lives Served */}
            <TableRow className="hover:bg-brand-lightMint/10">
              <TableCell className="font-medium text-brand-darkBlue">SMBs Served</TableCell>
              <TableCell className="text-right tabular-nums text-brand-darkBlue/90">1,200</TableCell>
              <TableCell className="text-right tabular-nums text-brand-darkBlue/90">3,500</TableCell>
              <TableCell className="text-right tabular-nums text-brand-darkBlue/90">10,000</TableCell>
            </TableRow>
            <TableRow className="hover:bg-brand-lightMint/10">
              <TableCell className="font-medium text-brand-darkBlue">Avg Employees per SMB</TableCell>
              <TableCell className="text-right tabular-nums text-brand-darkBlue/90">3</TableCell>
              <TableCell className="text-right tabular-nums text-brand-darkBlue/90">5</TableCell>
              <TableCell className="text-right tabular-nums text-brand-darkBlue/90">4</TableCell>
            </TableRow>
            <TableRow className="bg-brand-lightMint/20 hover:bg-brand-lightMint/30">
              <TableCell className="font-semibold text-brand-darkBlue">Lives Served</TableCell>
              <TableCell className="text-right font-semibold tabular-nums text-brand-darkBlue">3,600</TableCell>
              <TableCell className="text-right font-semibold tabular-nums text-brand-darkBlue">17,500</TableCell>
              <TableCell className="text-right font-semibold tabular-nums text-brand-darkBlue">40,000</TableCell>
            </TableRow>
            <TableRow className="hover:bg-brand-lightMint/10">
              <TableCell className="font-medium text-brand-darkBlue">Premium per Employee/Month</TableCell>
              <TableCell className="text-right tabular-nums text-brand-darkBlue/90">$125</TableCell>
              <TableCell className="text-right tabular-nums text-brand-darkBlue/90">$125</TableCell>
              <TableCell className="text-right tabular-nums text-brand-darkBlue/90">$125</TableCell>
            </TableRow>
            <TableRow className="hover:bg-brand-lightMint/10">
              <TableCell className="font-medium text-brand-darkBlue">Gross Annualized Premium</TableCell>
              <TableCell className="text-right tabular-nums text-brand-darkBlue/90">$3.0M</TableCell>
              <TableCell className="text-right tabular-nums text-brand-darkBlue/90">$26.3M</TableCell>
              <TableCell className="text-right tabular-nums text-brand-darkBlue/90">$60.0M</TableCell>
            </TableRow>
            {/* ARR derived from Lives Served * Revenue per Life (Monthly) * 12 */}
            <TableRow className="bg-soft-blue/20 hover:bg-soft-blue/30">
              <TableCell className="font-semibold text-brand-darkBlue">ARR</TableCell>
              <TableCell className="text-right font-semibold tabular-nums text-brand-darkBlue">$0.8M</TableCell>
              <TableCell className="text-right font-semibold tabular-nums text-brand-darkBlue">$6.6M</TableCell>
              <TableCell className="text-right font-semibold tabular-nums text-brand-darkBlue">$15.0M</TableCell>
            </TableRow>
            <TableRow className="hover:bg-brand-lightMint/10">
              <TableCell className="font-medium text-brand-darkBlue">Revenue per Life (Monthly)</TableCell>
              <TableCell className="text-right tabular-nums text-brand-darkBlue/90">$31.25</TableCell>
              <TableCell className="text-right tabular-nums text-brand-darkBlue/90">$31.25</TableCell>
              <TableCell className="text-right tabular-nums text-brand-darkBlue/90">$31.25</TableCell>
            </TableRow>
            <TableRow className="hover:bg-brand-lightMint/10">
              <TableCell className="font-medium text-brand-darkBlue">Net Margin</TableCell>
              <TableCell className="text-right tabular-nums text-brand-darkBlue/60">—</TableCell>
              <TableCell className="text-right tabular-nums text-brand-darkBlue/90">45%</TableCell>
              <TableCell className="text-right tabular-nums text-brand-darkBlue/90">70%</TableCell>
            </TableRow>
            <TableRow className="hover:bg-brand-lightMint/10">
              <TableCell className="font-medium text-brand-darkBlue">Margin per Life (Monthly)</TableCell>
              <TableCell className="text-right tabular-nums text-brand-darkBlue/60">—</TableCell>
              <TableCell className="text-right tabular-nums text-brand-darkBlue/90">$14.06</TableCell>
              <TableCell className="text-right tabular-nums text-brand-darkBlue/90">$21.88</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </motion.div>
  );
};

export default KeyPerformanceTable;
