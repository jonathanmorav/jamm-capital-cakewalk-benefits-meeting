import { motion } from "framer-motion";
import NavigationArrow from "../navigation/NavigationArrow";
import BottomCornerLogo from "../BottomCornerLogo";
import UseOfFunds from "../UseOfFunds";
import { Target, TrendingUp, BarChart3 } from "lucide-react";

interface FinancialsCapitalStrategyProps {
  onNavigateNext: () => void;
}

const keyFocusAreas = [
  {
    icon: BarChart3,
    title: "Financial Forecast",
    description: "Assumptions and scenarios",
  },
  {
    icon: TrendingUp,
    title: "Burn Profile and Runway",
    description: "Capital efficiency and sustainability",
  },
  {
    icon: Target,
    title: "Path to Next Round",
    description: "Investor profile, KPIs and valuation narrative",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
};

const FinancialsCapitalStrategy = ({ onNavigateNext }: FinancialsCapitalStrategyProps) => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white py-16 md:py-24 lg:py-32">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-brand-lightBlue/20 to-brand-lightMint/25" />
      <div className="absolute -top-1/4 right-0 h-3/4 w-2/3 translate-x-1/5 rounded-full bg-brand-lightBlue opacity-[0.05] blur-3xl" />

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
            Financials & Capital Strategy
          </motion.div>
          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 font-grotesk text-3xl font-bold text-brand-darkBlue sm:text-4xl md:text-5xl"
          >
            Build runway, hit milestones for valuation
          </motion.h1>
        </motion.header>

        {/* Key Focus Areas */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid gap-6 md:grid-cols-3"
        >
          {keyFocusAreas.map((area) => (
            <motion.article
              key={area.title}
              variants={fadeUp}
              className="flex flex-col gap-4 rounded-3xl border border-brand-blue/15 bg-white/95 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-soft-blue">
                <area.icon className="h-6 w-6 text-brand-blue" />
              </div>
              <h3 className="text-xl font-semibold text-brand-darkBlue">{area.title}</h3>
              <p className="text-sm text-brand-gray md:text-base">{area.description}</p>
            </motion.article>
          ))}
        </motion.div>

        {/* Embedded Use of Funds Component */}
        <div className="[&>section]:!py-0 [&>section]:!min-h-0">
          <UseOfFunds onNavigateNext={() => {}} />
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

export default FinancialsCapitalStrategy;

