"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/** Adds `.is-in` to every `.reveal` element as it scrolls into view. Re-runs on route change. */
export function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    document.documentElement.classList.add("js-reveal");
    const observe = () =>
      document.querySelectorAll(".reveal:not(.is-in)").forEach((el) => {
        // Anything already on screen is shown immediately; the rest animates in on scroll.
        if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add("is-in");
        else io.observe(el);
      });
    observe();
    // Catch elements rendered after mount (client filters, etc.)
    const mo = new MutationObserver(observe);
    mo.observe(document.body, { childList: true, subtree: true });
    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, [pathname]);

  return null;
}
