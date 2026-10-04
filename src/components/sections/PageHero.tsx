import Image from "next/image";
import type { ReactNode } from "react";
import { Breadcrumbs, Eyebrow } from "@/components/ui/primitives";

type Props = {
  crumb: string;
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  image?: { src: string; alt: string; position?: string };
  aside?: ReactNode;
  children?: ReactNode;
};

/** Hero used by every inner page: breadcrumbs, serif headline, optional arch image or custom aside. */
export function PageHero({ crumb, eyebrow, title, lead, image, aside, children }: Props) {
  const hasAside = Boolean(image || aside);
  return (
    <section className={`page-hero ${hasAside ? "" : "page-hero--plain"}`}>
      <div className="container">
        <Breadcrumbs items={[{ label: crumb }]} />
        <div className="page-hero__grid">
          <div className="reveal">
            <Eyebrow>{eyebrow}</Eyebrow>
            <h1>{title}</h1>
            {lead && <p className="lead">{lead}</p>}
            {children}
          </div>
          {hasAside && (
            <div className="page-hero__aside reveal" style={{ ["--d" as string]: ".12s" }}>
              {image ? (
                <div className="arch arch--outline">
                  <Image src={image.src} alt={image.alt} fill sizes="(max-width: 900px) 90vw, 420px" style={{ objectPosition: image.position }} priority />
                </div>
              ) : (
                aside
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
