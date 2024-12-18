import axios from "axios";

// Fetch environment variables from the server
export const fetchEnvVar = async () => {
  try {
    const response = await axios.get("http://localhost:3000/api/env");
    return response.data;
  } catch (error) {
    console.error("Failed to fetch environment variables:", error);
    return {};
  }
};
