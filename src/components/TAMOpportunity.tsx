import { motion } from "framer-motion";
import BottomCornerLogo from "./BottomCornerLogo";
import NavigationArrow from "./navigation/NavigationArrow";

interface TAMOpportunityProps {
  onNavigateNext: () => void;
}

const tamMetrics = [
  {
    id: "workforce",
    label: "SMB workforce",
    value: "61.7M",
    detail: "Employees who rely on small-business sponsored benefits",
  },
  {
    id: "employers",
    label: "SMB employers",
    value: "33.2M",
    detail: "Companies in the long tail that traditional carriers underserve",
  },
  {
    id: "tam",
    label: "Annual revenue pool",
    value: "$18.5B",
    detail: "61.7M employees × $25 monthly revenue per life × 12 months",
  },
  {
    id: "persistency",
    label: "Policy persistency",
    value: "95%",
    detail: "Average policy remains in force 7+ years on Cakewalk",
  },
];

const narrativePoints = [
  "Fragmented distribution leaves owners navigating benefits without expertise or time.",
  "Premiums run 30–50% higher than enterprise rates, so coverage is the first cost item cut.",
  "Carriers need a turnkey channel that can profitably serve the long tail of employers.",
];

const opportunityStats = [
  {
    label: "Revenue per covered life",
    value: "$25/mo",
    detail: "Carrier revenue share captured by Cakewalk",
  },
  {
    label: "Lifetime value per life",
    value: "~$1.1K",
    detail: "$25 × 12 months × 7+ year average persistency",
  },
  {
    label: "Workforce represented",
    value: "45%",
    detail: "Share of U.S. employees who work for SMBs today",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
};

const TAMOpportunity = ({ onNavigateNext }: TAMOpportunityProps) => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white py-16 md:py-24 lg:py-32">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-brand-lightBlue/20 to-brand-lightMint/25" />
      <div className="absolute -top-1/4 right-0 h-3/4 w-2/3 translate-x-1/5 rounded-full bg-brand-lightBlue opacity-[0.05] blur-3xl" />
      <div className="absolute -bottom-1/3 left-[-10%] h-1/2 w-1/2 rounded-full bg-brand-lightMint opacity-[0.08] blur-3xl" />

      <div className="container relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 md:px-6">
        <motion.header
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-left md:text-center"
        >
          <motion.div
            className="inline-flex items-center rounded-full bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-brand-blue shadow-sm"
            variants={fadeUp}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            Total Addressable Market
          </motion.div>
          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 font-grotesk text-3xl font-bold text-brand-darkBlue sm:text-4xl md:text-5xl"
          >
            SMB benefits is a multi-billion opportunity hiding in plain sight
          </motion.h1>
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-4 text-base text-brand-gray md:text-lg"
          >
            The 33 million small employers that power half of the U.S. workforce struggle to launch or manage benefits. Cakewalk
            activates that demand with embedded distribution, delegated underwriting, and digital-first servicing.
          </motion.p>
        </motion.header>

        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid gap-4 rounded-3xl border border-brand-blue/10 bg-white/90 p-6 shadow-sm sm:grid-cols-2 lg:grid-cols-4"
        >
          {tamMetrics.map((metric) => (
            <div key={metric.id} className="flex flex-col gap-2">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-blue/70">
                {metric.label}
              </span>
              <span className="text-3xl font-bold text-brand-darkBlue md:text-4xl">{metric.value}</span>
              <span className="text-sm text-brand-gray/90">{metric.detail}</span>
            </div>
          ))}
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[1.05fr,0.95fr]">
          <motion.article
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-6 rounded-3xl border border-brand-blue/15 bg-white/95 p-8 shadow-sm"
          >
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-blue">Why this matters</span>
              <h2 className="mt-3 text-2xl font-semibold text-brand-darkBlue md:text-3xl">
                SMB owners are underserved, but they control retention, hiring, and spend
              </h2>
              <p className="mt-3 text-sm text-brand-gray md:text-base">
                Benefits determine whether small teams can compete for talent, yet incumbents built their products,
                pricing, and processes around enterprise buyers. Cakewalk closes that gap with digital-first consumer experiences and world-class automation built for
                small-business and carrier realities.
              </p>
            </div>
            <motion.ul
              className="space-y-4 text-sm text-brand-gray md:text-base"
              variants={{ initial: { opacity: 0 }, animate: { opacity: 1, transition: { staggerChildren: 0.12 } } }}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
            >
              {narrativePoints.map((point) => (
                <motion.li
                  key={point}
                  variants={{ initial: { opacity: 0, y: 12 }, animate: { opacity: 1, y: 0 } }}
                  className="flex items-start gap-3"
                >
                  <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-brand-mint" />
                  <span>{point}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.article>

          <motion.article
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col gap-6 rounded-3xl border border-brand-blue/20 bg-gradient-to-br from-brand-blue/10 via-white to-brand-lightMint/30 p-8 shadow-md"
          >
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-blue">The Cakewalk opportunity</span>
              <h2 className="mt-3 text-2xl font-semibold text-brand-darkBlue md:text-3xl">
                Digitally activate the long tail and turn benefits into a predictable ARR stream
              </h2>
              <p className="mt-3 text-sm text-brand-gray md:text-base">
                By orchestrating onboarding, underwriting, billing and administration in one stack, Cakewalk monetizes segments that were previously unprofitable to reach.
              </p>
            </div>
            <div className="grid gap-4 rounded-2xl border border-brand-blue/15 bg-white/80 p-6 text-sm text-brand-gray md:text-base">
              {opportunityStats.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-blue/70">
                    {stat.label}
                  </span>
                  <span className="text-2xl font-bold text-brand-darkBlue">{stat.value}</span>
                  <span className="text-sm text-brand-gray/90">{stat.detail}</span>
                </div>
              ))}
            </div>
          </motion.article>
        </div>
      </div>

      <BottomCornerLogo />
      <div className="mt-12 flex justify-center">
        <NavigationArrow
          onClick={onNavigateNext}
          className="text-brand-blue transition-colors hover:text-brand-purple"
        />
      </div>
    </section>
  );
};

export default TAMOpportunity;
