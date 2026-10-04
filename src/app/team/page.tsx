import type { Metadata } from "next";
import { team } from "@/content/people";
import { site } from "@/content/site";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand, MemberCard } from "@/components/sections/blocks";
import { SectionHeading } from "@/components/ui/primitives";

export const metadata: Metadata = {
  title: "Our Team",
  description: "Meet the United Pharmacy Network team — sales veterans, procurement specialists and member support professionals.",
};

export default function TeamPage() {
  const leaders = team.filter((m) => m.leadership);
  const field = team.filter((m) => !m.leadership);

  return (
    <>
      <PageHero
        crumb="Our team"
        eyebrow="Meet the team"
        title={<>Dedication. Expertise. <em>Passion.</em></>}
        lead="With decades of combined experience across the pharmacy industry, our team understands the opportunities and challenges independent pharmacies face every day — and brings the knowledge, relationships and expertise to support you at every stage."
      >
        <p className="mono muted mt">Main office · <a href={site.contact.phoneHref}>{site.contact.phone}</a></p>
      </PageHero>

      <section className="section--sm">
        <div className="container">
          <SectionHeading eyebrow="Leadership" title={<>Guiding the <em>network.</em></>} />
          <div className="team-grid mt-l">
            {leaders.map((m) => <MemberCard m={m} key={m.name} />)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Sales & member support" title={<>Your people <em>in the field.</em></>} />
          <div className="team-grid mt-l">
            {field.map((m) => <MemberCard m={m} key={m.name} />)}
          </div>
        </div>
      </section>

      <CtaBand
        title={<>Want a rep to <em>walk you through it?</em></>}
        body="We'll review your purchasing and show you exactly where UPN can save you money."
        primary={{ label: "Contact the team", href: "/contact" }}
        secondary={{ label: "Join UPN", href: "/join" }}
      />
    </>
  );
}
