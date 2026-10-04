import Image from "next/image";
import Link from "next/link";
import { ibg } from "@/content/ibg";
import { team } from "@/content/people";
import { getAllPosts } from "@/lib/posts";
import { Button, Eyebrow, RxLabel, SectionHeading, Squiggle, Stamp } from "@/components/ui/primitives";
import { Icon } from "@/components/ui/Icon";
import { CtaBand, Pillars, PostCard, Quotes, ServicesList, StatCapsules, VendorMarquee } from "@/components/sections/blocks";

export default function HomePage() {
  const posts = getAllPosts().slice(0, 3);
  const leaders = team.filter((m) => m.leadership);

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container hero__grid">
          <div className="reveal">
            <Eyebrow>Group purchasing organization · Savings · Value · Service</Eyebrow>
            <h1>
              Helping independent pharmacies <em><Squiggle>grow.</Squiggle></em>
            </h1>
            <p className="lead">
              UPN is built by pharmacy owners, for pharmacy owners. We pool the buying power of 550+ independents to cut
              your costs, pay you fully transparent rebates, and give you the marketing, education and advocacy to
              compete with the chains — with <strong>no membership fees</strong>.
            </p>
            <div className="hero__actions">
              <Button href="/join" size="lg" arrow>Start saving today</Button>
              <Button href="/referral" variant="outline" size="lg">Refer &amp; earn $1,000</Button>
            </div>
            <div className="hero__meta">
              <div><Icon name="shield" /> 100% transparent rebates</div>
              <div><Icon name="dollar" /> Paid directly to members</div>
              <div><Icon name="store" /> No membership fees</div>
            </div>
          </div>

          <div className="hero__visual reveal" style={{ ["--d" as string]: ".15s" }}>
            <div className="hero__leaf" aria-hidden />
            <div className="arch arch--outline">
              <Image src="/images/site/pharmacist-helping-a-family.jpg" alt="Pharmacist helping a family in a community pharmacy" fill priority sizes="(max-width: 900px) 90vw, 520px" />
            </div>
            <RxLabel
              className="hero__rx"
              title="UPN · Member rebates"
              big={{ value: "$20M+", caption: "Paid to members in 2025*" }}
              rows={[["Refills", "Monthly"], ["Membership fee", "$0"], ["Paid to", "You, directly"]]}
            />
            <div className="hero__stamp">
              <Stamp text="550+ member pharmacies · 25 years · " />
            </div>
          </div>
        </div>
      </section>

      <VendorMarquee />

      {/* Stats */}
      <section className="section">
        <div className="container stats-band">
          <div className="reveal">
            <Eyebrow>By the numbers</Eyebrow>
            <h2>Strength in <em>numbers</em>, savings on every order.</h2>
            <p className="lead mt-s">
              One of the fastest-growing GPOs in the nation — and every dollar of scale goes back to members.
            </p>
            <p className="footnote">*Figure as reported by United Pharmacy Network.</p>
          </div>
          <StatCapsules />
        </div>
      </section>

      {/* Why UPN */}
      <section className="section--sm">
        <div className="container">
          <SectionHeading
            eyebrow="Why UPN"
            title={<>Solutions designed for <em>independent</em> pharmacy.</>}
            intro="Reduce costs, improve operations, and access the resources you need to compete, grow and thrive."
          />
          <div className="mt-l"><Pillars /></div>
        </div>
      </section>

      {/* Feature w/ photo */}
      <section className="section">
        <div className="container feature">
          <div className="feature__media reveal">
            <div className="arch">
              <Image src="/images/site/medicine-boxes.jpeg" alt="Pharmacist organizing medicine boxes" fill sizes="(max-width: 900px) 90vw, 500px" />
            </div>
            <div className="feature__badge">
              <Image src="/images/brand/pharmacy-500.png" alt="Rx Insider Pharmacy 500" width={54} height={54} />
              <p><strong>Rx Insider</strong>Featured in the Pharmacy 500</p>
            </div>
          </div>
          <div className="feature__body reveal" style={{ ["--d" as string]: ".1s" }}>
            <Eyebrow>Owners, like you</Eyebrow>
            <h2>We&apos;ve stood behind the counter. <em>We know the math.</em></h2>
            <p className="lead">
              United Pharmacy Network gives community pharmacies innovative, effective ways to compete with national
              chains — and stands as a leading advocate for independents in the political landscape.
            </p>
            <ul className="checklist">
              <li><div><strong>Purchasing power of $1B</strong><span>Pricing no single store could negotiate alone.</span></div></li>
              <li><div><strong>Choose your wholesaler</strong><span>Cardinal/Kinray, McKesson, Cencora and more.</span></div></li>
              <li><div><strong>A real person on the phone</strong><span>Personalized calls to track your purchases and rebates.</span></div></li>
            </ul>
            <div className="row mt">
              <Button href="/about" variant="ink" arrow>Our story</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section section--paper2">
        <div className="container">
          <SectionHeading
            eyebrow="Member services"
            title={<>More than pricing. A whole <em>back office</em> in your corner.</>}
            action={<Button href="/about" variant="outline" arrow>All services</Button>}
          />
          <div className="mt-l"><ServicesList /></div>
        </div>
      </section>

      {/* IBG */}
      <section className="section">
        <div className="container">
          <div className="ibg-band reveal">
            <div>
              <Image className="ibg-band__logo" src={ibg.logo} alt="IBG Drugs" width={92} height={92} />
              <Eyebrow>Wholesale partner</Eyebrow>
              <h2>IBG Drugs — <em>privately owned</em>, member-minded.</h2>
              <p className="mt-s">{ibg.intro}</p>
              <div className="row mt">
                <Button href="/ibg-drugs" variant="light" arrow>Explore IBG Drugs</Button>
                <span className="mono" style={{ opacity: 0.7 }}>IL · MI · NJ · NY · PA · TX</span>
              </div>
            </div>
            <div className="shelf">
              {ibg.categories.map((c) => (
                <div className="shelf__item" key={c.label}>
                  <Image src={c.icon} alt="" width={38} height={38} />
                  {c.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section section--sage">
        <div className="container">
          <SectionHeading
            eyebrow="Member stories"
            title={<>Independent pharmacies, <em>in their words.</em></>}
            action={<Button href="/testimonials" variant="outline" arrow>More stories</Button>}
          />
          <div className="mt-l"><Quotes /></div>
        </div>
      </section>

      {/* Team teaser */}
      <section className="section">
        <div className="container feature feature--reverse">
          <div className="feature__media">
            <div className="team-teaser">
              {leaders.map((m, i) => (
                <div key={m.name} className="reveal" style={{ ["--d" as string]: `${i * 0.08}s`, marginTop: i % 2 ? 40 : 0 }}>
                  <div className="arch">
                    <Image src={m.photo} alt={m.name} fill sizes="200px" style={{ objectPosition: "center 18%" }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="feature__body reveal">
            <Eyebrow>The people behind your savings</Eyebrow>
            <h2>Dedication. Expertise. <em>Passion.</em></h2>
            <p className="lead">
              Sales veterans, procurement specialists and member-support pros with decades of combined pharmacy
              experience — committed to helping independents save, compete and thrive.
            </p>
            <div className="row mt">
              <Button href="/team" variant="ink" arrow>Meet the team</Button>
              <Link href="/contact" className="link-arrow">Talk to a rep <Icon name="arrow" /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Insights */}
      <section className="section section--paper2">
        <div className="container">
          <SectionHeading
            eyebrow="In the news"
            title={<>Insights for <em>independents.</em></>}
            action={<Button href="/blog" variant="outline" arrow>All articles</Button>}
          />
          <div className="posts mt-l">
            {posts.map((p) => <PostCard post={p} key={p.slug} />)}
          </div>
        </div>
      </section>

      <CtaBand
        title={<>Ready to keep more of <em>every sale?</em></>}
        body="Join 550+ independent pharmacies saving with UPN. No membership fees — just a stronger bottom line."
        secondary={{ label: "Talk to us first", href: "/contact" }}
      />
    </>
  );
}
