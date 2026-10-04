import { posts, type Post } from "@/content/posts";

// Data-access layer for posts. Swap these implementations for a CMS
// (Sanity, Contentful, WordPress, etc.) without touching any page.

export function getAllPosts(): Post[] {
  return [...posts].sort((a, b) => b.date.localeCompare(a.date));
}

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getRelatedPosts(post: Post, limit = 3): Post[] {
  const rest = getAllPosts().filter((p) => p.slug !== post.slug);
  const sameTopic = rest.filter((p) => p.topic === post.topic);
  return [...sameTopic, ...rest.filter((p) => p.topic !== post.topic)].slice(0, limit);
}

export function formatDate(iso: string, opts: Intl.DateTimeFormatOptions = { month: "short", day: "numeric", year: "numeric" }) {
  return new Date(iso + "T12:00:00").toLocaleDateString("en-US", opts);
}

export function originalUrl(slug: string) {
  return `https://www.upnrx.com/post/${slug}`;
}
