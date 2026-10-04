import type { Metadata } from "next";
import { contactForm } from "@/content/forms";
import { site } from "@/content/site";
import { PageHero } from "@/components/sections/PageHero";
import { SchemaForm } from "@/components/forms/SchemaForm";
import { Icon } from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with United Pharmacy Network in Mendham, NJ.",
};

export default function ContactPage() {
  const { contact } = site;
  const mapQuery = encodeURIComponent(`${contact.address.line1}, ${contact.address.city}, ${contact.address.state} ${contact.address.zip}`);

  return (
    <>
      <PageHero
        crumb="Contact"
        eyebrow="Contact us"
        title={<>Let&apos;s talk about <em>your pharmacy.</em></>}
        lead="Questions about membership, pricing, vendors or IBG Drugs? Send us a note and the right person will get back to you."
      />

      <section className="section--sm" style={{ paddingTop: 0 }}>
        <div className="container form-layout">
          <div className="reveal">
            <h3>Find us</h3>
            <div className="info-list">
              <a className="info-list__row" href={`https://maps.google.com/?q=${mapQuery}`} target="_blank" rel="noreferrer">
                <span className="info-list__icon"><Icon name="pin" /></span>
                <span><small>Office</small><strong>{contact.address.line1}<br />{contact.address.city}, {contact.address.state} {contact.address.zip}</strong></span>
              </a>
              <a className="info-list__row" href={contact.phoneHref}>
                <span className="info-list__icon"><Icon name="phone" /></span>
                <span><small>Phone</small><strong>{contact.phone}</strong></span>
              </a>
              <a className="info-list__row" href={`mailto:${contact.email}`}>
                <span className="info-list__icon"><Icon name="mail" /></span>
                <span><small>Email</small><strong>{contact.email}</strong></span>
              </a>
            </div>
            <div className="socials" style={{ marginTop: 28 }}>
              {site.socials.map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label} target="_blank" rel="noreferrer" style={{ borderColor: "var(--line-strong)", color: "var(--ink)" }}>
                  <Icon name={s.icon} />
                </a>
              ))}
            </div>
          </div>
          <div className="reveal" style={{ ["--d" as string]: ".1s" }}>
            <SchemaForm schema={contactForm} title="Send us a message" />
          </div>
        </div>
      </section>
    </>
  );
}
