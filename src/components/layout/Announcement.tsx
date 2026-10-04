import Link from "next/link";
import { site } from "@/content/site";
import { Icon } from "@/components/ui/Icon";

export function Announcement() {
  const { label, text, href } = site.announcement;
  return (
    <div className="announce">
      <Link href={href}>
        <span className="tag">{label}</span>
        <span>{text}</span>
        <span className="announce__cta">
          Read more <Icon name="arrow" />
        </span>
      </Link>
    </div>
  );
}
