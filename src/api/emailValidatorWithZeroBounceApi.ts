import axios from "axios";

// Load ZeroBounce API key from environment variables (set in .env file)
const ZEROBOUNCE_API_KEY = import.meta.env.VITE_ZEROBOUNCE_API_KEY;

// Validate email address using ZeroBounce API
export const validateEmail = async (email: string): Promise<boolean> => {
  try {
    const response = await axios.get(
      `https://api.zerobounce.net/v2/validate?api_key=${ZEROBOUNCE_API_KEY}&email=${email}`
    );
    return response.data.status === "valid";
  } catch (error) {
    console.error("Email validation failed:", error);
    return false;
  }
};
