import { motion } from "framer-motion";
import { FileX, Users, Puzzle, DollarSign, Clock } from "lucide-react";
interface StructuralObstaclesTabProps {
  isVisible: boolean;
  currentTab: string;
}
const StructuralObstaclesTab = ({
  isVisible,
  currentTab
}: StructuralObstaclesTabProps) => {
  const staggerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50
      }
    }
  };

  const barriers = [
    {
      icon: <FileX size={32} className="text-brand-purple" />,
      bgColor: "bg-soft-purple",
      title: "Knowledge Gap",
      description: "Small business owners lack specialized HR expertise to navigate complex benefit options"
    },
    {
      icon: <Users size={32} className="text-brand-blue" />,
      bgColor: "bg-soft-blue",
      title: "Market Access",
      description: "SMBs have high friction and limited pathways to quality insurance markets"
    },
    {
      icon: <Puzzle size={32} className="text-emerald-500" />,
      bgColor: "bg-soft-green",
      title: "Product Limitations",
      description: "Inconsistent availability with fewer low quality options than enterprise solutions"
    },
    {
      icon: <DollarSign size={32} className="text-amber-500" />,
      bgColor: "bg-soft-yellow",
      title: "Cost Disadvantage",
      description: "30-50% higher premiums than large enterprises for equivalent coverage"
    },
    {
      icon: <Clock size={32} className="text-orange-500" />,
      bgColor: "bg-soft-orange",
      title: "Time Investment",
      description: "Manual processes requiring weeks or months to implement"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-8"
        variants={staggerVariants}
        initial="hidden"
        animate={isVisible && currentTab === "barriers" ? "visible" : "hidden"}
      >
        {barriers.map((barrier, index) => (
          <motion.div
            key={barrier.title}
            variants={cardVariants}
            className={`flex h-full flex-col items-center rounded-2xl border border-white/70 bg-white/90 p-6 text-center shadow-sm backdrop-blur 
              ${index === 3 ? "lg:col-start-1 xl:col-start-auto" : ""}
              ${index === 4 ? "lg:col-start-3 xl:col-start-auto" : ""}
            `}
          >
            <div className={`${barrier.bgColor} mb-4 rounded-xl p-4`}>{barrier.icon}</div>
            <h4 className="mb-3 text-lg font-semibold text-brand-darkBlue">{barrier.title}</h4>
            <p className="text-sm leading-relaxed text-gray-600">{barrier.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
export default StructuralObstaclesTab;
