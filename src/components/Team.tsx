import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import BottomCornerLogo from "./BottomCornerLogo";

interface TeamProps {
  onNavigateNext: () => void;
}

const leadership = [
  {
    name: "Paul Gable",
    title: "Chief Executive Officer",
    highlights: [
      "Former Chief Insurance Officer at Salty (acquired by CDK Global).",
      "Led underwriting and product teams at Prudential.",
      "Built and exited IBX to Alliant Insurance Services."
    ]
  },
  {
    name: "Jonathan Morav",
    title: "Chief Operating Officer",
    highlights: [
      "Scaled operations, sales, and strategy at Fabric.",
      "Process optimization specialist across complex workflows.",
      "Cross-functional leader delivering across operations, strategy, and GTM."
    ]
  },
  {
    name: "Bill Kennedy",
    title: "Chief Revenue Officer",
    highlights: [
      "Former President of Heritage One, scaling mid-market benefits distribution.",
      "Directed growth and partnerships at MCG Group.",
      "20+ years building carrier and broker relationships."
    ]
  },
  {
    name: "Niv Ben-Dor",
    title: "Chief Product Officer",
    highlights: [
      "Led product strategy at Cover Whale, a high-growth insurtech.",
      "Head of Product & Monetization at Content IQ (exit to Perion).",
      "Product-led growth expert focused on intuitive experiences."
    ]
  }
];

const advisors = [
  "Kevin McCarthy — Former CEO, UNUM USA",
  "Bill Deehan — Special Advisor to the CEO of AFLAC",
  "Adam Pannell — Regional President; Former EVP, Mergers & Acquisitions at OneDigital",
  "Keith Bexell - Former Chief Underwriting Officer, Chief Operating Officer at MetLife",
  "Sina Chehrazi - Founder and CEO at Nayya Health",
  "Melanie Langsett - Former Head of Compensation & Benefits at Deloitte"
];

// Removed Execution Advantage tile per request

const Team = (_props: TeamProps) => {
  return (
    <section className="relative min-h-screen bg-white px-4 py-16 md:py-24">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto w-full max-w-4xl text-left md:text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-blue">Team</p>
          <h1 className="mt-3 text-3xl font-bold text-brand-darkBlue md:text-5xl">
            Operators, Product Builders, and Insurance Veterans
          </h1>
          <p className="mt-4 text-base text-brand-gray md:text-lg">
            Decades of experience shipping insurance technology, scaling distribution, and
            keeping execution disciplined for SMB benefits.
          </p>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid gap-6 md:grid-cols-2"
        >
          {leadership.map((leader) => (
            <article
              key={leader.name}
              className="rounded-2xl border border-brand-blue/15 bg-white/95 p-6 shadow-md transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-blue/70">
                Leadership
              </p>
              <h3 className="mt-2 text-xl font-semibold text-brand-darkBlue">{leader.name}</h3>
              <p className="text-sm font-medium text-brand-gray">{leader.title}</p>
              <ul className="mt-4 space-y-2">
                {leader.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-brand-gray">
                    <span className="mt-1 flex h-4 w-4 items-center justify-center rounded-full bg-brand-mint/40">
                      <Check className="h-3 w-3 text-brand-teal" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </motion.div>

        {/* Advisory Board Section Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto w-full max-w-4xl text-left md:text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-blue">Advisory Board</p>
          <h2 className="mt-3 text-3xl font-bold text-brand-darkBlue md:text-5xl">
            Industry Leaders Backing Cakewalk
          </h2>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid gap-6"
        >
          <article className="rounded-2xl border border-brand-blue/15 bg-white/95 p-6 shadow-md">
            <p className="sr-only">Advisory Board Members</p>
            <ul className="mt-4 space-y-3">
              {advisors.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-brand-gray">
                  <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-brand-blue/20">
                    <Check className="h-3.5 w-3.5 text-brand-blue" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          {/* Execution Advantage tile removed */}
        </motion.div>
      </div>

      <BottomCornerLogo />
    </section>
  );
};

export default Team;
