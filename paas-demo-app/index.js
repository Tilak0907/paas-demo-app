import express from "express";

const app = express();

// Health endpoint for demos
app.get("/health", (_req, res) => {
  res.json({
    status: "ok",
    platform: process.env.PLATFORM || "local",
    time: new Date().toISOString()
  });
});

// Root route
app.get("/", (_req, res) => {
  res.send("Hello from PaaS demo 🚀");
});

// IMPORTANT: listen on the PaaS-provided port if available
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
