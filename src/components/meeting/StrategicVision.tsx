import ProblemStatement from "../ProblemStatement";

interface StrategicVisionProps {
  onNavigateNext: () => void;
}

const StrategicVision = ({ onNavigateNext }: StrategicVisionProps) => {
  return <ProblemStatement onNavigateNext={onNavigateNext} />;
};

export default StrategicVision;

