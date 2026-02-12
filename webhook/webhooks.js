import express from "express";

const webhookRoutes = express.Router();
webhookRoutes.post("/test", (req, res) => {
  console.log("Github webhook received:", req.body);
  res.status(200).json({ received: true});
  res.json({received: true});
});

export default webhookRoutes;