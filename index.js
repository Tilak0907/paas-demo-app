import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

// Current directory setup (needed for ES modules)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve index.html directly
app.get("/", (_req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Health check endpoint
app.get("/health", (_req, res) =>
  res.json({ status: "ok", time: new Date().toISOString() })
);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Quiz App running on port ${PORT}`));
