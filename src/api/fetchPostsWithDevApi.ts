import axios from "axios";

// Fetch DEV posts by username from DEV.to API
export const fetchDevPosts = async (username: string) => {
  try {
    const response = await axios.get(
      `https://dev.to/api/articles?username=${username}`
    );
    return response.data;
  } catch (error) {
    console.error("Failed to fetch DEV posts:", error);
    return [];
  }
};
