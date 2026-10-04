import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand, Pillars, ServicesList, StatCapsules } from "@/components/sections/blocks";
import { Button, Eyebrow, SectionHeading } from "@/components/ui/primitives";

export const metadata: Metadata = {
  title: "About",
  description: "Exclusive, members-only services that help independent pharmacies compete, grow and thrive — with no fees.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumb="About"
        eyebrow="Exclusive services"
        title={<>Built to help independents <em>compete, grow</em> and thrive.</>}
        lead="From competitively priced generic and brand medications to marketing and programs that elevate your customer experience, UPN gives your pharmacy the competitive edge to grow way beyond profitability."
        image={{ src: "/images/site/pharmacist-tablet.jpg", alt: "Pharmacist reviewing inventory on a tablet", position: "60% center" }}
      >
        <div className="row mt">
          <Button href="/join" arrow>Become a member</Button>
          <Button href="/team" variant="outline">Meet the team</Button>
        </div>
      </PageHero>

      <section className="section section--paper2">
        <div className="container feature">
          <div className="feature__body reveal">
            <Eyebrow>Why UPN?</Eyebrow>
            <h2>Owners solving owner problems. <em>No fees.</em></h2>
            <p className="lead">
              United Pharmacy Network is dedicated to giving community pharmacies innovative and effective ways to
              compete with national chains — and to being a leading advocate for independents in the political
              landscape.
            </p>
            <p className="muted">
              Like you, we are owners looking to solve the problems that arise in this ever-changing market. Together
              we can grow our community pharmacies and take back market share from the large chains. Best of all, there
              are no fees.
            </p>
          </div>
          <div className="reveal" style={{ ["--d" as string]: ".1s" }}>
            <StatCapsules />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="What members get"
            title={<>Six programs. <em>One network</em> behind you.</>}
            intro="Every service is included with membership — use as much or as little as your pharmacy needs."
          />
          <div className="mt-l"><ServicesList detailed /></div>
        </div>
      </section>

      <section className="section section--ink">
        <div className="container feature feature--reverse">
          <div className="feature__media reveal">
            <div className="arch arch--outline">
              <Image src="/images/site/pharmacist-teal.jpg" alt="Pharmacist at work" fill sizes="(max-width: 900px) 90vw, 500px" />
            </div>
          </div>
          <div className="feature__body reveal">
            <Eyebrow>Advocacy</Eyebrow>
            <h2>A collective voice, <em>local to federal.</em></h2>
            <p className="lead">
              We meet and speak with representatives at the local, state and federal level who can impact the pharmacy
              industry — delivering a collective message that promotes and protects the economic interests of our
              members.
            </p>
            <ul className="checklist">
              <li><div><strong>PBM transparency & reform</strong></div></li>
              <li><div><strong>Fair reimbursement for independents</strong></div></li>
              <li><div><strong>Weekly legislative updates for members</strong></div></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="The UPN advantage" title={<>Savings built on <em>transparency.</em></>} />
          <div className="mt-l"><Pillars /></div>
        </div>
      </section>

      <CtaBand
        title={<>The more members, the <em>stronger the group.</em></>}
        body="Know a pharmacy that should be saving more? Refer them and earn $1,000."
        primary={{ label: "Join UPN", href: "/join" }}
        secondary={{ label: "Referral program", href: "/referral" }}
      />
    </>
  );
}
