import { motion } from "framer-motion";
import { Users, Building, AlertTriangle, Sparkles } from "lucide-react";
import { customerStats, marketProblems, modelStatements } from "../data";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const OverviewTab = () => {
  return (
    <motion.div
      variants={stagger}
      initial="initial"
      animate="animate"
      className="space-y-8"
    >
      {/* Customer Section */}
      <motion.div variants={fadeUp} transition={{ duration: 0.5 }}>
        <div className="flex items-center gap-3 mb-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-blue/10">
            <Users className="h-5 w-5 text-brand-blue" />
          </div>
          <h3 className="text-xl font-semibold text-brand-darkBlue">
            Who is our Customer
          </h3>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Stats Card */}
          <motion.div
            variants={fadeUp}
            className="rounded-2xl border border-brand-blue/15 bg-gradient-to-br from-brand-blue/5 via-white to-brand-lightMint/20 p-6 shadow-sm"
          >
            <p className="text-sm font-medium uppercase tracking-wider text-brand-gray mb-4">
              Small businesses—owners and employees—across the United States
            </p>
            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-bold text-brand-blue">
                {customerStats.americans}
              </span>
              <span className="text-lg text-brand-gray">
                {customerStats.description}
              </span>
            </div>
            <div className="mt-2 text-sm text-brand-gray">
              in <span className="font-semibold text-brand-darkBlue">{customerStats.smallBusinesses}</span> small businesses
            </div>
          </motion.div>

          {/* Problem Card */}
          <motion.div
            variants={fadeUp}
            className="rounded-2xl border border-amber-200/60 bg-gradient-to-br from-amber-50/80 via-white to-orange-50/40 p-6 shadow-sm"
          >
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className="h-5 w-5 text-amber-600" />
              <span className="text-sm font-semibold uppercase tracking-wider text-amber-700">
                Legacy Market Broken By
              </span>
            </div>
            <ul className="space-y-3">
              {marketProblems.map((problem, idx) => (
                <motion.li
                  key={problem}
                  variants={fadeUp}
                  transition={{ delay: 0.1 * idx }}
                  className="flex items-center gap-3"
                >
                  <span className="h-2 w-2 rounded-full bg-amber-500" />
                  <span className="text-base text-brand-gray">{problem}</span>
                </motion.li>
              ))}
            </ul>
            <div className="mt-4 pt-4 border-t border-amber-200/50">
              <p className="text-sm text-amber-700 font-medium">
                Structurally underserved by traditional benefits distribution
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Model Section */}
      <motion.div variants={fadeUp} transition={{ duration: 0.5, delay: 0.2 }}>
        <div className="flex items-center gap-3 mb-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-mint/20">
            <Building className="h-5 w-5 text-brand-blue" />
          </div>
          <h3 className="text-xl font-semibold text-brand-darkBlue">Our Model</h3>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {modelStatements.map((statement, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              transition={{ delay: 0.3 + idx * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-brand-blue/20 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-brand-blue/40"
            >
              <div className="absolute top-0 right-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-brand-lightMint/30 blur-2xl transition-all group-hover:bg-brand-mint/40" />
              <div className="relative">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="h-4 w-4 text-brand-mint" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-brand-blue">
                    {idx === 0 ? "For Small Businesses" : "For Resellers"}
                  </span>
                </div>
                <p className="text-lg font-medium text-brand-darkBlue leading-relaxed">
                  {statement}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Key Insight */}
      <motion.div
        variants={fadeUp}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="rounded-2xl bg-gradient-to-r from-brand-blue via-brand-blue to-brand-purple p-[1px]"
      >
        <div className="rounded-2xl bg-white p-6">
          <p className="text-center text-lg font-medium text-brand-darkBlue">
            <span className="text-brand-blue font-bold">Small businesses need employee benefits</span>{" "}
            but can't access them on their own — existing channels don't properly serve them.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default OverviewTab;


