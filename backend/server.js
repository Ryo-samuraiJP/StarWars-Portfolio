import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import axios from "axios";

dotenv.config(); // Load environment variables from .env file

const app = express();
const port = process.env.PORT || 3000;

app.use(cors()); // Enable CORS for all requests to the server

// API endpoint to get the environment variables from the server side
app.get("/api/env", (req, res) => {
  res.json({
    ZEROBOUNCE_API_KEY: process.env.ZEROBOUNCE_API_KEY,
    EMAILJS_SERVICE_ID: process.env.EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID: process.env.EMAILJS_TEMPLATE_ID,
    EMAILJS_PUBLIC_KEY: process.env.EMAILJS_PUBLIC_KEY,
  });
});

// API endpoint to validate the email address using the ZeroBounceAPI
app.get("/api/validate-email", async (req, res) => {
  const { email } = req.query;
  const apiKey = process.env.ZEROBOUNCE_API_KEY; // Get the ZeroBounce API key from the environment variables

  // Send a GET request to the ZeroBounce API to validate the email address
  try {
    const response = await axios.get(
      `https://api.zerobounce.net/v2/validate?api_key=${apiKey}&email=${email}`
    );
    res.json(response.data);
  } catch (error) {
    console.error("Email validation failed:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Start the server on the specified port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
