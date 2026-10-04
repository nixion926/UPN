import type { Metadata } from "next";
import { vendors } from "@/content/vendors";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/blocks";
import { VendorDirectory } from "@/components/sections/VendorDirectory";
import { Button, Stamp } from "@/components/ui/primitives";

export const metadata: Metadata = {
  title: "Vendor Partners",
  description: "UPN's vendor partnership network — companies focused on helping independent pharmacies grow.",
};

export default function VendorsPage() {
  return (
    <>
      <PageHero
        crumb="Vendors"
        eyebrow="Vendor partnership network"
        title={<>{vendors.length}+ partners focused on <em>independent pharmacy.</em></>}
        lead="Our vendor relations team constantly looks for companies that focus on the independent pharmacy industry — from wholesale and payments to front-end brands your patients love — to drive member growth and value."
        aside={
          <div style={{ display: "grid", justifyItems: "start", gap: 24 }}>
            <Stamp text="Vendor partnership network · UPN · " />
            <Button href="#" variant="outline" arrow>View the full booklet</Button>
          </div>
        }
      />

      <section className="section--sm" style={{ paddingTop: 0 }}>
        <div className="container">
          <VendorDirectory />
        </div>
      </section>

      <CtaBand
        tone="clay"
        title={<>Serve independent pharmacies? <em>Partner with UPN.</em></>}
        body="Reach 550+ member pharmacies nationwide. Tell us about your products and programs."
        primary={{ label: "Become a vendor partner", href: "/contact" }}
      />
    </>
  );
}
