import { motion } from "framer-motion";
import { TrendingUp, Calculator, DollarSign, BarChart3, Zap } from "lucide-react";
import { economicValueTable, resellerExample, customerLTV, enterpriseCalculation } from "../data";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const levelColors: Record<string, { bg: string; text: string; border: string }> = {
  User: { bg: "bg-slate-100", text: "text-slate-700", border: "border-slate-200" },
  Account: { bg: "bg-blue-50", text: "text-blue-700", border: "border-blue-200" },
  Partner: { bg: "bg-purple-50", text: "text-purple-700", border: "border-purple-200" },
  Reseller: { bg: "bg-brand-blue/10", text: "text-brand-blue", border: "border-brand-blue/30" },
  "Total Enterprise": { bg: "bg-gradient-to-r from-brand-blue/20 to-brand-mint/30", text: "text-brand-darkBlue", border: "border-brand-blue/40" },
};

const EconomicsTab = () => {
  return (
    <motion.div
      variants={stagger}
      initial="initial"
      animate="animate"
      className="space-y-8"
    >
      {/* LTV & Economic Value Hierarchy Table */}
      <motion.div variants={fadeUp} transition={{ duration: 0.5 }}>
        <div className="flex items-center gap-3 mb-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-blue/10">
            <BarChart3 className="h-5 w-5 text-brand-blue" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-brand-darkBlue">
              LTV & Economic Value Hierarchy
            </h3>
            <p className="text-sm text-brand-gray">15x EBITDA multiple applied</p>
          </div>
        </div>

        {/* Responsive Table */}
        <div className="rounded-2xl border border-brand-blue/15 bg-white overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px]">
              <thead>
                <tr className="bg-gradient-to-r from-brand-blue/5 to-brand-lightMint/20 border-b border-brand-blue/10">
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-brand-blue">Level</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-brand-gray">Definition</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-brand-gray">Portfolio Size</th>
                  <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wider text-brand-gray">Lifetime Value</th>
                  <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wider text-brand-gray">Annual Earnings</th>
                  <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wider text-brand-blue">Economic Value</th>
                </tr>
              </thead>
              <tbody>
                {economicValueTable.map((row, idx) => {
                  const colors = levelColors[row.level];
                  const isEnterprise = row.level === "Total Enterprise";
                  return (
                    <motion.tr
                      key={row.level}
                      variants={fadeUp}
                      transition={{ delay: idx * 0.08 }}
                      className={`border-b border-brand-blue/5 last:border-0 ${isEnterprise ? "bg-gradient-to-r from-brand-blue/5 to-brand-mint/10" : "hover:bg-brand-lightBlue/10"}`}
                    >
                      <td className="px-4 py-3">
                        <span className={`inline-flex px-2.5 py-1 rounded-lg text-xs font-bold ${colors.bg} ${colors.text} ${colors.border} border`}>
                          {row.level}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm text-brand-gray max-w-[200px]">
                        {row.definition}
                      </td>
                      <td className="px-4 py-3 text-sm text-brand-gray">
                        <div className="space-y-0.5">
                          {row.portfolioSize.map((size, sidx) => (
                            <div key={sidx} className="text-xs">{size}</div>
                          ))}
                        </div>
                      </td>
                      <td className={`px-4 py-3 text-right font-semibold ${isEnterprise ? "text-brand-blue text-lg" : "text-brand-darkBlue"}`}>
                        {row.lifetimeValue}
                      </td>
                      <td className={`px-4 py-3 text-right font-medium ${isEnterprise ? "text-brand-purple text-lg" : "text-brand-gray"}`}>
                        {row.annualEarnings}
                      </td>
                      <td className={`px-4 py-3 text-right font-bold ${isEnterprise ? "text-brand-blue text-xl" : "text-brand-blue"}`}>
                        {row.economicValue}
                      </td>
                    </motion.tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>

      {/* Reseller Example & Customer LTV */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Reseller Example */}
        <motion.div
          variants={fadeUp}
          transition={{ delay: 0.3 }}
          className="rounded-2xl border border-brand-blue/20 bg-gradient-to-br from-brand-blue/5 via-white to-brand-lightMint/10 p-6"
        >
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="h-5 w-5 text-brand-blue" />
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-blue">
              Reseller Example
            </span>
          </div>
          <h4 className="text-lg font-bold text-brand-darkBlue mb-4">
            {resellerExample.name}
          </h4>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-xs text-brand-gray uppercase tracking-wide">Lives</div>
              <div className="text-2xl font-bold text-brand-darkBlue">{resellerExample.lives}</div>
            </div>
            <div>
              <div className="text-xs text-brand-gray uppercase tracking-wide">Stabilized Conversion</div>
              <div className="text-2xl font-bold text-brand-blue">{resellerExample.conversionRate}</div>
            </div>
            <div>
              <div className="text-xs text-brand-gray uppercase tracking-wide">Annual Revenue</div>
              <div className="text-2xl font-bold text-brand-purple">{resellerExample.annualRevenue}</div>
            </div>
            <div>
              <div className="text-xs text-brand-gray uppercase tracking-wide">EV Impact</div>
              <div className="text-2xl font-bold text-brand-mint">{resellerExample.enterpriseValueImpact}</div>
            </div>
          </div>
          <p className="mt-4 text-xs text-brand-gray">
            Stabilization period: {resellerExample.stabilizationPeriod}
          </p>
        </motion.div>

        {/* Customer LTV */}
        <motion.div
          variants={fadeUp}
          transition={{ delay: 0.4 }}
          className="rounded-2xl border border-brand-purple/20 bg-gradient-to-br from-brand-purple/5 via-white to-brand-lightBlue/10 p-6"
        >
          <div className="flex items-center gap-2 mb-4">
            <DollarSign className="h-5 w-5 text-brand-purple" />
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-purple">
              Customer LTV
            </span>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center pb-3 border-b border-brand-purple/10">
              <span className="text-sm text-brand-gray">Baseline Retention</span>
              <span className="text-lg font-bold text-brand-darkBlue">{customerLTV.retentionBaseline}</span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b border-brand-purple/10">
              <span className="text-sm text-brand-gray">Retention through Product Expansion</span>
              <span className="text-lg font-bold text-brand-purple">{customerLTV.retentionExpansion}</span>
            </div>
            <div className="pt-2">
              <div className="text-xs text-brand-gray uppercase tracking-wide mb-2">Example Calculation</div>
              <div className="flex items-center gap-2 text-sm">
                <span className="font-semibold text-brand-darkBlue">{customerLTV.example.lifeBase}</span>
                <span className="text-brand-gray">×</span>
                <span className="font-semibold text-brand-blue">{customerLTV.example.conversion}</span>
                <span className="text-brand-gray">→</span>
                <span className="font-bold text-xl text-brand-purple">{customerLTV.example.annualRevenue}</span>
                <span className="text-xs text-brand-gray">annual stabilized</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Enterprise Calculation Summary */}
      <motion.div
        variants={fadeUp}
        transition={{ delay: 0.5 }}
        className="rounded-2xl bg-gradient-to-r from-brand-blue via-brand-purple to-brand-mint p-[2px]"
      >
        <div className="rounded-2xl bg-white p-6">
          <div className="flex items-center gap-2 justify-center mb-4">
            <Calculator className="h-5 w-5 text-brand-blue" />
            <span className="text-sm font-semibold uppercase tracking-wider text-brand-gray">
              Enterprise Calculation
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
            <span className="font-semibold text-brand-darkBlue">{enterpriseCalculation.resellers} resellers</span>
            <span className="text-brand-gray">×</span>
            <span className="font-semibold text-brand-blue">{enterpriseCalculation.conversionRate} conversion</span>
            <span className="text-brand-gray">=</span>
            <span className="font-bold text-brand-purple">{enterpriseCalculation.activatedResellers} activated</span>
            <span className="text-brand-gray">×</span>
            <span className="font-semibold text-brand-darkBlue">{enterpriseCalculation.annualEarningsPerReseller}/yr</span>
            <span className="text-brand-gray">=</span>
            <span className="font-bold text-brand-blue">{enterpriseCalculation.totalAnnualEarnings}</span>
            <span className="text-brand-gray">×</span>
            <span className="font-semibold text-brand-darkBlue">{enterpriseCalculation.multiple}</span>
            <span className="text-brand-gray">=</span>
            <div className="inline-flex items-center gap-1 rounded-xl bg-gradient-to-r from-brand-blue/10 to-brand-mint/20 px-4 py-2">
              <Zap className="h-4 w-4 text-brand-blue" />
              <span className="font-bold text-xl text-brand-blue">{enterpriseCalculation.enterpriseValue}</span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default EconomicsTab;

