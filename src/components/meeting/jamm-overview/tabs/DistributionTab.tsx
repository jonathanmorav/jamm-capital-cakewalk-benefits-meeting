import { motion } from "framer-motion";
import { ArrowRight, Network, Users, Target, Building2, Laptop, Shield, UserCheck } from "lucide-react";
import { resellerCategories, distributionFunnel } from "../data";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const categoryIcons: Record<number, React.ReactNode> = {
  1: <UserCheck className="h-5 w-5" />,
  2: <Users className="h-5 w-5" />,
  3: <Building2 className="h-5 w-5" />,
  4: <Shield className="h-5 w-5" />,
  5: <Laptop className="h-5 w-5" />,
};

const DistributionTab = () => {
  return (
    <motion.div
      variants={stagger}
      initial="initial"
      animate="animate"
      className="space-y-8"
    >
      {/* Strategy Header */}
      <motion.div variants={fadeUp} transition={{ duration: 0.5 }}>
        <div className="rounded-2xl border border-brand-blue/15 bg-gradient-to-br from-brand-blue/5 via-white to-brand-lightMint/10 p-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-blue/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-blue mb-4">
            <Target className="h-3.5 w-3.5" />
            Distribution Strategy
          </span>
          <h3 className="text-2xl font-bold text-brand-darkBlue mb-3">
            Executive-Led Reseller Partnerships
          </h3>
          <p className="text-brand-gray leading-relaxed max-w-3xl">
            We engage insurance resellers at the <span className="font-semibold text-brand-darkBlue">C-suite level</span> with 
            a repeatable enterprise value proposition: incremental SMB revenue, advisor productivity gains, and operational efficiency. 
            We secure top-of-house alignment with <span className="font-semibold text-brand-darkBlue">CEOs, CROs, and Heads of Distribution</span>.
          </p>
        </div>
      </motion.div>

      {/* Funnel Visualization */}
      <motion.div variants={fadeUp} transition={{ duration: 0.5, delay: 0.1 }}>
        <div className="flex items-center gap-3 mb-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-purple/10">
            <Network className="h-5 w-5 text-brand-purple" />
          </div>
          <h3 className="text-xl font-semibold text-brand-darkBlue">
            Distribution Math
          </h3>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {distributionFunnel.map((metric, idx) => (
            <motion.div
              key={metric.label}
              variants={fadeUp}
              transition={{ delay: 0.15 + idx * 0.1 }}
              className="relative group"
            >
              <div
                className={`rounded-2xl p-6 transition-all ${
                  idx === 0
                    ? "bg-gradient-to-br from-brand-blue to-brand-blue/90 text-white"
                    : idx === 1
                    ? "bg-gradient-to-br from-brand-purple/90 to-brand-purple/80 text-white"
                    : "bg-gradient-to-br from-brand-mint to-brand-mint/90 text-brand-darkBlue"
                }`}
              >
                <div className="text-4xl font-bold mb-2">{metric.value}</div>
                <div className={`text-sm font-semibold mb-1 ${idx === 2 ? "text-brand-darkBlue" : "text-white/90"}`}>
                  {metric.label}
                </div>
                <div className={`text-xs ${idx === 2 ? "text-brand-gray" : "text-white/70"}`}>
                  {metric.description}
                </div>
              </div>
              {idx < distributionFunnel.length - 1 && (
                <div className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                  <ArrowRight className="h-6 w-6 text-brand-gray/40" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Key Result */}
        <motion.div
          variants={fadeUp}
          transition={{ delay: 0.5 }}
          className="mt-6 text-center"
        >
          <div className="inline-flex items-center gap-3 rounded-full bg-brand-blue/10 px-6 py-3">
            <span className="text-brand-blue font-bold text-lg">One relationship</span>
            <ArrowRight className="h-5 w-5 text-brand-blue" />
            <span className="text-brand-darkBlue font-bold text-lg">1,000+ distribution partnerships</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Definitions */}
      <motion.div variants={fadeUp} transition={{ duration: 0.5, delay: 0.2 }} className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-brand-blue/15 bg-white p-5">
          <div className="text-xs font-semibold uppercase tracking-wider text-brand-blue mb-2">
            Reseller
          </div>
          <p className="text-sm text-brand-gray leading-relaxed">
            A large-scale insurance or adjacent organization that serves small businesses.
          </p>
        </div>
        <div className="rounded-2xl border border-brand-purple/15 bg-white p-5">
          <div className="text-xs font-semibold uppercase tracking-wider text-brand-purple mb-2">
            Distribution Partner
          </div>
          <p className="text-sm text-brand-gray leading-relaxed">
            The advisor or platform within a reseller's ecosystem that maintains direct, trusted relationships with small business owners.
          </p>
        </div>
      </motion.div>

      {/* Five Reseller Categories */}
      <motion.div variants={fadeUp} transition={{ duration: 0.5, delay: 0.3 }}>
        <h4 className="text-lg font-semibold text-brand-darkBlue mb-4">
          Five Reseller Categories
        </h4>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {resellerCategories.map((category) => (
            <motion.div
              key={category.id}
              variants={fadeUp}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="rounded-xl border border-brand-blue/10 bg-white p-4 shadow-sm hover:shadow-md hover:border-brand-blue/30 transition-all cursor-default"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue mb-3">
                {categoryIcons[category.id]}
              </div>
              <div className="text-sm font-semibold text-brand-darkBlue mb-2 leading-tight">
                {category.name}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {category.examples.slice(0, 2).map((ex) => (
                  <span
                    key={ex}
                    className="inline-block rounded-md bg-brand-lightMint/50 px-2 py-0.5 text-xs text-brand-gray"
                  >
                    {ex}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default DistributionTab;

