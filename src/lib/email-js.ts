import emailjs from "@emailjs/browser";
import { TContactFormSchema } from "./types-of-contact-form-schema";
import { validateEmail } from "../api/emailValidatorWithZeroBounceApi";
import { fetchEnvVar } from "../api/fetchEnvVar";

export const sendEmailWithEmailjs = async (data: TContactFormSchema) => {
  const env = await fetchEnvVar();
  // Get the EmailJS service ID, template ID, and public key from the environment variables fetched from the server
  const SERVICE_ID = env.EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = env.EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = env.EMAILJS_PUBLIC_KEY;

  const isEmailValid = await validateEmail(data.email);
  if (!isEmailValid) {
    throw new Error("Email address is invalid");
  }

  // Send the email using EmailJS and return the result
  return emailjs.send(SERVICE_ID, TEMPLATE_ID, data, PUBLIC_KEY);
};
