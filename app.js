import express from "express";
import cors from "cors";
import morgan from "morgan";
import path from "path";
import fs from "fs";
import webhookRoutes from "./webhook/webhooks.js";

import authRoutes from "./routes/auth.route.js";
import artifactRoutes from "./routes/artifacts.route.js"
import likes from "./routes/likes.routes.js";
import comment from "./routes/comment.route.js";
import cookieParser from "cookie-parser";
import { testing } from "./crons/testing.js";

const app = express();


if (!fs.existsSync("uploads")) {
  fs.mkdirSync("uploads");
}


app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use(morgan("dev"));
app.use(cookieParser());

app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));


app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "CMS Backend is running"
  });
});


testing();

app.use("/webhooks", webhookRoutes);
app.use("/auth", authRoutes);
app.use("/artifacts", artifactRoutes);
app.use("/likes", likes);
app.use("/comments", comment);

export default app;