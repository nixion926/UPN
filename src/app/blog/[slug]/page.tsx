import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { posts } from "@/content/posts";
import { formatDate, getPost, getRelatedPosts, originalUrl } from "@/lib/posts";
import { Breadcrumbs, Button, SectionHeading } from "@/components/ui/primitives";
import { CtaBand, PostCard } from "@/components/sections/blocks";
import { Icon } from "@/components/ui/Icon";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.summary,
    openGraph: { type: "article", images: post.cover ? [post.cover] : undefined },
  };
}

export default async function PostPage({ params }: Params) {
  const post = getPost((await params).slug);
  if (!post) notFound();
  const related = getRelatedPosts(post);

  return (
    <>
      <article className="section--sm">
        <div className="container">
          <div className="article">
            <Breadcrumbs items={[{ label: "Insights", href: "/blog" }, { label: post.topic }]} />
            <div className="row" style={{ marginBottom: 20 }}>
              <span className="tag">{post.topic}</span>
              <span className="mono muted">{formatDate(post.date, { month: "long", day: "numeric", year: "numeric" })} · {post.readMinutes} min read</span>
            </div>
            <h1 style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)" }}>{post.title}</h1>
          </div>

          {post.cover && (
            <div className="article">
              <div className="article__cover">
                <Image src={post.cover} alt="" width={1200} height={900} priority sizes="(max-width: 800px) 100vw, 760px" />
              </div>
            </div>
          )}

          <div className="article">
            <div className="article__body" style={{ marginTop: post.cover ? 0 : 40 }}>
              <p className="lead dropcap">{post.summary}</p>
              <div className="notice">
                <Icon name="info" />
                <p>
                  <strong>Demo preview.</strong> The full article will be migrated from the existing UPN blog. Until
                  then, you can read it on the current site.
                </p>
              </div>
              <div className="row">
                <Button href={originalUrl(post.slug)} variant="ink" arrow>Read the full article</Button>
                <Button href="/blog" variant="outline">Back to insights</Button>
              </div>
            </div>
          </div>
        </div>
      </article>

      <section className="section section--paper2">
        <div className="container">
          <SectionHeading eyebrow="Keep reading" title={<>Related <em>insights.</em></>} />
          <div className="posts mt-l">
            {related.map((p) => <PostCard post={p} key={p.slug} />)}
          </div>
        </div>
      </section>

      <CtaBand
        title={<>Independent pharmacy is <em>stronger together.</em></>}
        body="Join the network that negotiates, advocates and educates on your behalf."
      />
    </>
  );
}
