"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { mainNav, site } from "@/content/site";
import { Icon } from "@/components/ui/Icon";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className={`header ${scrolled ? "is-scrolled" : ""} ${open ? "is-open" : ""}`}>
      <div className="container header__inner">
        <Link href="/" className="logo" aria-label={`${site.name} — home`}>
          <Image src="/images/brand/upn-logo.png" alt={site.name} width={400} height={200} priority />
        </Link>

        <nav className="nav" aria-label="Primary">
          {mainNav.map((item) =>
            item.children ? (
              <div className="nav__item" key={item.label}>
                <button
                  className={`nav__link ${item.children.some((c) => isActive(c.href)) ? "is-active" : ""}`}
                  aria-haspopup="true"
                >
                  {item.label} <Icon name="chevron" />
                </button>
                <div className="dropdown">
                  {item.children.map((child) => (
                    <Link key={child.href} href={child.href}>
                      <strong>{child.label}</strong>
                      <span>{child.description}</span>
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <div className="nav__item" key={item.label}>
                <Link href={item.href} className={`nav__link ${isActive(item.href) ? "is-active" : ""}`}>
                  {item.label}
                </Link>
              </div>
            )
          )}
        </nav>

        <div className="header__actions">
          <Link href="/specials" className="header__signin">Sign in</Link>
          <Link href="/join" className="btn btn--primary btn--sm">Join UPN</Link>
          <button className="burger" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className="mobile-nav" aria-hidden={!open}>
        {mainNav.map((item) =>
          item.children ? (
            <div key={item.label}>
              {item.children.map((child, i) => (
                <Link key={child.href} href={child.href} className={i === 0 ? "" : "is-sub"} tabIndex={open ? 0 : -1}>
                  {i === 0 ? item.label : child.label} <Icon name="arrow" />
                </Link>
              ))}
            </div>
          ) : (
            <Link key={item.href} href={item.href} tabIndex={open ? 0 : -1}>
              {item.label} <Icon name="arrow" />
            </Link>
          )
        )}
        <Link href="/join" className="btn btn--primary btn--lg btn--block" tabIndex={open ? 0 : -1}>
          Join UPN — no fees
        </Link>
      </div>
    </header>
  );
}
