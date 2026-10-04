import type { FormSchema } from "@/content/forms";

// Demo submit handler. Replace the body with a POST to an API route,
// a CRM (HubSpot, Salesforce) or a form service when going live.
export async function submitForm(id: FormSchema["id"], data: Record<string, FormDataEntryValue>) {
  await new Promise((r) => setTimeout(r, 700));
  if (process.env.NODE_ENV !== "production") console.info(`[demo] ${id} form`, data);
  return { ok: true as const };
}
