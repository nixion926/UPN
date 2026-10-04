import type { Metadata } from "next";
import { testimonials } from "@/content/people";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand, Quotes, StatCapsules } from "@/components/sections/blocks";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "Independent pharmacy owners share why they choose United Pharmacy Network.",
};

export default function TestimonialsPage() {
  const [featured, ...rest] = testimonials;
  return (
    <>
      <PageHero
        crumb="Testimonials"
        eyebrow="Member stories"
        title={<>Independent pharmacies, <em>in their words.</em></>}
        lead="From New Jersey to Texas, owners tell us the same thing: great rates matter, but it's the people and the ideas that keep them growing."
      />

      <section className="section--sm">
        <div className="container">
          <figure className="quote quote--big reveal">
            <blockquote>{featured.quote}</blockquote>
            <figcaption>
              <span className="quote__avatar">{featured.name[0]}</span>
              <span>
                <strong>{featured.name}</strong>
                <span>{featured.pharmacy} · {featured.state}</span>
              </span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="section--sm">
        <div className="container">
          <Quotes items={rest} columns={2} />
        </div>
      </section>

      <section className="section">
        <div className="container"><StatCapsules /></div>
      </section>

      <CtaBand
        tone="clay"
        title={<>Love UPN? <em>Earn $1,000</em> for sharing it.</>}
        body="Refer an independent pharmacy and we'll thank you when they join."
        primary={{ label: "Refer a pharmacy", href: "/referral" }}
        secondary={{ label: "Join UPN", href: "/join" }}
      />
    </>
  );
}
