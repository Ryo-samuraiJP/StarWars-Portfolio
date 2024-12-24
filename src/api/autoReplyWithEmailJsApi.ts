import axios from "axios";
import { TContactFormSchema } from "../lib/types-of-contact-form-schema";
import { validateEmail } from "./emailValidatorWithZeroBounceApi";

// Load EmailJS service ID, template ID, and public key from environment variables (set in .env file)
const SERVICE_ID = process.env.EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.EMAILJS_PUBLIC_KEY;

export const sendEmailWithEmailjs = async (data: TContactFormSchema) => {
  // Validate email address using emailValidator function before sending the email with EmailJS
  const isEmailValid = await validateEmail(data.email);
  if (!isEmailValid) {
    throw new Error("Email address is invalid");
  }

  // Send email using EmailJS REST API
  try {
    const response = await axios.post(
      "https://api.emailjs.com/api/v1.0/email/send",
      {
        service_id: SERVICE_ID,
        template_id: TEMPLATE_ID,
        user_id: PUBLIC_KEY,
        template_params: data,
      }
    );
    return response.data;
  } catch (error) {
    console.error("Failed to send email:", error);
    throw error;
  }
};
