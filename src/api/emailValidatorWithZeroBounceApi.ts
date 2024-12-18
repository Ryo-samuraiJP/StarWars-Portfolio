import axios from "axios";

export const validateEmail = async (email: string): Promise<boolean> => {
  // Send a GET request to the server in order to validate an email address using ZeroBounce API
  try {
    const response = await axios.get(
      `http://localhost:3000/api/validate-email?email=${email}`
    );
    return response.data.status === "valid";
  } catch (error) {
    console.error("Email validation failed:", error);
    return false;
  }
};
