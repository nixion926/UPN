import type { Metadata } from "next";
import { joinForm } from "@/content/forms";
import { site } from "@/content/site";
import { PageHero } from "@/components/sections/PageHero";
import { SchemaForm } from "@/components/forms/SchemaForm";
import { Quotes, Steps } from "@/components/sections/blocks";
import { SectionHeading } from "@/components/ui/primitives";
import { Icon } from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "Join UPN",
  description: "Join United Pharmacy Network — no membership fees. Better pricing, transparent rebates and member services for independent pharmacies.",
};

export default function JoinPage() {
  const { contact } = site;
  return (
    <>
      <PageHero
        crumb="Join UPN"
        eyebrow="Join UPN today"
        title={<>Membership is free. <em>The savings aren&apos;t small.</em></>}
        lead="Apply in a few minutes. A UPN representative will review your purchasing with you and show you where the network can make a difference."
      />

      <section className="section--sm" style={{ paddingTop: 0 }}>
        <div className="container form-layout">
          <div className="reveal">
            <ul className="checklist" style={{ marginTop: 0 }}>
              <li><div><strong>No membership fees</strong><span>Ever.</span></div></li>
              <li><div><strong>100% transparent rebates</strong><span>Paid directly to you.</span></div></li>
              <li><div><strong>Keep your wholesaler</strong><span>Cardinal/Kinray, McKesson, Cencora and others.</span></div></li>
              <li><div><strong>Marketing, education & advocacy</strong><span>Included with membership.</span></div></li>
            </ul>
            <div className="info-list mt-l">
              <a className="info-list__row" href={contact.phoneHref}>
                <span className="info-list__icon"><Icon name="phone" /></span>
                <span><small>Prefer to talk?</small><strong>{contact.phone}</strong></span>
              </a>
              <a className="info-list__row" href={`mailto:${contact.email}`}>
                <span className="info-list__icon"><Icon name="mail" /></span>
                <span><small>Email</small><strong>{contact.email}</strong></span>
              </a>
            </div>
          </div>
          <div className="reveal" style={{ ["--d" as string]: ".1s" }}>
            <SchemaForm schema={joinForm} title="Membership application" badge="Free" />
          </div>
        </div>
      </section>

      <section className="section section--paper2">
        <div className="container">
          <SectionHeading eyebrow="What happens next" title={<>From application to <em>savings.</em></>} />
          <div className="mt-l"><Steps /></div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Member stories" title={<>Hear it from <em>your peers.</em></>} />
          <div className="mt-l"><Quotes /></div>
        </div>
      </section>
    </>
  );
}
