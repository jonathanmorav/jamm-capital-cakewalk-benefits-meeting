
import CoverScreen from "@/components/CoverScreen";
import WelcomeFraming from "@/components/meeting/WelcomeFraming";
import StrategicVision from "@/components/meeting/StrategicVision";
import GoToMarket from "@/components/meeting/GoToMarket";
import GTMSpectrum from "@/components/meeting/GTMSpectrum";
import ProductTechnology from "@/components/meeting/ProductTechnology";
import ProductShowcase from "@/components/meeting/ProductShowcase";
import OperationsInfrastructure from "@/components/meeting/OperationsInfrastructure";
import InvestorEngagementNextSteps from "@/components/meeting/InvestorEngagementNextSteps";

export type DeckSection = {
  id: string;
  title: string;
};

// Section definitions for JAMM Capital <> Cakewalk Benefits Meeting
export const sections: DeckSection[] = [
  { id: "cover", title: "Cakewalk & JAMM Capital Meeting" },
  { id: "welcome-framing", title: "Welcome & Framing" },
  { id: "strategic-vision", title: "Strategic Vision" },
  { id: "product-technology", title: "Product & Technology" },
  { id: "product-showcase", title: "Product Showcase" },
  { id: "gtm-spectrum", title: "GTM Motion Spectrum" },
  { id: "go-to-market", title: "How we Go-to-Market" },
  { id: "operations-infrastructure", title: "Operations & Infrastructure" },
  { id: "investor-engagement-next-steps", title: "Investor Engagement & Next Steps" },
];

// Mapping of section IDs to their respective components
export const sectionComponents = {
  "cover": CoverScreen,
  "welcome-framing": WelcomeFraming,
  "strategic-vision": StrategicVision,
  "product-technology": ProductTechnology,
  "product-showcase": ProductShowcase,
  "gtm-spectrum": GTMSpectrum,
  "go-to-market": GoToMarket,
  "operations-infrastructure": OperationsInfrastructure,
  "investor-engagement-next-steps": InvestorEngagementNextSteps,
};
