import React from "react";
import { motion } from "framer-motion";
import ProvenCapitalEfficiency from "./use-of-funds/ProvenCapitalEfficiency";
import OurAsk from "./use-of-funds/OurAsk";
import CapitalAllocationStrategy from "./use-of-funds/CapitalAllocationStrategy";
import MilestoneBasedDeployment from "./use-of-funds/MilestoneBasedDeployment";
import SectionFooter from "./use-of-funds/SectionFooter";
import BottomCornerLogo from "./BottomCornerLogo";
interface UseOfFundsProps {
  onNavigateNext: () => void;
}
const UseOfFunds = ({
  onNavigateNext
}: UseOfFundsProps) => {
  return <section className="min-h-screen relative overflow-hidden flex flex-col justify-center py-16 md:py-24 lg:py-32">
      {/* Background similar to Why Benefits Matter section */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-blue-50/30 z-0 bg-brand-lightBlue"></div>
      <div className="absolute -top-1/3 right-0 w-2/3 h-2/3 opacity-[0.04] rounded-full blur-3xl transform translate-x-1/4 animate-pulse-subtle z-0 bg-soft-blue"></div>
      <div className="absolute -bottom-1/4 left-0 w-1/2 h-1/2 bg-brand-lightBlue opacity-[0.05] rounded-full blur-3xl transform -translate-x-1/4 animate-pulse-subtle z-0" style={{
      animationDelay: "1.5s"
    }}></div>
      
      <div className="container px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5
      }} className="flex flex-col items-center mb-10">
          <motion.div className="bg-white rounded-full px-4 py-1.5 mb-4 shadow-sm" initial={{
          scale: 0.9,
          opacity: 0
        }} animate={{
          scale: 1,
          opacity: 1
        }} transition={{
          delay: 0.2
        }}>
            <span className="text-brand-blue text-sm font-medium">Funding & Milestones</span>
          </motion.div>
          
          <motion.h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-blue font-grotesk text-center mb-4" initial={{
          opacity: 0,
          scale: 0.95
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          delay: 0.3,
          duration: 0.5
        }}>
            Capital for Scale, Not Burn
          </motion.h1>
          
          <motion.p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl text-center" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.4,
          duration: 0.5
        }}>
            Strategic Investments to Accelerate Growth
            <span className="block h-1 w-24 mx-auto mt-4 bg-brand-teal/30 rounded-full"></span>
          </motion.p>
        </motion.div>

        {/* Proven Capital Efficiency */}
        <ProvenCapitalEfficiency />

        {/* Our Ask */}
        <OurAsk />

        {/* Capital Allocation Strategy */}
        <CapitalAllocationStrategy />

        {/* Milestone-Based Capital Deployment */}
        <MilestoneBasedDeployment />

        {/* Footer with navigation */}
        <SectionFooter onNavigateNext={onNavigateNext} />
      </div>
      <BottomCornerLogo />
    </section>;
};
export default UseOfFunds;
