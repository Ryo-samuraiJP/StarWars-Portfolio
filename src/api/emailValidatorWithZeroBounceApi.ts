import axios from "axios";

const BASE_URL =
  import.meta.env.VITE_BASE_URL ||
  `https://${process.env.VERCEL_URL}` ||
  "http://localhost:3000";

export const validateEmail = async (email: string): Promise<boolean> => {
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
