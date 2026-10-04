"use client";

import { useState } from "react";
import { submitForm } from "@/lib/submit";

export function Newsletter() {
  const [done, setDone] = useState(false);
  return (
    <form
      className="newsletter"
      onSubmit={async (e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.currentTarget));
        await submitForm("newsletter", data);
        setDone(true);
      }}
    >
      <h4>Stay up to date</h4>
      <p>Weekly news on pricing, legislation and trends that affect independent pharmacy.</p>
      {done ? (
        <p className="newsletter__ok">Confirmation incoming — please check your inbox.</p>
      ) : (
        <div className="newsletter__row">
          <label htmlFor="nl-email" className="sr-only">Email address</label>
          <input id="nl-email" name="email" type="email" required placeholder="you@pharmacy.com" />
          <button className="btn btn--light btn--sm" type="submit">Subscribe</button>
        </div>
      )}
    </form>
  );
}
