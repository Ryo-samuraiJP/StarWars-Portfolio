import emailjs from "@emailjs/browser";
import { TContactFormSchema } from "./types-of-contact-form-schema";
import { validateEmail } from "../api/emailValidatorWithZeroBounceApi";

// Load EmailJS service ID, template ID, and public key from environment variables (set in .env file)
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export const sendEmailWithEmailjs = async (data: TContactFormSchema) => {
  // Validate email address using emailValidator function before sending the email with EmailJS
  const isEmailValid = await validateEmail(data.email);
  if (!isEmailValid) {
    throw new Error("Email address is invalid");
  }

  // Send the email using EmailJS
  return emailjs.send(SERVICE_ID, TEMPLATE_ID, data, PUBLIC_KEY);
};
