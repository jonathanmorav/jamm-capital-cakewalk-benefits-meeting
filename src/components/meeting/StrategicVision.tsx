import { JAMMOverview } from "./jamm-overview";

interface StrategicVisionProps {
  onNavigateNext: () => void;
}

const StrategicVision = ({ onNavigateNext }: StrategicVisionProps) => {
  return <JAMMOverview onNavigateNext={onNavigateNext} />;
};

export default StrategicVision;

