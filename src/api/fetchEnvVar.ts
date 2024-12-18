import axios from "axios";

export const fetchEnvVar = async () => {
  // Send a GET request to the server in order to fetch environment variables
  try {
    const response = await axios.get("http://localhost:3000/api/env");
    return response.data;
  } catch (error) {
    console.error("Failed to fetch environment variables:", error);
    return {};
  }
};
