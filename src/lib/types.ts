import { z } from "zod";

// Define object schema for contact form data validation
export const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().min(1, "Email is required").email(),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
});

// Infer TypeScript type from schema object
export type TContactFormSchema = z.infer<typeof contactFormSchema>;
