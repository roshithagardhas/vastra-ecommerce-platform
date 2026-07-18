import express from "express";
import {
  addToWishlist,
  getWishlist,
  removeFromWishlist,
} from "../controllers/wishlistController.js";

import protect from "../middleware/authMiddleware.js";

const router = express.Router();

// Add product to wishlist
router.post("/", protect, addToWishlist);

// Get wishlist
router.get("/", protect, getWishlist);

// Remove product from wishlist
router.delete("/:productId", protect, removeFromWishlist);

export default router;