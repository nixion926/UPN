"use client";

import { useState } from "react";
import { topics, type Post, type Topic } from "@/content/posts";
import { PostCard } from "./blocks";

export function BlogExplorer({ posts }: { posts: Post[] }) {
  const [topic, setTopic] = useState<Topic | "All">("All");
  const list = topic === "All" ? posts : posts.filter((p) => p.topic === topic);
  const [lead, ...rest] = list;

  return (
    <>
      <div className="toolbar">
        <div className="filters" role="tablist" aria-label="Filter by topic">
          {(["All", ...topics] as const).map((t) => (
            <button key={t} role="tab" aria-selected={topic === t} className={`filter ${topic === t ? "is-active" : ""}`} onClick={() => setTopic(t)}>
              {t}
            </button>
          ))}
        </div>
        <p className="mono muted">{list.length} articles</p>
      </div>
      <div className="posts">
        {lead && <PostCard post={lead} lead key={`lead-${lead.slug}`} />}
        {rest.map((p) => <PostCard post={p} key={p.slug} />)}
      </div>
    </>
  );
}
