import axios from "axios";

const ZEROBOUNCE_API_KEY = "ec3a85a71bdd40b08d0729b3c78f59c2";

const validateEmail = async (email: string): Promise<boolean> => {
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

export default validateEmail;
