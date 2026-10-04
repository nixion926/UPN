import type { Metadata } from "next";
import Image from "next/image";
import { ibg } from "@/content/ibg";
import { ibgForm } from "@/content/forms";
import { PageHero } from "@/components/sections/PageHero";
import { SchemaForm } from "@/components/forms/SchemaForm";
import { Button, Eyebrow, SectionHeading } from "@/components/ui/primitives";
import { Icon } from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "IBG Drugs",
  description: "IBG Drugs is an independently owned pharmaceutical wholesaler and distributor partnered with United Pharmacy Network.",
};

export default function IbgPage() {
  return (
    <>
      <PageHero
        crumb="IBG Drugs"
        eyebrow="Wholesale partner"
        title={<>IBG Drugs: a robust catalogue, <em>privately owned.</em></>}
        lead={ibg.intro}
        aside={
          <div className="arch" style={{ aspectRatio: "4 / 4.6", background: "var(--card)", display: "grid", placeItems: "center", border: "1px solid var(--line)" }}>
            <Image src={ibg.logo} alt="IBG Drugs" width={300} height={300} priority style={{ width: "70%", height: "auto", objectFit: "contain" }} />
          </div>
        }
      >
        <div className="row mt">
          <Button href="#register" arrow>Register now</Button>
          <Button href={ibg.phoneHref} variant="outline">Call {ibg.phone}</Button>
        </div>
      </PageHero>

      <section className="section section--paper2">
        <div className="container">
          <SectionHeading eyebrow="We offer" title={<>Everything on <em>the shelf</em> — and behind the counter.</>} intro={ibg.partners} />
          <div className="shelf shelf--light mt-l" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))" }}>
            {ibg.categories.map((c) => (
              <div className="shelf__item reveal" key={c.label}>
                <Image src={c.icon} alt="" width={38} height={38} />
                {c.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--ink">
        <div className="container feature">
          <div className="feature__body reveal">
            <Eyebrow>Premiere Option Program</Eyebrow>
            <h2>Why pharmacies <em>order with IBG.</em></h2>
            <p className="lead">{ibg.partnership[0]}</p>
            <p className="mt-s">{ibg.partnership[1]}</p>
          </div>
          <ul className="checklist reveal" style={{ marginTop: 0 }}>
            {ibg.benefits.map((b) => (
              <li key={b.title}><div><strong style={{ color: "var(--paper)" }}>{b.title}</strong><span>{b.body}</span></div></li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" id="register">
        <div className="container form-layout">
          <div className="reveal">
            <SectionHeading eyebrow="Register now" title={<>Open an account <em>with IBG.</em></>} />
            <div className="info-list">
              <a className="info-list__row" href={ibg.phoneHref}>
                <span className="info-list__icon"><Icon name="phone" /></span>
                <span><small>Call</small><strong>{ibg.phone}</strong></span>
              </a>
              <a className="info-list__row" href={`mailto:${ibg.email}`}>
                <span className="info-list__icon"><Icon name="mail" /></span>
                <span><small>Email</small><strong>{ibg.email}</strong></span>
              </a>
              <div>
                <span className="info-list__icon"><Icon name="pin" /></span>
                <span><small>Available in*</small><strong>{ibg.states.join(", ")}</strong></span>
              </div>
            </div>
          </div>
          <div className="reveal" style={{ ["--d" as string]: ".1s" }}>
            <SchemaForm schema={ibgForm} title="Register with IBG Drugs" badge="UPN members" />
          </div>
        </div>
      </section>
    </>
  );
}
