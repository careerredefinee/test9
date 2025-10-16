// src/config.js
const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://test9-jizn.onrender.com"
    : "http://localhost:3000";

export default BASE_URL;
