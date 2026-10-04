import Link from "next/link";
import type { ReactNode } from "react";
import { Icon } from "./Icon";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ink" | "outline" | "light" | "ghost-light";
  size?: "sm" | "md" | "lg";
  arrow?: boolean;
  className?: string;
};

export function Button({ href, children, variant = "primary", size = "md", arrow, className = "" }: ButtonProps) {
  const cls = ["btn", `btn--${variant}`, size !== "md" && `btn--${size}`, className].filter(Boolean).join(" ");
  const external = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");
  const content = (
    <>
      {children}
      {arrow && <Icon name="arrow" />}
    </>
  );
  return external ? (
    <a href={href} className={cls}>{content}</a>
  ) : (
    <Link href={href} className={cls}>{content}</Link>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <span className="eyebrow">{children}</span>;
}

/** Hand-drawn underline for a key word in a headline. */
export function Squiggle({ children }: { children: ReactNode }) {
  return (
    <span className="squiggle">
      {children}
      <svg viewBox="0 0 200 20" preserveAspectRatio="none" aria-hidden>
        <path d="M3 14c30-8 60-10 95-7 30 2.5 60 3 99-5" />
      </svg>
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  action,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  action?: ReactNode;
}) {
  const body = (
    <div>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2>{title}</h2>
      {intro && <p className="lead">{intro}</p>}
    </div>
  );
  if (action) {
    return (
      <div className="heading heading--row reveal">
        {body}
        {action}
      </div>
    );
  }
  return <div className={`heading reveal ${align === "center" ? "heading--center" : ""}`}>{body}</div>;
}

/** Rotating circular text badge. */
export function Stamp({ text, core = "Rx" }: { text: string; core?: string }) {
  return (
    <div className="stamp" aria-hidden>
      <svg viewBox="0 0 132 132">
        <defs>
          <path id="stamp-circle" d="M66 66m-52 0a52 52 0 1 1 104 0a52 52 0 1 1-104 0" />
        </defs>
        <text>
          <textPath href="#stamp-circle">{text}</textPath>
        </text>
      </svg>
      <div className="stamp__core">{core}</div>
    </div>
  );
}

/** Prescription-label styled info card. */
export function RxLabel({
  title,
  rows,
  big,
  className = "",
}: {
  title: string;
  rows: [string, string][];
  big?: { value: string; caption: string };
  className?: string;
}) {
  return (
    <div className={`rx ${className}`}>
      <div className="rx__head">
        <b>Rx</b>
        <span className="mono">{title}</span>
      </div>
      <div className="rx__body">
        {big && (
          <div>
            <div className="rx__big">{big.value}</div>
            <div className="mono muted" style={{ marginTop: 6 }}>{big.caption}</div>
          </div>
        )}
        {rows.map(([k, v]) => (
          <div className="rx__row" key={k}>
            <span>{k}</span>
            <span>{v}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav className="crumbs" aria-label="Breadcrumb">
      <Link href="/">Home</Link>
      {items.map((item) => (
        <span key={item.label} style={{ display: "contents" }}>
          <span aria-hidden>/</span>
          {item.href ? <Link href={item.href}>{item.label}</Link> : <span aria-current="page">{item.label}</span>}
        </span>
      ))}
    </nav>
  );
}
