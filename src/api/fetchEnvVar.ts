import axios from "axios";

const BASE_URL =
  process.env.BASE_URL ||
  "https://fullstack-portfolio-f6wfqbcgn-ryo-samuraijps-projects.vercel.app"; // Remote server domain

export const fetchEnvVar = async () => {
  // Send a GET request to the server in order to fetch environment variables
  try {
    const response = await axios.get(`${BASE_URL}/api/env`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch environment variables:", error);
    return {};
  }
};
