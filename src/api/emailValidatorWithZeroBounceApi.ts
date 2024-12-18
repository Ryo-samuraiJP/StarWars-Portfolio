import axios from "axios";
import { fetchEnvVar } from "./fetchEnvVar";

// Validate an email address using the ZeroBounce API
export const validateEmail = async (email: string): Promise<boolean> => {
  const env = await fetchEnvVar();
  // Get the ZeroBounce API key from the environment variables fetched from the server
  const apiKey = env.ZEROBOUNCE_API_KEY;

  // Validate the email address using the ZeroBounce API and return the result
  try {
    const response = await axios.get(
      `https://api.zerobounce.net/v2/validate?api_key=${apiKey}&email=${email}`
    );
    return response.data.status === "valid";
  } catch (error) {
    console.error("Email validation failed:", error);
    return false;
  }
};
