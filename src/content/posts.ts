// Blog index sourced from upnrx.com/blog-feed.xml. Summaries are short,
// newly written teasers; full article bodies should be migrated from the
// existing CMS (or wired to a headless CMS) via `getPostBody` in lib/posts.ts.

export type Topic = "UPN News" | "Advocacy" | "Regulation" | "Industry" | "Front End";

export type Post = {
  slug: string;
  title: string;
  date: string; // ISO
  readMinutes: number;
  topic: Topic;
  cover?: string;
  summary: string;
};

export const posts: Post[] = [
  {
    slug: "upn-welcomes-cartwheel-as-a-new-vendor-partner",
    title: "UPN Welcomes Cartwheel as a New Vendor Partner",
    date: "2026-09-29",
    readMinutes: 1,
    topic: "UPN News",
    cover: "/images/blog/upn-welcomes-cartwheel-as-a-new-vendor-partner.png",
    summary: "Cartwheel, maker of the Nit Happens head-lice line, joins the UPN vendor network — giving members a new family-care category for the front end.",
  },
  {
    slug: "transparency-is-progress-better-data-is-the-next-step",
    title: "Transparency Is Progress. Better Data Is the Next Step.",
    date: "2026-09-02",
    readMinutes: 2,
    topic: "Advocacy",
    cover: "/images/blog/transparency-is-progress-better-data-is-the-next-step.png",
    summary: "Pennsylvania's first annual PBM transparency report is a milestone. Here's what it shows — and what data independents still need.",
  },
  {
    slug: "low-reimbursements-are-no-laughing-matter",
    title: "Low Reimbursements Are No Laughing Matter",
    date: "2026-08-26",
    readMinutes: 1,
    topic: "Industry",
    cover: "/images/blog/low-reimbursements-are-no-laughing-matter.png",
    summary: "Filling prescriptions below cost while labor and inventory costs climb is squeezing independents. Why reimbursement reform can't wait.",
  },
  {
    slug: "the-deadline-moved-the-responsibility-didn-t",
    title: "The Deadline Moved. The Responsibility Didn't.",
    date: "2026-08-11",
    readMinutes: 2,
    topic: "Regulation",
    summary: "The DSCSA exemption was extended for small dispensers — but compliance prep shouldn't pause. What independent pharmacies need to know.",
  },
  {
    slug: "cvs-just-confirmed-what-independent-pharmacies-have-known-for-years",
    title: "CVS Just Confirmed What Independent Pharmacies Have Known for Years",
    date: "2026-08-05",
    readMinutes: 1,
    topic: "Industry",
    cover: "/images/blog/cvs-just-confirmed-what-independent-pharmacies-have-known-for-years.png",
    summary: "A chain's new pharmacy-first store format looks a lot like the community model independents have run all along.",
  },
  {
    slug: "another-lawsuit-another-reminder-of-why-transparency-matters",
    title: "Another Lawsuit. Another Reminder of Why Transparency Matters.",
    date: "2026-07-29",
    readMinutes: 1,
    topic: "Advocacy",
    cover: "/images/blog/another-lawsuit-another-reminder-of-why-transparency-matters.png",
    summary: "New litigation over 340B savings puts reimbursement practices back under the spotlight — and makes the case for transparency again.",
  },
  {
    slug: "fda-approves-otc-nasal-spray",
    title: "FDA Approves OTC Nasal Spray",
    date: "2026-07-22",
    readMinutes: 1,
    topic: "Regulation",
    cover: "/images/blog/fda-approves-otc-nasal-spray.png",
    summary: "A third over-the-counter opioid overdose reversal spray is approved — an opportunity for pharmacies to expand access and education.",
  },
  {
    slug: "when-an-independent-pharmacy-closes-a-community-loses-more-than-a-business",
    title: "When an Independent Pharmacy Closes, a Community Loses More Than a Business",
    date: "2026-07-17",
    readMinutes: 2,
    topic: "Advocacy",
    cover: "/images/blog/when-an-independent-pharmacy-closes-a-community-loses-more-than-a-business.png",
    summary: "Closures hit rural communities hardest. A look at what's at stake for healthcare access when the neighborhood pharmacy disappears.",
  },
  {
    slug: "upn-teams-up-with-urban-medicine-woman-for-a-transformative-webinar",
    title: "UPN Teams Up with Urban Medicine Woman for a Transformative Webinar",
    date: "2024-10-11",
    readMinutes: 2,
    topic: "UPN News",
    cover: "/images/blog/upn-teams-up-with-urban-medicine-woman-for-a-transformative-webinar.png",
    summary: "A member webinar on functional medicine and aromatherapy — and how pharmacies can add it to their offering.",
  },
  {
    slug: "united-pharmacy-network-expands-offerings-with-ibg-drugs-launch",
    title: "United Pharmacy Network Expands Offerings with IBG Drugs Launch",
    date: "2024-09-20",
    readMinutes: 3,
    topic: "UPN News",
    cover: "/images/blog/united-pharmacy-network-expands-offerings-with-ibg-drugs-launch.webp",
    summary: "UPN partners with IBG Drugs to give members a broad wholesale catalogue — from generics and brands to hard-to-find and short-dated Rx.",
  },
  {
    slug: "welcome-to-pharmetrade-a-united-pharmacy-network-developed-online-marketplace",
    title: "Welcome to PharmEtrade! A UPN-Developed Online Marketplace",
    date: "2023-12-18",
    readMinutes: 2,
    topic: "UPN News",
    cover: "/images/blog/welcome-to-pharmetrade-a-united-pharmacy-network-developed-online-marketplace.png",
    summary: "Meet PharmEtrade, the online marketplace UPN built so pharmacies can buy and sell OTC and prescription products.",
  },
  {
    slug: "why-join-upn",
    title: "Why Join UPN?",
    date: "2023-12-18",
    readMinutes: 2,
    topic: "UPN News",
    cover: "/images/blog/why-join-upn.png",
    summary: "What a group purchasing organization does, and why pooling buying power matters for independent pharmacies.",
  },
  {
    slug: "pharmetrade-the-marketplace-for-your-pharmacy-1",
    title: "PharmEtrade: The Marketplace for Your Pharmacy",
    date: "2023-04-07",
    readMinutes: 2,
    topic: "UPN News",
    cover: "/images/blog/pharmetrade-the-marketplace-for-your-pharmacy-1.jpg",
    summary: "An introduction to UPN's proprietary online marketplace and how members can use it.",
  },
  {
    slug: "the-problem-with-pbms",
    title: "The Problem with PBMs",
    date: "2023-04-06",
    readMinutes: 3,
    topic: "Advocacy",
    cover: "/images/blog/the-problem-with-pbms.png",
    summary: "How pharmacy benefit managers sit between insurers and patients — and why their practices hurt independent pharmacies.",
  },
  {
    slug: "digital-pharmacy-and-the-expanded-role-of-pharmacy",
    title: "Digital Pharmacy and the Expanded Role of Pharmacy",
    date: "2023-04-06",
    readMinutes: 2,
    topic: "Industry",
    cover: "/images/blog/digital-pharmacy-and-the-expanded-role-of-pharmacy.png",
    summary: "Digital tools are reshaping how pharmacies serve patients. What the shift means for community pharmacy.",
  },
  {
    slug: "half-of-millennials-are-using-vitamins-supplements-more-often-than-before-the-pandemic",
    title: "Half of Millennials Are Using Vitamins & Supplements More Often",
    date: "2023-04-06",
    readMinutes: 2,
    topic: "Front End",
    cover: "/images/blog/half-of-millennials-are-using-vitamins-supplements-more-often-than-before-the-pandemic.jpg",
    summary: "Supplement use grew after the pandemic — a front-end opportunity for pharmacies that stock and counsel well.",
  },
  {
    slug: "fda-announces-revamp-to-national-drug-code-with-new-standard-format",
    title: "FDA Announces Revamp to National Drug Code Format",
    date: "2022-08-05",
    readMinutes: 2,
    topic: "Regulation",
    cover: "/images/blog/fda-announces-revamp-to-national-drug-code-with-new-standard-format.png",
    summary: "The FDA proposed a new standard NDC format. What changes and how pharmacies should prepare their systems.",
  },
  {
    slug: "what-is-a-gpo-and-why-do-you-need-one-for-your-independent-pharmacy",
    title: "What Is a GPO and Why Do You Need One?",
    date: "2022-07-13",
    readMinutes: 3,
    topic: "Industry",
    summary: "A plain-language guide to group purchasing organizations and how they help independent pharmacies compete.",
  },
  {
    slug: "good-news-on-the-fight-against-dir-fees",
    title: "Good News on the Fight Against DIR Fees",
    date: "2022-05-06",
    readMinutes: 2,
    topic: "Advocacy",
    cover: "/images/blog/good-news-on-the-fight-against-dir-fees.jpg",
    summary: "A 2022 ruling addressed retroactive DIR fees — a long-fought win for community pharmacies.",
  },
  {
    slug: "recreational-marijuana-use-is-growing",
    title: "Recreational Marijuana Use Is Growing",
    date: "2022-04-28",
    readMinutes: 2,
    topic: "Industry",
    cover: "/images/blog/recreational-marijuana-use-is-growing.png",
    summary: "As legalization spreads, pharmacists should be ready to counsel patients on interactions and safe use.",
  },
];

export const topics: Topic[] = ["UPN News", "Advocacy", "Regulation", "Industry", "Front End"];
