import express from "express";
const app = express();

app.get("/", (_req, res) => res.send("Hello from PaaS demo 🚀"));
app.get("/health", (_req, res) =>
  res.json({ status: "ok", time: new Date().toISOString() })
);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`App running on ${PORT}`));
