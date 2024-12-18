import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config(); // Load environment variables from .env file

const app = express();
const port = process.env.PORT || 3000; // Use the PORT environment variable or default to 3000

app.use(cors()); // Enable CORS for all requests to the server

// API endpoint to get the environment variables from the server side
app.get("/api/env", (req, res) => {
  // Send the environment variables as a JSON object
  res.json({
    ZEROBOUNCE_API_KEY: process.env.ZEROBOUNCE_API_KEY,
    EMAILJS_SERVICE_ID: process.env.EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID: process.env.EMAILJS_TEMPLATE_ID,
    EMAILJS_PUBLIC_KEY: process.env.EMAILJS_PUBLIC_KEY,
  });
});

// Start the server on the specified port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
