// Network-level facts, benefits and services. Sourced from upnrx.com.

export const stats = [
  { value: "$1B", label: "Aggregate purchasing power" },
  { value: "550+", label: "Active member pharmacies" },
  { value: "25 yrs", label: "Helping members save" },
  { value: "$20M+", label: "Paid to members in 2025*" },
];

export const pillars = [
  {
    title: "$1B purchasing power",
    body: "The combined buying power of 550+ pharmacies negotiates pricing no single store could.",
    icon: "/images/site/purchasing-power.png",
  },
  {
    title: "Nationwide savings",
    body: "Savings opportunities for independent pharmacies in every corner of the country.",
    icon: "/images/site/nationwide-savings.png",
  },
  {
    title: "Wholesaler options",
    body: "Purchase through Cardinal/Kinray, McKesson, Cencora and more — keep the workflow you know.",
    icon: "/images/site/wholesaler-options.png",
  },
  {
    title: "Transparent rebates",
    body: "A 100% transparent rebate structure. No hidden spreads, no guesswork.",
    icon: "/images/site/transparent-rebates.png",
  },
  {
    title: "Paid directly to you",
    body: "Rebates go straight to the member — with personal calls to track purchases and payouts.",
    icon: "/images/site/direct-rebate-savings.png",
  },
];

export type Service = {
  slug: string;
  number: string;
  title: string;
  summary: string;
  body: string;
  points: string[];
};

export const services: Service[] = [
  {
    slug: "pricing",
    number: "01",
    title: "Pricing programs",
    summary: "Competitive generic and brand pricing, plus aggressive monthly rebates.",
    body: "With over 25 years of experience and more than 500 independent pharmacy members, UPN is one of the fastest-growing GPOs in the nation. Our relationships let us negotiate competitively priced generic and brand medications, offer aggressive monthly rebates, and make personalized calls to track your purchases and rebates.",
    points: ["Generic & brand contracts", "Monthly rebates", "Personal purchase tracking"],
  },
  {
    slug: "marketing",
    number: "02",
    title: "Marketing promotion",
    summary: "Bag stuffers, flyers, social media and brand building that bring people in.",
    body: "UPN offers dedicated marketing support, from bag stuffers and flyers to social media and brand building. Together we build a plan to increase store traffic and product sales, with merchandising strategies and financial guidance to improve store health and your bottom line.",
    points: ["Social media management", "Print & in-store materials", "Merchandising strategy"],
  },
  {
    slug: "education",
    number: "03",
    title: "Education initiatives",
    summary: "Weekly industry updates and webinars on the issues that matter most.",
    body: "Our greatest strength is our members. We showcase member pharmacies to share best practices, stay on top of trends, coverage, product and legislative news — delivered weekly — and curate webinars focused on what impacts members most.",
    points: ["Weekly news digest", "Member webinars", "Best-practice spotlights"],
  },
  {
    slug: "retail",
    number: "04",
    title: "Retail programs",
    summary: "Business analysis, floor-plan optimization and free classes for your front end.",
    body: "Members get access to UPN-created programs that elevate your pharmacy's retail experience — from a complimentary business analysis and floor-plan optimization to free classes tailored to current member needs.",
    points: ["Complimentary business analysis", "Floor-plan optimization", "Free tailored classes"],
  },
  {
    slug: "advocacy",
    number: "05",
    title: "Advocacy efforts",
    summary: "A collective voice for independents at the local, state and federal level.",
    body: "We provide a voice for our members and the independent pharmacy industry as a whole, meeting with representatives at every level of government to promote and protect the economic interests of our members.",
    points: ["Local, state & federal outreach", "PBM reform", "Legislative updates"],
  },
  {
    slug: "networking",
    number: "06",
    title: "Industry networking",
    summary: "A nationwide member forum and a vendor team that's always scouting.",
    body: "An online forum connects members across the US, while our vendor relations team constantly looks for companies focused on independent pharmacy. The more members we have, the stronger the group — so we offer generous referral incentives too.",
    points: ["Nationwide member forum", "Curated vendor partners", "Referral incentives"],
  },
];

export const joinSteps = [
  { title: "Apply with your NPI", body: "Tell us about your pharmacy. There are no membership fees." },
  { title: "Meet your rep", body: "A UPN representative reviews your purchasing and wholesaler setup with you." },
  { title: "Start saving", body: "Unlock group pricing and receive transparent rebates paid directly to you." },
];

export const wholesalers = ["Cardinal / Kinray", "McKesson", "Cencora", "Other"];
