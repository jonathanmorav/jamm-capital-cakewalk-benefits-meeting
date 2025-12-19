import { motion } from "framer-motion";
import NavigationArrow from "../navigation/NavigationArrow";
import BottomCornerLogo from "../BottomCornerLogo";
import UnitEconomics from "../UnitEconomics";
import { TrendingUp, Handshake, DollarSign } from "lucide-react";

interface BusinessModelEconomicsProps {
  onNavigateNext: () => void;
}

const valueChainEngagement = {
  title: "Engage across the value chain to drive unit economics",
  description: "Revenue, customer, and reseller targets",
};

const strategicOpportunities = [
  {
    icon: TrendingUp,
    title: "Pipeline",
    description: "Current and projected pipeline growth",
  },
  {
    icon: Handshake,
    title: "Partnerships",
    description: "Strategic partnerships driving value",
  },
  {
    icon: DollarSign,
    title: "Expansion",
    description: "Revenue expansion opportunities",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
};

const BusinessModelEconomics = ({ onNavigateNext }: BusinessModelEconomicsProps) => {
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
            Business Model & Economics
          </motion.div>
          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 font-grotesk text-3xl font-bold text-brand-darkBlue sm:text-4xl md:text-5xl"
          >
            {valueChainEngagement.title}
          </motion.h1>
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-4 text-base text-brand-gray md:text-lg"
          >
            {valueChainEngagement.description}
          </motion.p>
        </motion.header>

        {/* Strategic Opportunities */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid gap-6 md:grid-cols-3"
        >
          {strategicOpportunities.map((opportunity) => (
            <motion.article
              key={opportunity.title}
              variants={fadeUp}
              className="flex flex-col gap-4 rounded-3xl border border-brand-blue/15 bg-white/95 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-soft-blue">
                <opportunity.icon className="h-6 w-6 text-brand-blue" />
              </div>
              <h3 className="text-xl font-semibold text-brand-darkBlue">{opportunity.title}</h3>
              <p className="text-sm text-brand-gray md:text-base">{opportunity.description}</p>
            </motion.article>
          ))}
        </motion.div>

        {/* Embedded Unit Economics Component */}
        <div className="[&>section]:!py-0 [&>section]:!min-h-0">
          <UnitEconomics onNavigateNext={() => {}} />
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

export default BusinessModelEconomics;

