export const site = {
  name: "United Pharmacy Network",
  shortName: "UPN",
  tagline: "Empowering pharmacies. Elevating savings.",
  description:
    "United Pharmacy Network (UPN) is a group purchasing organization helping 550+ independent pharmacies reduce costs, earn transparent rebates, and grow.",
  url: "https://www.upnrx.com",
  contact: {
    phone: "973-302-8568",
    phoneHref: "tel:9733028568",
    email: "office@upnrx.com",
    generalEmail: "upn@upnrx.com",
    address: {
      line1: "5 Cold Hill Road South, Suite 27",
      city: "Mendham",
      state: "NJ",
      zip: "07945",
    },
  },
  socials: [
    { label: "Facebook", href: "https://www.facebook.com/upnrx", icon: "facebook" },
    { label: "Instagram", href: "https://www.instagram.com/unitedpharmacynetwork/", icon: "instagram" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/upnrx", icon: "linkedin" },
    { label: "YouTube", href: "https://www.youtube.com/channel/UC7z_13LWg2-ng3hQ017fgmQ", icon: "youtube" },
  ],
  privacyUrl: "https://www.privacypolicies.com/live/5901409d-ad8d-4648-a3c3-06c192294161",
  announcement: {
    label: "New partner",
    text: "UPN welcomes Cartwheel to the vendor network",
    href: "/blog/upn-welcomes-cartwheel-as-a-new-vendor-partner",
  },
} as const;

export type NavItem = { label: string; href: string; description?: string; children?: NavItem[] };

export const mainNav: NavItem[] = [
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Our story & services", href: "/about", description: "Why independents choose UPN" },
      { label: "Meet the team", href: "/team", description: "The people behind your savings" },
      { label: "Testimonials", href: "/testimonials", description: "Members in their own words" },
      { label: "Referral program", href: "/referral", description: "Earn $1,000 per referral" },
    ],
  },
  { label: "Vendors", href: "/vendors" },
  { label: "IBG Drugs", href: "/ibg-drugs" },
  { label: "Specials", href: "/specials" },
  { label: "Insights", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const footerNav: { title: string; links: NavItem[] }[] = [
  {
    title: "Network",
    links: [
      { label: "About UPN", href: "/about" },
      { label: "Our team", href: "/team" },
      { label: "Testimonials", href: "/testimonials" },
      { label: "Insights", href: "/blog" },
    ],
  },
  {
    title: "Members",
    links: [
      { label: "Vendor partners", href: "/vendors" },
      { label: "IBG Drugs", href: "/ibg-drugs" },
      { label: "Member specials", href: "/specials" },
      { label: "Referral program", href: "/referral" },
    ],
  },
  {
    title: "Get started",
    links: [
      { label: "Join UPN", href: "/join" },
      { label: "Contact us", href: "/contact" },
      { label: "Member sign in", href: "/specials" },
    ],
  },
];
