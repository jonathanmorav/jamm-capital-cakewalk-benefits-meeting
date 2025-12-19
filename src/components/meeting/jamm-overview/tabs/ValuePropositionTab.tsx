import { motion } from "framer-motion";
import { Building2, Users, Briefcase, CheckCircle2, Sparkles } from "lucide-react";
import { valuePropositions } from "../data";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const iconMap: Record<string, React.ReactNode> = {
  Building2: <Building2 className="h-6 w-6" />,
  Users: <Users className="h-6 w-6" />,
  Briefcase: <Briefcase className="h-6 w-6" />,
};

const cardStyles = [
  {
    gradient: "from-brand-blue/10 via-white to-brand-lightBlue/20",
    border: "border-brand-blue/20",
    iconBg: "bg-brand-blue",
    iconColor: "text-white",
    accent: "text-brand-blue",
    checkColor: "text-brand-blue",
  },
  {
    gradient: "from-brand-purple/10 via-white to-brand-purple/5",
    border: "border-brand-purple/20",
    iconBg: "bg-brand-purple",
    iconColor: "text-white",
    accent: "text-brand-purple",
    checkColor: "text-brand-purple",
  },
  {
    gradient: "from-brand-mint/20 via-white to-brand-lightMint/30",
    border: "border-brand-mint/40",
    iconBg: "bg-brand-mint",
    iconColor: "text-brand-darkBlue",
    accent: "text-brand-darkBlue",
    checkColor: "text-brand-mint",
  },
];

const ValuePropositionTab = () => {
  return (
    <motion.div
      variants={stagger}
      initial="initial"
      animate="animate"
      className="space-y-8"
    >
      {/* Header */}
      <motion.div variants={fadeUp} transition={{ duration: 0.5 }} className="text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-blue/10 to-brand-purple/10 px-4 py-2 mb-4">
          <Sparkles className="h-4 w-4 text-brand-blue" />
          <span className="text-sm font-semibold text-brand-darkBlue">Triple Value Creation</span>
        </div>
        <h3 className="text-2xl font-bold text-brand-darkBlue">
          Value for Every Stakeholder
        </h3>
        <p className="mt-2 text-brand-gray max-w-2xl mx-auto">
          Cakewalk creates aligned incentives across the entire distribution chain
        </p>
      </motion.div>

      {/* Value Prop Cards */}
      <motion.div className="grid gap-6 lg:grid-cols-3">
        {valuePropositions.map((prop, idx) => {
          const style = cardStyles[idx];
          return (
            <motion.div
              key={prop.audience}
              variants={fadeUp}
              transition={{ delay: 0.1 + idx * 0.15 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className={`group relative overflow-hidden rounded-2xl border ${style.border} bg-gradient-to-br ${style.gradient} p-6 shadow-sm hover:shadow-lg transition-all`}
            >
              {/* Decorative blur */}
              <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-brand-lightMint/30 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative">
                {/* Icon */}
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${style.iconBg} ${style.iconColor} mb-4 shadow-sm`}>
                  {iconMap[prop.icon]}
                </div>

                {/* Audience Tag */}
                <span className={`text-xs font-semibold uppercase tracking-wider ${style.accent}`}>
                  {prop.audience}
                </span>

                {/* Title */}
                <h4 className="text-xl font-bold text-brand-darkBlue mt-2 mb-4">
                  {prop.title}
                </h4>

                {/* Benefits List */}
                <ul className="space-y-3">
                  {prop.benefits.map((benefit, bidx) => (
                    <motion.li
                      key={bidx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + idx * 0.1 + bidx * 0.05 }}
                      className="flex items-start gap-2.5"
                    >
                      <CheckCircle2 className={`h-4 w-4 ${style.checkColor} mt-0.5 flex-shrink-0`} />
                      <span className="text-sm text-brand-gray leading-snug">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Alignment Message */}
      <motion.div
        variants={fadeUp}
        transition={{ delay: 0.6 }}
        className="rounded-2xl bg-gradient-to-r from-brand-blue via-brand-purple to-brand-mint p-[1px]"
      >
        <div className="rounded-2xl bg-white/95 backdrop-blur-sm p-6 text-center">
          <p className="text-lg font-medium text-brand-darkBlue">
            <span className="text-brand-blue font-bold">Aligned incentives</span> mean everyone wins — 
            from C-suite executives to individual agents to small business employees
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ValuePropositionTab;

