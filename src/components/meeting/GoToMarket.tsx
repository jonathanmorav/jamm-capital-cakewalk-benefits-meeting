import { motion } from "framer-motion";
import NavigationArrow from "../navigation/NavigationArrow";
import BottomCornerLogo from "../BottomCornerLogo";
import GTMDistribution from "../GTMDistribution";
import { Store, Users, Handshake, Settings } from "lucide-react";

interface GoToMarketProps {
  onNavigateNext: () => void;
}

const resellerSegments = [
  {
    id: "strategic-advisor",
    title: "Strategic Advisor Networks",
    icon: Users,
    description: "Insurance agencies, financial advisors, P&C brokers",
    badgeClass: "bg-soft-blue text-brand-darkBlue",
    tileClass: "bg-soft-blue/80 border border-brand-lightBlue/60",
  },
  {
    id: "association-affinity",
    title: "Association & Affinity Aggregators",
    icon: Handshake,
    description: "Trade associations, industry groups",
    badgeClass: "bg-brand-lightMint text-brand-darkBlue",
    tileClass: "bg-brand-lightMint/70 border border-brand-lightMint/60",
  },
  {
    id: "platform-partnerships",
    title: "Platform Partnerships",
    icon: Store,
    description: "Payroll, HRIS, vertical SaaS, insurers",
    badgeClass: "bg-soft-purple text-brand-darkBlue",
    tileClass: "bg-soft-purple/80 border border-soft-purple/60",
  },
];

const activationExecution = {
  title: "Activation Execution",
  description: "Custom Configuration, Light touch, repeatable and scalable delivery",
  keyPoints: [
    "Reseller acquisition, onboarding, and activation",
    "Key partnerships and pipeline highlights",
    "Resource Requirements",
  ],
};

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
};

const GoToMarket = ({ onNavigateNext }: GoToMarketProps) => {
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
            Go-to-Market Strategy
          </motion.div>
          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 font-grotesk text-3xl font-bold text-brand-darkBlue sm:text-4xl md:text-5xl"
          >
            How we Go-to-Market
          </motion.h1>
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-4 text-base text-brand-gray md:text-lg"
          >
            Sell 1x and onboard/activate at scale
          </motion.p>
        </motion.header>

        {/* Three Core Reseller Segments */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid gap-6 md:grid-cols-3"
        >
          {resellerSegments.map((segment) => (
            <motion.article
              key={segment.id}
              variants={fadeUp}
              className={`flex flex-col gap-4 rounded-3xl border p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md ${segment.tileClass}`}
            >
              <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${segment.badgeClass}`}>
                <segment.icon className="h-6 w-6 text-brand-darkBlue" />
              </div>
              <h3 className="text-xl font-semibold text-brand-darkBlue">{segment.title}</h3>
              <p className="text-sm text-brand-gray md:text-base">{segment.description}</p>
            </motion.article>
          ))}
        </motion.div>

        {/* Activation Execution */}
        <motion.article
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="rounded-3xl border border-brand-blue/15 bg-white/95 p-8 shadow-sm"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-soft-blue">
              <Settings className="h-6 w-6 text-brand-blue" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-brand-darkBlue md:text-3xl">
                {activationExecution.title}
              </h2>
              <p className="mt-1 text-sm text-brand-gray md:text-base">
                {activationExecution.description}
              </p>
            </div>
          </div>
          <ul className="space-y-3 text-sm text-brand-gray md:text-base">
            {activationExecution.keyPoints.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-brand-mint" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </motion.article>

        {/* Embedded GTM Distribution Component */}
        <div className="[&>section]:!py-0 [&>section]:!min-h-0">
          <GTMDistribution onNavigateNext={() => {}} />
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

export default GoToMarket;

