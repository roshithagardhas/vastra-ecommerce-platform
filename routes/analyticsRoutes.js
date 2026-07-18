import express from "express";
import { getAnalytics } from "../controllers/analyticsController.js";

import protect from "../middleware/authMiddleware.js";
import admin from "../middleware/adminMiddleware.js";

const router = express.Router();

router.get("/", protect, admin, getAnalytics);

export default router;