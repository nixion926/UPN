import Link from "next/link";
import { footerNav, site } from "@/content/site";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Newsletter } from "@/components/forms/Newsletter";

export function Footer() {
  const { contact } = site;
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <h2>
              Independent, <em>together.</em>
            </h2>
            <p>{site.tagline} A group purchasing organization built by pharmacy owners, for pharmacy owners.</p>
            <div className="socials">
              {site.socials.map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label} target="_blank" rel="noreferrer">
                  <Icon name={s.icon as IconName} />
                </a>
              ))}
            </div>
          </div>
          <div className="footer__cols">
            {footerNav.map((col) => (
              <div key={col.title}>
                <h4>{col.title}</h4>
                {col.links.map((l) => (
                  <Link key={l.label} href={l.href}>{l.label}</Link>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="footer__mid">
          <div className="footer__contact">
            <h4>Visit / call</h4>
            <span>{contact.address.line1}, {contact.address.city}, {contact.address.state} {contact.address.zip}</span>
            <a href={contact.phoneHref}>{contact.phone}</a>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </div>
          <Newsletter />
        </div>

        <div className="footer__wordmark" aria-hidden>
          <span>U</span><span>P</span><span>N</span><span><em>Rx</em></span>
        </div>

        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} {site.name}. All rights reserved.</span>
          <span>
            <a href={site.privacyUrl} target="_blank" rel="noreferrer">Privacy policy</a> · *As reported by UPN
          </span>
        </div>
      </div>
    </footer>
  );
}
