import { ResellerCategory, ValueProposition, EconomicLevel, FunnelMetric, ValidationMilestone } from "./types";

export const customerStats = {
  americans: "61.7M",
  smallBusinesses: "~30M",
  description: "Americans working in small businesses",
};

export const marketProblems = [
  "Operational friction",
  "Underwriting dynamics",
  "Prohibitive distribution costs",
];

export const modelStatements = [
  "Cakewalk delivers accessible and affordable benefits to small businesses.",
  "Cakewalk enables resellers to reach small businesses at scale.",
];

export const resellerCategories: ResellerCategory[] = [
  { id: 1, name: "Captive Agent Networks", examples: ["State Farm", "Allstate"] },
  { id: 2, name: "Independent Agent Aggregators", examples: ["SIAA", "Smart Choice"] },
  { id: 3, name: "Multi-Line Brokerage Firms", examples: ["MI Farm Bureau", "Providence Group", "Alera"] },
  { id: 4, name: "Insurance Entities", examples: ["Harvard Pilgrim", "Carriers with SMB books"] },
  { id: 5, name: "Platforms", examples: ["Cast & Crew", "Tech platforms", "PEOs", "Affinities"] },
];

export const distributionFunnel: FunnelMetric[] = [
  {
    value: "300",
    label: "Strategic Reseller Partners",
    description: "C-suite level partnerships",
  },
  {
    value: "~300K",
    label: "Distribution Partners",
    description: "Agents and brokers in reseller ecosystems",
  },
  {
    value: "30M+",
    label: "Small Business Touchpoints",
    description: "Potential customer reach",
  },
];

export const valuePropositions: ValueProposition[] = [
  {
    audience: "Resellers",
    title: "For C-Suite Leaders",
    benefits: [
      "5-10% enterprise value growth",
      "Activate advisor productivity",
      "Proprietary product opportunities → \"negative CAC\"",
      "Zero balance sheet/capital investment",
      "Immediate ROI",
    ],
    icon: "Building2",
  },
  {
    audience: "Distribution Partners",
    title: "For Agents & Brokers",
    benefits: [
      "Profitably serve small business segment",
      "10%+ recurring revenue increase",
      "Cross-sell opportunities",
      "Higher persistency and book defense",
    ],
    icon: "Users",
  },
  {
    audience: "Small Businesses",
    title: "For Customers",
    benefits: [
      "Accessible, affordable benefits",
      "Through trusted advisors",
      "No complexity or friction",
    ],
    icon: "Briefcase",
  },
];

export const economicValueTable: EconomicLevel[] = [
  {
    level: "User",
    definition: "Individual within small business",
    portfolioSize: ["1/5 of account"],
    lifetimeValue: "$1,870",
    annualEarnings: "$220",
    economicValue: "$3,300",
  },
  {
    level: "Account",
    definition: "Single small business customer (5 users)",
    portfolioSize: ["1 account"],
    lifetimeValue: "$9,350",
    annualEarnings: "$1,100",
    economicValue: "$16,500",
  },
  {
    level: "Partner",
    definition: "Activated agent (productive & mature)",
    portfolioSize: ["25 accounts", "125 users"],
    lifetimeValue: "$233,750",
    annualEarnings: "$27,500",
    economicValue: "$412,500",
  },
  {
    level: "Reseller",
    definition: "Organization with 1,000 agents (30% activation)",
    portfolioSize: ["300 partners", "7,500 accounts", "37,500 users"],
    lifetimeValue: "$70.1M",
    annualEarnings: "$8.25M",
    economicValue: "$123.8M",
  },
  {
    level: "Total Enterprise",
    definition: "300 resellers universe (5% conversion = 15 activated)",
    portfolioSize: ["15 resellers", "4,500 partners", "112,500 accounts", "562,500 users"],
    lifetimeValue: "$1.05B",
    annualEarnings: "$123.8M",
    economicValue: "$1.86B",
  },
];

export const resellerExample = {
  name: "Michigan Farm Bureau",
  lives: "243K",
  conversionRate: "20%",
  stabilizationPeriod: "3 years",
  annualRevenue: "$5.4M",
  enterpriseValueImpact: "+5-10%",
};

export const customerLTV = {
  retentionBaseline: "7-10 years",
  retentionExpansion: "100%",
  example: {
    lifeBase: "$200K",
    conversion: "20%",
    annualRevenue: "$21M",
  },
};

export const enterpriseCalculation = {
  resellers: 300,
  conversionRate: "5%",
  activatedResellers: 15,
  annualEarningsPerReseller: "$8.25M",
  totalAnnualEarnings: "$123.8M",
  multiple: "15x",
  enterpriseValue: "$1.86B",
};

export const validationMilestones: ValidationMilestone[] = [
  {
    title: "Complete infrastructure build out",
    description: "Technical and operational foundation",
    status: "in-progress",
  },
  {
    title: "Validate engagement, activation, and conversion metrics",
    description: "Prove unit economics at scale",
    status: "upcoming",
  },
  {
    title: "Establish scalable business processes",
    description: "Repeatable GTM motions",
    status: "upcoming",
  },
  {
    title: "Iterate product and GTM based on learnings",
    description: "Data-driven optimization",
    status: "upcoming",
  },
];


