import { motion } from "framer-motion";
import NavigationArrow from "../navigation/NavigationArrow";
import BottomCornerLogo from "../BottomCornerLogo";
import CakewalkTechPlatform from "../CakewalkTechPlatform";
import CakewalkExperience from "../CakewalkExperience";
import { Code, Zap, Target } from "lucide-react";

interface ProductTechnologyProps {
  onNavigateNext: () => void;
}

const keyThemes = [
  {
    icon: Code,
    title: "Integrated",
    description: "Seamless platform capabilities across reseller and customer experiences",
  },
  {
    icon: Zap,
    title: "Configurable",
    description: "Light touch, repeatable and scalable delivery",
  },
  {
    icon: Target,
    title: "Scalable",
    description: "Infrastructure scalability and technical readiness",
  },
];

const roadmapAlignment = {
  title: "Roadmap Alignment to GTM Milestones",
  description: "Platform capabilities aligned with go-to-market objectives",
};

const coverEdgeStrategy = {
  title: "CoverEdge Strategy and AI Integration",
  description: "Advanced technology integration for competitive advantage",
};

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
};

const ProductTechnology = ({ onNavigateNext }: ProductTechnologyProps) => {
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
            Product & Technology
          </motion.div>
          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 font-grotesk text-3xl font-bold text-brand-darkBlue sm:text-4xl md:text-5xl"
          >
            Integrated, Configurable, Scalable
          </motion.h1>
        </motion.header>

        {/* Key Themes */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid gap-6 md:grid-cols-3"
        >
          {keyThemes.map((theme) => (
            <motion.article
              key={theme.title}
              variants={fadeUp}
              className="flex flex-col gap-4 rounded-3xl border border-brand-blue/15 bg-white/95 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-soft-blue">
                <theme.icon className="h-6 w-6 text-brand-blue" />
              </div>
              <h3 className="text-xl font-semibold text-brand-darkBlue">{theme.title}</h3>
              <p className="text-sm text-brand-gray md:text-base">{theme.description}</p>
            </motion.article>
          ))}
        </motion.div>

        {/* Roadmap Alignment */}
        <motion.article
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="rounded-3xl border border-brand-blue/15 bg-white/95 p-8 shadow-sm"
        >
          <h2 className="text-2xl font-semibold text-brand-darkBlue md:text-3xl">
            {roadmapAlignment.title}
          </h2>
          <p className="mt-3 text-sm text-brand-gray md:text-base">
            {roadmapAlignment.description}
          </p>
        </motion.article>

        {/* CoverEdge Strategy */}
        <motion.article
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="rounded-3xl border border-brand-blue/15 bg-gradient-to-br from-brand-blue/10 via-white to-brand-lightMint/30 p-8 shadow-md"
        >
          <h2 className="text-2xl font-semibold text-brand-darkBlue md:text-3xl">
            {coverEdgeStrategy.title}
          </h2>
          <p className="mt-3 text-sm text-brand-gray md:text-base">
            {coverEdgeStrategy.description}
          </p>
        </motion.article>

        {/* Embedded Technology Components */}
        <div className="space-y-16">
          <div className="[&>section]:!py-0 [&>section]:!min-h-0">
            <CakewalkExperience onNavigateNext={() => {}} />
          </div>
          <div className="[&>section]:!py-0 [&>section]:!min-h-0">
            <CakewalkTechPlatform onNavigateNext={() => {}} />
          </div>
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

export default ProductTechnology;

