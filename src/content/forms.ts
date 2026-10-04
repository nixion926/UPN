import { wholesalers } from "./network";

// Form schemas. Every form on the site renders from one of these through
// <SchemaForm />, so adding a field is a one-line change here.

export type Field = {
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "textarea" | "select" | "checkbox";
  required?: boolean;
  placeholder?: string;
  options?: string[];
  full?: boolean;
  group?: string;
};

export type FormSchema = {
  id: "join" | "contact" | "referral" | "ibg" | "newsletter";
  submitLabel: string;
  successTitle: string;
  successBody: string;
  fields: Field[];
};

export const joinForm: FormSchema = {
  id: "join",
  submitLabel: "Submit application",
  successTitle: "Application received",
  successBody: "Thanks — a UPN representative will reach out within one business day.",
  fields: [
    { name: "firstName", label: "First name", required: true, placeholder: "Jane" },
    { name: "lastName", label: "Last name", required: true, placeholder: "Doe" },
    { name: "email", label: "Email", type: "email", required: true, placeholder: "jane@mainstreetrx.com" },
    { name: "phone", label: "Phone", type: "tel", required: true, placeholder: "(555) 000-0000" },
    { name: "pharmacy", label: "Pharmacy name", required: true, placeholder: "Main Street Pharmacy" },
    { name: "npi", label: "NPI number", placeholder: "10-digit NPI" },
    { name: "street", label: "Street address", full: true, placeholder: "123 Main St" },
    { name: "city", label: "City", placeholder: "Mendham" },
    { name: "state", label: "State", placeholder: "NJ" },
    { name: "zip", label: "ZIP code", placeholder: "07945" },
    { name: "wholesaler", label: "Current wholesaler", type: "select", options: wholesalers },
    { name: "comments", label: "Anything we should know?", type: "textarea", full: true, placeholder: "Tell us about your goals…" },
  ],
};

export const contactForm: FormSchema = {
  id: "contact",
  submitLabel: "Send message",
  successTitle: "Message sent",
  successBody: "Thanks for reaching out — we'll get back to you shortly.",
  fields: [
    { name: "name", label: "Name", required: true, placeholder: "Your name" },
    { name: "company", label: "Company / pharmacy", placeholder: "Main Street Pharmacy" },
    { name: "email", label: "Email", type: "email", required: true, placeholder: "you@pharmacy.com" },
    { name: "phone", label: "Phone", type: "tel", required: true, placeholder: "(555) 000-0000" },
    { name: "message", label: "What's on your mind?", type: "textarea", full: true, required: true },
    {
      name: "sms",
      label: "I agree to receive recurring messages from United Pharmacy Network. Reply STOP to opt out, HELP for help. Message frequency varies; message & data rates may apply.",
      type: "checkbox",
      full: true,
    },
  ],
};

export const referralForm: FormSchema = {
  id: "referral",
  submitLabel: "Submit referral",
  successTitle: "Referral submitted",
  successBody: "Thank you! We'll reach out to the pharmacy and keep you posted.",
  fields: [
    { name: "refPharmacy", label: "Your pharmacy name", required: true, group: "You (referring pharmacy)" },
    { name: "refOwner", label: "Owner name", required: true, group: "You (referring pharmacy)" },
    { name: "refPhone", label: "Phone", type: "tel", required: true, group: "You (referring pharmacy)" },
    { name: "refEmail", label: "Email", type: "email", required: true, group: "You (referring pharmacy)" },
    { name: "prospectPharmacy", label: "Pharmacy name", required: true, group: "Pharmacy you're referring" },
    { name: "prospectContact", label: "Contact name", required: true, group: "Pharmacy you're referring" },
    { name: "prospectPhone", label: "Contact phone", type: "tel", required: true, group: "Pharmacy you're referring" },
    { name: "prospectEmail", label: "Contact email", type: "email", required: true, group: "Pharmacy you're referring" },
    { name: "prospectWholesaler", label: "Current wholesaler", type: "select", options: wholesalers, full: true, group: "Pharmacy you're referring" },
    { name: "terms", label: "I have read and agree to the Refer-A-Pharmacy Program Terms and Conditions.", type: "checkbox", required: true, full: true },
  ],
};

export const ibgForm: FormSchema = {
  id: "ibg",
  submitLabel: "Register with IBG",
  successTitle: "You're registered",
  successBody: "Thanks for submitting! The IBG team will be in touch.",
  fields: [
    { name: "firstName", label: "First name", required: true },
    { name: "lastName", label: "Last name", required: true },
    { name: "email", label: "Email", type: "email", required: true, full: true },
  ],
};
