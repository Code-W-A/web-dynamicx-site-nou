import { z } from "zod";
import { isValidLeadPhone } from "./leadPhone";

export const aiAutomationSource = "service-ai-automation";
export const aiAutomationPath = "/servicii/automatizari-ai";
export const aiEmailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export function splitAiContact(contact: string) {
  const value = contact.trim();
  return value.includes("@")
    ? { email: value, phone: "" }
    : { email: "", phone: value };
}
export const aiAutomationRequest = z
  .object({
    name: z
      .string()
      .trim()
      .min(2)
      .max(100)
      .regex(/^[^\r\n]+$/),
    company: z.string().trim().max(200).default(""),
    email: z.string().trim().max(200).default(""),
    phone: z.string().trim().max(30).default(""),
    message: z.string().trim().min(10).max(5000),
    consent: z.literal(true),
    source: z.literal(aiAutomationSource),
    page: z.literal(aiAutomationPath),
  })
  .refine(
    ({ email, phone }) =>
      Boolean(email || phone) &&
      (!email || aiEmailPattern.test(email)) &&
      (!phone || isValidLeadPhone(phone)),
    { message: "Introdu un telefon sau un email valid.", path: ["contact"] },
  );
