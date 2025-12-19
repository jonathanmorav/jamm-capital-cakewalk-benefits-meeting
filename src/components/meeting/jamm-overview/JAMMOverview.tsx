import { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, Network, Heart, BarChart3, Rocket } from "lucide-react";
import NavigationArrow from "../../navigation/NavigationArrow";
import BottomCornerLogo from "../../BottomCornerLogo";
import OverviewTab from "./tabs/OverviewTab";
import DistributionTab from "./tabs/DistributionTab";
import ValuePropositionTab from "./tabs/ValuePropositionTab";
import EconomicsTab from "./tabs/EconomicsTab";
import RoadmapTab from "./tabs/RoadmapTab";

interface JAMMOverviewProps {
  onNavigateNext: () => void;
}

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
};

const tabs = [
  { id: "overview", label: "Overview", icon: Users },
  { id: "distribution", label: "Distribution", icon: Network },
  { id: "value", label: "Value Prop", icon: Heart },
  { id: "economics", label: "Economics", icon: BarChart3 },
  { id: "roadmap", label: "Roadmap", icon: Rocket },
];

const JAMMOverview = ({ onNavigateNext }: JAMMOverviewProps) => {
  const [currentTab, setCurrentTab] = useState("overview");

  return (
    <section className="relative min-h-screen overflow-hidden bg-white py-12 md:py-16 lg:py-20">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-brand-lightBlue/20 to-brand-lightMint/25" />
      <div className="absolute -top-1/4 right-0 h-3/4 w-2/3 translate-x-1/5 rounded-full bg-brand-lightBlue opacity-[0.05] blur-3xl" />
      <div className="absolute bottom-0 left-0 h-1/2 w-1/2 -translate-x-1/4 rounded-full bg-brand-mint opacity-[0.03] blur-3xl" />

      <div className="container relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 md:px-6">
        {/* Header */}
        <motion.header
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-left md:text-center"
        >
          <motion.div
            className="inline-flex items-center rounded-full bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-brand-blue shadow-sm backdrop-blur-sm"
            variants={fadeUp}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            JAMM Capital Partnership
          </motion.div>
          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 font-grotesk text-3xl font-bold text-brand-darkBlue sm:text-4xl md:text-5xl"
          >
            Cakewalk: Small Business Benefits at Scale
          </motion.h1>
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-3 text-lg text-brand-gray max-w-2xl mx-auto"
          >
            Accessible and affordable benefits through trusted distribution partners
          </motion.p>
        </motion.header>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <Tabs
            value={currentTab}
            onValueChange={setCurrentTab}
            className="w-full"
          >
            {/* Tab List */}
            <div className="flex justify-center mb-8">
              <TabsList className="inline-flex h-auto flex-wrap justify-center gap-2 bg-white/80 backdrop-blur-sm p-2 rounded-2xl shadow-sm border border-brand-blue/10">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <TabsTrigger
                      key={tab.id}
                      value={tab.id}
                      className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all data-[state=active]:bg-brand-blue data-[state=active]:text-white data-[state=active]:shadow-md data-[state=inactive]:text-brand-gray data-[state=inactive]:hover:bg-brand-lightBlue/30"
                    >
                      <Icon className="h-4 w-4" />
                      <span className="hidden sm:inline">{tab.label}</span>
                    </TabsTrigger>
                  );
                })}
              </TabsList>
            </div>

            {/* Tab Contents */}
            <div className="min-h-[600px]">
              <TabsContent value="overview" className="mt-0 focus-visible:outline-none">
                <OverviewTab />
              </TabsContent>

              <TabsContent value="distribution" className="mt-0 focus-visible:outline-none">
                <DistributionTab />
              </TabsContent>

              <TabsContent value="value" className="mt-0 focus-visible:outline-none">
                <ValuePropositionTab />
              </TabsContent>

              <TabsContent value="economics" className="mt-0 focus-visible:outline-none">
                <EconomicsTab />
              </TabsContent>

              <TabsContent value="roadmap" className="mt-0 focus-visible:outline-none">
                <RoadmapTab />
              </TabsContent>
            </div>
          </Tabs>
        </motion.div>
      </div>

      <BottomCornerLogo />
      <div className="mt-8 flex justify-center">
        <NavigationArrow
          onClick={onNavigateNext}
          className="text-brand-blue transition-colors hover:text-brand-purple"
        />
      </div>
    </section>
  );
};

export default JAMMOverview;

