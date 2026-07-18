import express from "express";

const router = express.Router();

// TEMP cart (in-memory)
let cart = [];

// ✅ GET cart
router.get("/", (req, res) => {
  res.json(cart);
});

// ✅ POST cart
router.post("/", (req, res) => {
  console.log("POST /api/cart HIT"); // 🔥 debug line

  cart.push(req.body);

  res.json({
    message: "Item added to cart",
    cart,
  });
});

// ✅ DELETE item
router.delete("/:index", (req, res) => {
  const index = req.params.index;
  cart.splice(index, 1);
  res.json(cart);
});

export default router;