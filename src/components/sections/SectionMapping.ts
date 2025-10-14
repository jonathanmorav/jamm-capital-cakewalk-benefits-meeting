
import CoverScreen from "@/components/CoverScreen";
import EarlyTraction from "@/components/EarlyTraction";
import ProblemStatement from "@/components/ProblemStatement";
import WhyBenefitsMatter from "@/components/WhyBenefitsMatter";
import BenefitsBarrier from "@/components/benefits-barrier/BenefitsBarrier";
import TAMOpportunity from "@/components/TAMOpportunity";
import SolutionOverview from "@/components/SolutionOverview";
import WhyNow from "@/components/WhyNow";
import CakewalkModel from "@/components/CakewalkModel";
import CakewalkExperience from "@/components/CakewalkExperience";
import CakewalkTechPlatform from "@/components/CakewalkTechPlatform";
import GTMDistribution from "@/components/GTMDistribution";
import CarrierPartnerships from "@/components/CarrierPartnerships";
import UnitEconomics from "@/components/UnitEconomics";
import UseOfFunds from "@/components/UseOfFunds";
import Team from "@/components/Team";

export type DeckSection = {
  id: string;
  title: string;
};

// Section definitions with updated titles
export const sections: DeckSection[] = [
  { id: "cover", title: "Mission Statement" },
  { id: "early-traction", title: "Early Traction" },
  { id: "problem", title: "Problem Statement" },
  { id: "why", title: "Why Benefits Matter" },
  { id: "barriers", title: "A Major Structural Problem" },
  { id: "tam", title: "Total Addressable Market" },
  { id: "why-now", title: "Why Now" },
  { id: "solution", title: "The Cakewalk Experience - Product Demo" },
  { id: "cakewalk-model", title: "The Cakewalk Model" },
  { id: "cakewalk-experience", title: "The Cakewalk Platform" },
  { id: "cakewalk-tech", title: "Technology Stack" },
  { id: "distribution", title: "GTM / Distribution" },
  { id: "carrier-partnerships", title: "Carrier Partnerships" },
  { id: "unit-economics", title: "Unit Economics" },
  { id: "use-of-funds", title: "Use of Funds" },
  { id: "team", title: "The Team" },
];

// Mapping of section IDs to their respective components
export const sectionComponents = {
  "cover": CoverScreen,
  "early-traction": EarlyTraction,
  "problem": ProblemStatement,
  "why": WhyBenefitsMatter,
  "barriers": BenefitsBarrier,
  "tam": TAMOpportunity,
  "why-now": WhyNow,
  "solution": SolutionOverview,
  "cakewalk-model": CakewalkModel,
  "cakewalk-experience": CakewalkExperience,
  "cakewalk-tech": CakewalkTechPlatform,
  "distribution": GTMDistribution,
  "carrier-partnerships": CarrierPartnerships,
  "unit-economics": UnitEconomics,
  "use-of-funds": UseOfFunds,
  "team": Team,
};
