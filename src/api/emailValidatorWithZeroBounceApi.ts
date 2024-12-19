import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const BASE_URL =
  process.env.BASE_URL ||
  "https://fullstack-portfolio-f6wfqbcgn-ryo-samuraijps-projects.vercel.app"; // Remote server domain

export const validateEmail = async (email: string): Promise<boolean> => {
  // Send a GET request to the server in order to validate an email address using ZeroBounce API
  try {
    const response = await axios.get(
      `${BASE_URL}/api/validate-email?email=${email}`
    );
    return response.data.status === "valid";
  } catch (error) {
    console.error("Email validation failed:", error);
    return false;
  }
};
