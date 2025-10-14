import React from "react";
import { motion } from "framer-motion";
import { Target, Users, Rocket, LineChart, ShieldCheck } from "lucide-react";
import BottomCornerLogo from "./BottomCornerLogo";
import NavigationArrow from "./navigation/NavigationArrow";

interface WrapUpProps {
  onNavigateNext: () => void;
}

const keyMessages = [
  {
    icon: Target,
    title: "Massive TAM in a greenfield market",
    description: "Millions of under-served SMB employees lack modern benefits access—a multi-billion dollar opportunity Cakewalk is uniquely positioned to unlock.",
  },
  {
    icon: Users,
    title: "Proven team",
    description: "Insurance, product, and go-to-market leaders with successful exits and deep carrier relationships execute the playbook together.",
  },
  {
    icon: Rocket,
    title: "Early traction",
    description: "Live programs across resellers, affinity groups, and embedded partners validate product-market fit and distribution velocity.",
  },
  {
    icon: LineChart,
    title: "Clear valuation roadmap",
    description: "Milestone-based growth plan drives predictable ARR expansion and de-risks scale for the next financing horizon.",
  },
  {
    icon: ShieldCheck,
    title: "Great unit economics with a proven playbook",
    description: "Productized operations, delegated carrier partnerships, and low-CAC channels compound margins while keeping service quality high.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 60 } },
};

const WrapUp = ({ onNavigateNext }: WrapUpProps) => {
  return (
    <section className="relative min-h-screen bg-white px-4 py-16 md:py-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-brand-lightMint/15 to-brand-lightBlue/30" />

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto w-full max-w-4xl text-left md:text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-blue">Final Takeaways</p>
          <h1 className="mt-3 text-3xl font-bold text-brand-darkBlue md:text-5xl">
            Why Cakewalk Wins This Market
          </h1>
          <p className="mt-4 text-base text-brand-gray md:text-lg">
            We pair a breakout market with a seasoned execution engine, delivering durable economics and a clear path to outsized value creation.
          </p>
        </motion.header>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ staggerChildren: 0.12 }}
          className="grid gap-6 md:grid-cols-2"
        >
          {keyMessages.map((message) => {
            const Icon = message.icon;
            return (
              <motion.article
                key={message.title}
                variants={cardVariants}
                className="rounded-2xl border border-brand-blue/15 bg-white/95 p-6 shadow-md transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h2 className="text-lg font-semibold text-brand-darkBlue">{message.title}</h2>
                </div>
                <p className="mt-4 text-sm text-brand-gray md:text-base">{message.description}</p>
              </motion.article>
            );
          })}
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

export default WrapUp;
