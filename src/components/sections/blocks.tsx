import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { stats, pillars, services, joinSteps } from "@/content/network";
import { testimonials, type TeamMember } from "@/content/people";
import { featuredVendors } from "@/content/vendors";
import type { Post } from "@/content/posts";
import { formatDate } from "@/lib/posts";
import { Button } from "@/components/ui/primitives";
import { Icon } from "@/components/ui/Icon";

/* ---------- CTA band ---------- */
export function CtaBand({
  title,
  body,
  primary = { label: "Join UPN — no fees", href: "/join" },
  secondary,
  tone = "green",
}: {
  title: ReactNode;
  body?: ReactNode;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
  tone?: "green" | "clay";
}) {
  return (
    <section className="section--sm">
      <div className="container">
        <div className={`cta-band reveal ${tone === "clay" ? "cta-band--clay" : ""}`}>
          <div>
            <h2>{title}</h2>
            {body && <p>{body}</p>}
          </div>
          <div className="cta-band__actions">
            <Button href={primary.href} variant="light" size="lg" arrow>{primary.label}</Button>
            {secondary && <Button href={secondary.href} variant="ghost-light">{secondary.label}</Button>}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Stats as two-tone capsules ---------- */
export function StatCapsules() {
  return (
    <div className="capsules">
      {stats.map((s, i) => (
        <div className="capsule reveal" key={s.label} style={{ ["--d" as string]: `${i * 0.07}s` }}>
          <div className="capsule__value">{s.value}</div>
          <div className="capsule__label">{s.label}</div>
        </div>
      ))}
    </div>
  );
}

/* ---------- Benefit pillars (original UPN icons) ---------- */
export function Pillars() {
  return (
    <div className="pillars">
      {pillars.map((p, i) => (
        <div className="pillar reveal" key={p.title} style={{ ["--d" as string]: `${i * 0.06}s` }}>
          <div className="pillar__icon">
            <Image src={p.icon} alt="" width={60} height={60} />
          </div>
          <h3>{p.title}</h3>
          <p>{p.body}</p>
        </div>
      ))}
    </div>
  );
}

/* ---------- Services list ---------- */
export function ServicesList({ detailed = false }: { detailed?: boolean }) {
  return (
    <div className="services">
      {services.map((s) =>
        detailed ? (
          <article className="service service--detailed reveal" key={s.slug} id={s.slug}>
            <span className="service__num">No. {s.number}</span>
            <h3>{s.title}</h3>
            <div>
              <p>{s.body}</p>
              <div className="service__points">
                {s.points.map((p) => <span className="tag" key={p}>{p}</span>)}
              </div>
            </div>
          </article>
        ) : (
          <Link href={`/about#${s.slug}`} className="service reveal" key={s.slug}>
            <span className="service__num">No. {s.number}</span>
            <h3>{s.title}</h3>
            <p>{s.summary}</p>
            <span className="service__arrow"><Icon name="arrowUpRight" /></span>
          </Link>
        )
      )}
    </div>
  );
}

/* ---------- Steps ---------- */
export function Steps({ items = joinSteps }: { items?: { title: string; body: string }[] }) {
  return (
    <ol className="steps">
      {items.map((s, i) => (
        <li className="step reveal" key={s.title} style={{ ["--d" as string]: `${i * 0.1}s` }}>
          <span className="step__n">{i + 1}</span>
          <h3>{s.title}</h3>
          <p>{s.body}</p>
        </li>
      ))}
    </ol>
  );
}

/* ---------- Testimonials ---------- */
export function Quotes({ items = testimonials, columns }: { items?: typeof testimonials; columns?: number }) {
  return (
    <div className="quotes" style={columns ? { ["--cols" as string]: columns } : undefined}>
      {items.map((t, i) => (
        <figure className="quote reveal" key={t.name} style={{ ["--d" as string]: `${i * 0.08}s` }}>
          <blockquote>{t.quote}</blockquote>
          <figcaption>
            <span className="quote__avatar">{t.name[0]}</span>
            <span>
              <strong>{t.name}</strong>
              <span>{t.pharmacy} · {t.state}</span>
            </span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

/* ---------- Vendor logo marquee ---------- */
export function VendorMarquee({ label = "Trusted vendor partners" }: { label?: string }) {
  const track = (hidden?: boolean) => (
    <div className="marquee__track" aria-hidden={hidden}>
      {featuredVendors.map((v) => (
        <Image key={v.name} src={v.logo} alt={hidden ? "" : v.name} width={150} height={44} />
      ))}
    </div>
  );
  return (
    <div className="marquee-wrap">
      <p className="marquee-wrap__label mono">{label}</p>
      <div className="marquee">
        {track()}
        {track(true)}
      </div>
    </div>
  );
}

/* ---------- Team member ---------- */
export function MemberCard({ m, compact = false }: { m: TeamMember; compact?: boolean }) {
  return (
    <article className="member reveal">
      <div className="arch">
        <Image src={m.photo} alt={m.name} fill sizes="(max-width: 640px) 45vw, (max-width: 1100px) 30vw, 280px" />
      </div>
      <h3>{m.name}</h3>
      <p className="member__role">{m.role}</p>
      {!compact && (
        <div className="member__links">
          {m.email && <a href={`mailto:${m.email}`}><Icon name="mail" />{m.email}</a>}
          {m.phone && <a href={`tel:${m.phone.replace(/\D/g, "")}`}><Icon name="phone" />{m.phone}</a>}
          {!m.phone && m.office && <a href="tel:9733028568"><Icon name="phone" />{m.office}</a>}
        </div>
      )}
    </article>
  );
}

/* ---------- Post card ---------- */
export function PostCard({ post, lead = false }: { post: Post; lead?: boolean }) {
  return (
    <Link href={`/blog/${post.slug}`} className={`post-card reveal ${lead ? "post-card--lead" : ""}`}>
      <div className="post-card__media">
        {post.cover ? (
          <Image src={post.cover} alt="" fill sizes={lead ? "(max-width: 900px) 100vw, 680px" : "(max-width: 640px) 100vw, 380px"} />
        ) : (
          <div className="post-card__fallback">Rx</div>
        )}
        <span className="tag tag--paper">{post.topic}</span>
      </div>
      <div>
        <div className="post-card__meta mono">
          <span>{formatDate(post.date)}</span>
          <span>·</span>
          <span>{post.readMinutes} min read</span>
        </div>
        <h3 style={{ marginTop: 10 }}>{post.title}</h3>
        <p style={{ marginTop: 10 }}>{post.summary}</p>
        {lead && <span className="link-arrow mt">Read article <Icon name="arrow" /></span>}
      </div>
    </Link>
  );
}
