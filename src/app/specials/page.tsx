import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/blocks";
import { Button } from "@/components/ui/primitives";
import { Icon } from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "Member Specials",
  description: "Exclusive monthly specials and promotions for United Pharmacy Network members.",
};

export default function SpecialsPage() {
  return (
    <>
      <PageHero
        crumb="Specials"
        eyebrow="Members only"
        title={<>This month&apos;s <em>member specials.</em></>}
        lead="Exclusive pricing and vendor promotions, refreshed regularly for UPN members. Sign in to view current offers."
      />

      <section className="section--sm" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="locked">
            {Array.from({ length: 6 }).map((_, i) => (
              <div className="locked__card" key={i} aria-hidden>
                <div className="box" />
                <div className="bar" />
                <div className="bar bar--s" />
              </div>
            ))}
            <div className="locked__overlay">
              <div className="locked__panel">
                <div className="stamp__core"><Icon name="lock" /></div>
                <h3>Sign in to view specials</h3>
                <p className="muted mt-s">Member specials are available to UPN member pharmacies. Not a member yet? Joining is free.</p>
                <div className="row mt" style={{ justifyContent: "center" }}>
                  <Button href="#" variant="ink">Member sign in</Button>
                  <Button href="/join" variant="outline">Join UPN</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        tone="clay"
        title={<>Vendors: feature a <em>member special.</em></>}
        body="Put your promotion in front of 550+ independent pharmacies."
        primary={{ label: "Contact our vendor team", href: "/contact" }}
      />
    </>
  );
}
