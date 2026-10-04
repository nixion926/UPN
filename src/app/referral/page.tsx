import type { Metadata } from "next";
import { referralForm } from "@/content/forms";
import { PageHero } from "@/components/sections/PageHero";
import { Quotes, Steps } from "@/components/sections/blocks";
import { SchemaForm } from "@/components/forms/SchemaForm";
import { RxLabel, SectionHeading } from "@/components/ui/primitives";

export const metadata: Metadata = {
  title: "Referral Program",
  description: "Earn $1,000 through UPN's Refer-A-Pharmacy program.",
};

const referralSteps = [
  { title: "Submit a referral", body: "Tell us about an independent pharmacy that could benefit from UPN." },
  { title: "We connect", body: "Our team reaches out, walks them through the network and answers their questions." },
  { title: "They join — you earn", body: "When the referred pharmacy becomes a member, you receive $1,000." },
];

export default function ReferralPage() {
  return (
    <>
      <PageHero
        crumb="Referral program"
        eyebrow="Refer-A-Pharmacy"
        title={<>It pays to refer. Earn <em>$1,000.</em></>}
        lead="The more members we have, the stronger the group becomes — and the more we can help every pharmacy grow. Introduce a fellow independent to UPN and we'll reward you when they join."
        aside={
          <RxLabel
            title="Referral reward"
            big={{ value: "$1,000", caption: "Per pharmacy that joins" }}
            rows={[["Referrals", "Unlimited"], ["Cost to you", "$0"], ["Paid when", "They join"]]}
          />
        }
      />

      <section className="section--sm">
        <div className="container">
          <SectionHeading eyebrow="How it works" title={<>Three steps to <em>your reward.</em></>} />
          <div className="mt-l"><Steps items={referralSteps} /></div>
        </div>
      </section>

      <section className="section section--sage" id="refer">
        <div className="container form-layout">
          <div className="reveal">
            <SectionHeading eyebrow="Refer now" title={<>Know a pharmacy that <em>should be saving?</em></>} />
            <p className="lead mt">Fill in your details and theirs. We&apos;ll take it from there and keep you in the loop.</p>
            <p className="footnote">Subject to the Refer-A-Pharmacy Program Terms and Conditions.</p>
          </div>
          <div className="reveal" style={{ ["--d" as string]: ".1s" }}>
            <SchemaForm schema={referralForm} title="Refer a pharmacy" badge="$1,000 reward" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Why they'll thank you" title={<>What members <em>say about UPN.</em></>} />
          <div className="mt-l"><Quotes /></div>
        </div>
      </section>
    </>
  );
}
