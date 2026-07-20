import express from "express";
import {
  getProducts,
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";

import protect from "../middleware/authMiddleware.js";
import admin from "../middleware/adminMiddleware.js"; // ✅ MUST ADD THIS

import upload from "../middleware/uploadMiddleware.js";
import { uploadProductImage } from "../controllers/productController.js";

const router = express.Router();

router.post(
  "/upload",
  protect,
  admin,
  upload.single("image"),
  uploadProductImage
);

// Routes
router.get("/", getProducts);
router.post("/", protect, admin, createProduct);
router.get("/:id", getProductById);
router.put("/:id", protect, admin, updateProduct);
router.delete("/:id", protect, admin, deleteProduct);

export default router;