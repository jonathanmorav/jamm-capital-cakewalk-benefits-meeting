// Types for JAMM Overview data structures

export interface ResellerCategory {
  id: number;
  name: string;
  examples: string[];
}

export interface ValueProposition {
  audience: string;
  title: string;
  benefits: string[];
  icon: string;
}

export interface EconomicLevel {
  level: string;
  definition: string;
  portfolioSize: string[];
  lifetimeValue: string;
  annualEarnings: string;
  economicValue: string;
}

export interface FunnelMetric {
  value: string;
  label: string;
  description: string;
}

export interface ValidationMilestone {
  title: string;
  description: string;
  status: "completed" | "in-progress" | "upcoming";
}


