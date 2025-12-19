import { motion } from "framer-motion";
import NavigationArrow from "../navigation/NavigationArrow";
import BottomCornerLogo from "../BottomCornerLogo";
import { Users, Target, Handshake } from "lucide-react";

interface WelcomeFramingProps {
  onNavigateNext: () => void;
}

const objectives = [
  {
    icon: Handshake,
    title: "Build trust and alignment across teams",
    description: "Establish open communication and shared understanding between Cakewalk and JAMM Capital",
  },
  {
    icon: Target,
    title: "Align on vision, priorities, and success metrics",
    description: "Ensure both teams are working toward the same goals with clear, measurable outcomes",
  },
  {
    icon: Users,
    title: "Investor engagement support",
    description: "Identify how JAMM Capital can best support Cakewalk's growth and investor relations",
  },
];

const agendaItems = [
  { time: "20 min", title: "Welcome & Framing", presenters: "James/Paul" },
  { time: "15 min", title: "Strategic Vision", presenters: "Paul/Andy" },
  { time: "30 min", title: "How we Go-to-Market", presenters: "Bill/Jonathan, Angela" },
  { time: "40 min", title: "Product & Technology", presenters: "Niv/Jonathan/Charlie/Tom/Snir" },
  { time: "30 min", title: "Business Model & Economics", presenters: "Paul/Andy/Jonathan" },
  { time: "30 min", title: "Financials & Capital Strategy", presenters: "Paul/Andy" },
  { time: "30 min", title: "Operations & Infrastructure", presenters: "Jonathan" },
  { time: "20 min", title: "Investor Engagement & Next Steps", presenters: "James" },
];

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
};

const WelcomeFraming = ({ onNavigateNext }: WelcomeFramingProps) => {
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
            Meeting Objectives
          </motion.div>
          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 font-grotesk text-3xl font-bold text-brand-darkBlue sm:text-4xl md:text-5xl"
          >
            Establish alignment on vision, strategy, and execution
          </motion.h1>
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-4 text-base text-brand-gray md:text-lg"
          >
            Building the foundation for long-term value creation and strategic partnership
          </motion.p>
        </motion.header>

        {/* Objectives */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid gap-6 md:grid-cols-3"
        >
          {objectives.map((objective) => (
            <motion.article
              key={objective.title}
              variants={fadeUp}
              className="flex flex-col gap-4 rounded-3xl border border-brand-blue/15 bg-white/95 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-soft-blue">
                <objective.icon className="h-6 w-6 text-brand-blue" />
              </div>
              <h3 className="text-xl font-semibold text-brand-darkBlue">{objective.title}</h3>
              <p className="text-sm text-brand-gray md:text-base">{objective.description}</p>
            </motion.article>
          ))}
        </motion.div>

        {/* Agenda Overview */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="rounded-3xl border border-brand-blue/15 bg-white/90 p-8 shadow-sm"
        >
          <h2 className="mb-6 text-2xl font-semibold text-brand-darkBlue md:text-3xl">Meeting Agenda</h2>
          <div className="space-y-4">
            {agendaItems.map((item, index) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                className="flex items-start gap-4 rounded-2xl border border-brand-blue/10 bg-white/60 p-4 transition hover:bg-white/80"
              >
                <div className="flex-shrink-0 rounded-lg bg-brand-blue/10 px-3 py-1.5">
                  <span className="text-xs font-semibold text-brand-blue">{item.time}</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-brand-darkBlue">{item.title}</h3>
                  <p className="mt-1 text-sm text-brand-gray">Presented by: {item.presenters}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
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

export default WelcomeFraming;

