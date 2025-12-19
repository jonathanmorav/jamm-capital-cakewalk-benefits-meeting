import { motion } from "framer-motion";
import NavigationArrow from "../navigation/NavigationArrow";
import BottomCornerLogo from "../BottomCornerLogo";
import { CheckCircle2, Target, Calendar, Handshake } from "lucide-react";

interface InvestorEngagementNextStepsProps {
  onNavigateNext: () => void;
}

const actionItems = [
  "Review and align on strategic priorities",
  "Identify areas for strategic investor support",
  "Establish communication cadence",
  "Define success metrics and KPIs",
];

const strategicSupport = [
  {
    icon: Target,
    title: "Strategic Guidance",
    description: "Leverage JAMM Capital's expertise in scaling businesses",
  },
  {
    icon: Handshake,
    title: "Network Access",
    description: "Connections to potential partners, customers, and advisors",
  },
  {
    icon: CheckCircle2,
    title: "Operational Support",
    description: "Assistance with key operational milestones",
  },
];

const roundClosing = {
  title: "Round Closing Mechanics and Timeline",
  description: "Path forward for investment round completion",
};

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
};

const InvestorEngagementNextSteps = ({ onNavigateNext }: InvestorEngagementNextStepsProps) => {
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
            Next Steps
          </motion.div>
          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 font-grotesk text-3xl font-bold text-brand-darkBlue sm:text-4xl md:text-5xl"
          >
            Investor Engagement & Next Steps
          </motion.h1>
        </motion.header>

        {/* Action Items */}
        <motion.article
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-3xl border border-brand-blue/15 bg-white/95 p-8 shadow-sm"
        >
          <h2 className="mb-6 text-2xl font-semibold text-brand-darkBlue md:text-3xl">Action Items</h2>
          <ul className="space-y-4">
            {actionItems.map((item) => (
              <motion.li
                key={item}
                variants={fadeUp}
                className="flex items-start gap-3 text-base text-brand-gray md:text-lg"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-teal" />
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.article>

        {/* Strategic Support Areas */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid gap-6 md:grid-cols-3"
        >
          {strategicSupport.map((support) => (
            <motion.article
              key={support.title}
              variants={fadeUp}
              className="flex flex-col gap-4 rounded-3xl border border-brand-blue/15 bg-white/95 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-soft-blue">
                <support.icon className="h-6 w-6 text-brand-blue" />
              </div>
              <h3 className="text-xl font-semibold text-brand-darkBlue">{support.title}</h3>
              <p className="text-sm text-brand-gray md:text-base">{support.description}</p>
            </motion.article>
          ))}
        </motion.div>

        {/* Round Closing */}
        <motion.article
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="rounded-3xl border border-brand-blue/20 bg-gradient-to-br from-brand-blue/10 via-white to-brand-lightMint/30 p-8 shadow-md"
        >
          <div className="flex items-center gap-3 mb-4">
            <Calendar className="h-6 w-6 text-brand-blue" />
            <h2 className="text-2xl font-semibold text-brand-darkBlue md:text-3xl">
              {roundClosing.title}
            </h2>
          </div>
          <p className="text-sm text-brand-gray md:text-base">{roundClosing.description}</p>
        </motion.article>

        {/* Next Meeting Cadence */}
        <motion.article
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="rounded-3xl border border-brand-blue/15 bg-white/95 p-8 shadow-sm"
        >
          <h2 className="mb-4 text-2xl font-semibold text-brand-darkBlue md:text-3xl">Next Meeting Cadence</h2>
          <p className="text-sm text-brand-gray md:text-base">
            Regular check-ins to maintain alignment and track progress on key initiatives.
          </p>
        </motion.article>
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

export default InvestorEngagementNextSteps;

