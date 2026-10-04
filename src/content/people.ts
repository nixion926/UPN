export type TeamMember = {
  name: string;
  role: string;
  email?: string;
  phone?: string;
  office?: string;
  photo: string;
  leadership?: boolean;
};

export const team: TeamMember[] = [
  { name: "Sam Maddali", role: "Founder & CEO", email: "sam@upnrx.com", phone: "973-945-5165", office: "973-302-8568", photo: "/images/team/sam-maddali.jpg", leadership: true },
  { name: "Shuchit Doshi", role: "Vice President of Sales", email: "shuchit@upnrx.com", phone: "201-704-8238", office: "973-302-8568 x104", photo: "/images/team/shuchit-doshi.png", leadership: true },
  { name: "Rama Manda", role: "Chief Technology Officer", email: "ram@upnrx.com", phone: "718-844-1182", office: "973-302-8568 x106", photo: "/images/team/rama-manda.png", leadership: true },
  { name: "Michele DiPaolo", role: "Chief of Staff", email: "michele@upnrx.com", phone: "973-713-3339", office: "973-302-8568 x102", photo: "/images/team/michele-dipaolo.png", leadership: true },
  { name: "Kavya M", role: "Accounts Specialist", office: "973-302-8568 x103", photo: "/images/team/kavya-m.png" },
  { name: "Cory Betz", role: "Sales & Marketing Associate", email: "cory@upnrx.com", phone: "973-713-3550", office: "973-302-8568", photo: "/images/team/cory-betz.jpg" },
  { name: "Dylan Lopez", role: "Regional Sales Representative", email: "dylan@upnrx.com", phone: "201-328-4537", office: "973-302-8568", photo: "/images/team/dylan-lopez.png" },
  { name: "Rohan Thotakura", role: "Regional Sales Representative", email: "rohan@upnrx.com", phone: "973-713-3549", office: "973-302-8568", photo: "/images/team/rohan-thotakura.jpg" },
];

export type Testimonial = { quote: string; name: string; pharmacy: string; state: string };

export const testimonials: Testimonial[] = [
  {
    quote:
      "Customer service and value are some of the main reasons I am with UPN. They help with marketing ideas, great rates and even manage my social media. I cannot recommend them enough!",
    name: "Samir",
    pharmacy: "Bell's Pharmacy",
    state: "NJ",
  },
  {
    quote:
      "United Pharmacy Network helps me manage my social networks and developed a website for my pharmacy, freeing up my valuable time and allowing me to focus on growing my business.",
    name: "Ricky",
    pharmacy: "Arcadia Pharmacy",
    state: "NY",
  },
  {
    quote:
      "UPN has always cared for independent pharmacies. They are always coming up with new ideas to keep us relevant. Their staff is knowledgeable, attentive, and focused on helping us GROW.",
    name: "Raju",
    pharmacy: "Liberty Drugs",
    state: "TX",
  },
];
