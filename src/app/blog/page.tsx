import type { Metadata } from "next";
import { getAllPosts } from "@/lib/posts";
import { PageHero } from "@/components/sections/PageHero";
import { BlogExplorer } from "@/components/sections/BlogExplorer";
import { CtaBand } from "@/components/sections/blocks";

export const metadata: Metadata = {
  title: "Insights",
  description: "News, advocacy and industry insights for independent pharmacies from United Pharmacy Network.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        crumb="Insights"
        eyebrow="In the news"
        title={<>Insights for <em>independents.</em></>}
        lead="Trends, coverage changes, legislation and network news — the issues that impact independent pharmacy, explained."
      />
      <section className="section--sm" style={{ paddingTop: 0 }}>
        <div className="container">
          <BlogExplorer posts={getAllPosts()} />
        </div>
      </section>
      <CtaBand
        title={<>Get insights <em>every week.</em></>}
        body="Members receive weekly updates on pricing, legislation and trends — plus invitations to UPN webinars."
        primary={{ label: "Become a member", href: "/join" }}
      />
    </>
  );
}
