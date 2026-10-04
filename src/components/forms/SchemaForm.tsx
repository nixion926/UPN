"use client";

import { useState, type FormEvent } from "react";
import type { Field, FormSchema } from "@/content/forms";
import { submitForm } from "@/lib/submit";
import { Icon } from "@/components/ui/Icon";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(field: Field, value: FormDataEntryValue | null): string | null {
  const v = typeof value === "string" ? value.trim() : value;
  if (field.required && (!v || v === "")) return field.type === "checkbox" ? "Please confirm to continue" : "Required";
  if (field.type === "email" && v && !EMAIL_RE.test(String(v))) return "Enter a valid email";
  return null;
}

export function SchemaForm({ schema, title, badge }: { schema: FormSchema; title?: string; badge?: string }) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const next: Record<string, string> = {};
    schema.fields.forEach((f) => {
      const err = validate(f, fd.get(f.name));
      if (err) next[f.name] = err;
    });
    setErrors(next);
    if (Object.keys(next).length) return;
    setStatus("sending");
    await submitForm(schema.id, Object.fromEntries(fd));
    setStatus("done");
  }

  if (status === "done") {
    return (
      <div className="form-card form-success" role="status">
        <div className="form-success__icon"><Icon name="check" /></div>
        <h3>{schema.successTitle}</h3>
        <p className="muted">{schema.successBody}</p>
        <button className="btn btn--outline mt" onClick={() => setStatus("idle")}>Submit another</button>
      </div>
    );
  }

  let lastGroup: string | undefined;

  return (
    <form className="form-card" onSubmit={onSubmit} noValidate>
      {(title || badge) && (
        <div className="form-card__head">
          {title && <h3>{title}</h3>}
          {badge && <span className="tag">{badge}</span>}
        </div>
      )}
      <div className="form-grid">
        {schema.fields.map((f) => {
          const groupHeader = f.group && f.group !== lastGroup ? <div className="form-group" key={`g-${f.group}`}>{f.group}</div> : null;
          lastGroup = f.group ?? lastGroup;
          const id = `${schema.id}-${f.name}`;
          const err = errors[f.name];
          const cls = `field ${f.full || f.type === "textarea" ? "field--full" : ""} ${err ? "has-error" : ""}`;

          if (f.type === "checkbox") {
            return [
              groupHeader,
              <div className={cls} key={f.name}>
                <label className="check" htmlFor={id}>
                  <input id={id} name={f.name} type="checkbox" value="yes" aria-invalid={!!err} />
                  <span>{f.label}</span>
                </label>
                {err && <span className="field__error">{err}</span>}
              </div>,
            ];
          }

          return [
            groupHeader,
            <div className={cls} key={f.name}>
              <label htmlFor={id}>
                {f.label} {f.required && <i aria-hidden>*</i>}
              </label>
              {f.type === "textarea" ? (
                <textarea id={id} name={f.name} placeholder={f.placeholder} aria-invalid={!!err} />
              ) : f.type === "select" ? (
                <select id={id} name={f.name} defaultValue="">
                  <option value="" disabled>Select…</option>
                  {f.options?.map((o) => <option key={o}>{o}</option>)}
                </select>
              ) : (
                <input id={id} name={f.name} type={f.type ?? "text"} placeholder={f.placeholder} aria-invalid={!!err} />
              )}
              {err && <span className="field__error">{err}</span>}
            </div>,
          ];
        })}
      </div>
      <div className="form-actions">
        <button className="btn btn--primary btn--lg btn--block" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : schema.submitLabel}
          {status !== "sending" && <Icon name="arrow" />}
        </button>
      </div>
    </form>
  );
}
