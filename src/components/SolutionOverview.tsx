import { useState } from "react";
import { motion } from "framer-motion";
import { Lightbulb, Zap, Users, LineChart, ChevronDown } from "lucide-react";
import NavigationArrow from "./navigation/NavigationArrow";
import WorkflowVisualizer from "./WorkflowVisualizer";
import { useIsMobile } from "@/hooks/use-mobile";
import BottomCornerLogo from "./BottomCornerLogo";
interface SolutionOverviewProps {
  onNavigateNext: () => void;
}
const steps = [{
  id: "signup",
  title: "Easy Business Signup",
  description: "Simple 2-minute form with basic business information"
}, {
  id: "underwriting",
  title: "Automated Underwriting",
  description: "Our AI analyzes your business profile instantly"
}, {
  id: "quotes",
  title: "Instant Quotes",
  description: "View multiple benefit options tailored to your needs"
}, {
  id: "enrollment",
  title: "Digital Enrollment",
  description: "Employees can self-enroll through our secure portal"
}];

// Animation variants for the background blurs
const blurAnimations = [{
  initial: {
    x: 0,
    y: 0
  },
  animate: {
    x: [0, 20, -20, 15, -15, 0],
    y: [0, -20, 15, -10, 20, 0],
    transition: {
      duration: 20,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse" as const
    }
  }
}, {
  initial: {
    x: 0,
    y: 0
  },
  animate: {
    x: [0, -25, 15, -10, 25, 0],
    y: [0, 15, -20, 25, -10, 0],
    transition: {
      duration: 24,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse" as const
    }
  }
}, {
  initial: {
    x: 0,
    y: 0
  },
  animate: {
    x: [0, 15, -15, 25, -10, 0],
    y: [0, -10, 25, -15, 15, 0],
    transition: {
      duration: 18,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse" as const
    }
  }
}, {
  initial: {
    x: 0,
    y: 0
  },
  animate: {
    x: [0, -10, 25, -20, 10, 0],
    y: [0, 25, -10, 15, -25, 0],
    transition: {
      duration: 22,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse" as const
    }
  }
}];
const SolutionOverview = ({
  onNavigateNext
}: SolutionOverviewProps) => {
  const isMobile = useIsMobile();
  return <section className="relative w-full min-h-[1200px] bg-[#00348f] flex flex-col items-center justify-center overflow-hidden">
      {/* Animated Background Blurs */}
      <motion.div style={{
      top: "-390.3px",
      right: "-230.5px"
    }} initial={blurAnimations[0].initial} animate={blurAnimations[0].animate} className="absolute z-[1] w-[600px] h-[600.2px] rounded-full bg-[#53edbe] filter blur-[800px]" />
      <motion.div className="absolute z-[2] w-[601px] h-[600px] rounded-full bg-[#eaf2ff] opacity-60 filter blur-[700px]" style={{
      top: "583.5px",
      left: "39.5px"
    }} initial={blurAnimations[1].initial} animate={blurAnimations[1].animate} />
      <motion.div className="absolute z-[1] w-[209px] h-[209px] rounded-full bg-[#53edbe] opacity-60 filter blur-[200px]" style={{
      top: "478.7px",
      left: "135.5px"
    }} initial={blurAnimations[2].initial} animate={blurAnimations[2].animate} />
      <motion.div className="absolute z-[0] w-[311px] h-[310px] rounded-full bg-[#5791f3] opacity-60 filter blur-[300px]" style={{
      top: "669.7px",
      right: "calc(100% - 200px)"
    }} initial={blurAnimations[3].initial} animate={blurAnimations[3].animate} />

      {/* Content Container */}
      <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-between px-4 md:px-6 py-8 md:py-0 gap-2 md:gap-3">
        {/* Text Column - Styled according to the provided guidelines */}
        <div className="w-full md:w-5/12 max-w-full mb-6 md:mb-0">
          <div className="flex flex-col items-start gap-2 md:gap-3">
            <h2 className="text-4xl md:text-5xl font-bold text-white font-grotesk w-full">
              The <span className="text-[#53EDBE]">Cakewalk</span> Experience
            </h2>
            
            <div className="w-full">
              <div className="flex flex-col gap-3 md:gap-5">
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-white font-['DM_Sans'] mb-3">
                    Insurance That Runs Itself for Small Teams
                  </h3>
                </div>
                
                <div className="flex flex-col gap-3 md:gap-2">
                  {/* Solution Points using the component-8 styling */}
                  <SolutionFeature 
                    icon={<Lightbulb className="h-6 w-6" />} 
                    title="Simple, Digital Employer Onboarding"
                    subcopy="Designed for small businesses without HR teams, Cakewalk makes it easy to setup your business and offer benefits to your team with a few clicks of a button. No binders, no consultants, just turnkey coverage that protects the health and financial being of their teams and their families."
                  />
                  <SolutionFeature 
                    icon={<Zap className="h-6 w-6" />} 
                    title="Real-Time Underwriting & Smart Guidance"
                    subcopy="Streams employer and employee data through our proprietary underwriting engine in seconds, then recommends the right mix of medical, ancillary, and financial protection so every team walks away with coverage tailored to its needs."
                  />
                  <SolutionFeature 
                    icon={<Users className="h-6 w-6" />} 
                    title="Seamless Checkout & Contributions"
                    subcopy="Seamless payment setup, contribution splits, and agreement e-signature in one flow, syncing deductions to payroll or direct draw so coverage starts right away."
                  />
                  <SolutionFeature 
                    icon={<LineChart className="h-6 w-6" />} 
                    title="Always-On Benefits Wallet"
                    subcopy="Gives every worker a mobile-first wallet to manage plans, ID cards, reimbursements, and qualifying life events—keeping enrollment data fresh for carriers and admins."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Visual Column */}
        <div className="w-full md:w-7/12 flex items-center justify-center">
          <WorkflowVisualizer steps={steps} />
        </div>
      </div>

      <BottomCornerLogo />

      <NavigationArrow onClick={onNavigateNext} className="text-white hover:text-brand-mint z-10" />
    </section>;
};
interface SolutionFeatureProps {
  icon: React.ReactNode;
  title: string;
  subcopy?: string;
}
const SolutionFeature = ({
  icon,
  title,
  subcopy
}: SolutionFeatureProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div className="w-full">
      <div
        className="group flex flex-row items-center justify-between gap-4 rounded-xl border border-transparent px-4 py-3 transition-all cursor-pointer hover:border-[rgba(255,255,255,0.35)] hover:bg-[rgba(227,250,243,0.12)]"
        onClick={() => subcopy && setIsExpanded(!isExpanded)}
        aria-expanded={subcopy ? isExpanded : undefined}
      >
        <div className="flex flex-1 items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-[rgba(255,255,255,0.6)] bg-[rgba(0,52,143,0.1)] backdrop-blur-[34px]">
            <div className="text-[#53EDBE]">
              {icon}
            </div>
          </div>
          <h4 className="text-[18px] font-semibold text-[#cbdeff] font-['Inter']">
            {title}
          </h4>
        </div>
        {subcopy && (
          <ChevronDown
            className={`h-5 w-5 text-[#cbdeff] transition-transform duration-200 group-hover:translate-y-[2px] ${isExpanded ? "rotate-180" : ""}`}
            aria-hidden="true"
          />
        )}
      </div>
      
      {subcopy && (
        <motion.div
          initial={false}
          animate={{ 
            height: isExpanded ? "auto" : 0,
            opacity: isExpanded ? 1 : 0
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <div className="ml-16 mt-3 pr-4">
            <p className="text-[#cbdeff] text-sm leading-relaxed font-['Inter']">
              {subcopy}
            </p>
          </div>
        </motion.div>
      )}
    </div>
  );
};
export default SolutionOverview;
