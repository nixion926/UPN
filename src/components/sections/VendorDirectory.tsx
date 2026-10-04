"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { vendors } from "@/content/vendors";
import { Icon } from "@/components/ui/Icon";

export function VendorDirectory() {
  const [q, setQ] = useState("");
  const list = useMemo(() => {
    const term = q.trim().toLowerCase();
    return [...vendors].sort((a, b) => a.name.localeCompare(b.name)).filter((v) => v.name.toLowerCase().includes(term));
  }, [q]);

  return (
    <>
      <div className="toolbar">
        <p className="mono muted">{list.length} of {vendors.length} partners</p>
        <label className="search">
          <Icon name="search" />
          <span className="sr-only">Search vendors</span>
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search vendor partners…" />
        </label>
      </div>
      {list.length ? (
        <div className="logo-grid">
          {list.map((v) => (
            <div className="logo-cell" key={v.name}>
              <Image src={v.logo} alt={v.name} width={200} height={120} />
              <span>{v.name}</span>
            </div>
          ))}
        </div>
      ) : (
        <div className="empty">No partners match “{q}”.</div>
      )}
    </>
  );
}
