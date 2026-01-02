import express from "express";
import nodeCron from "node-cron";
import dotenv from "dotenv";
import { publishBlogs, publishNews } from "./worker/worker.js";

dotenv.config();

const app = express();
const port = 5000;

nodeCron.schedule("* * * * *", async () => {
  console.log(" Cron running:", new Date().toLocaleString());

  try {
    const newsCron = await publishNews();
    const blogCron = await publishBlogs();

    console.log("✅ Cron News Resp::", newsCron);
    console.log("✅ Cron Blog Resp::", blogCron);
  } catch (error) {
    console.error("❌ Cron error:", error.message);
  }
});

// health check
app.get("/", (req, res) => {
  res.send("Cron worker running");
});

app.listen(port, () => {
  console.log(`🚀 Cron server running on http://localhost:${port}`);
});
