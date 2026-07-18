import Coupon from "../models/Coupon.js";

// CREATE COUPON (ADMIN)
export const createCoupon = async (req, res) => {
  try {
    const { code, discountPercentage, expiryDate } = req.body;

    const coupon = await Coupon.create({
      code,
      discountPercentage,
      expiryDate,
    });

    res.status(201).json(coupon);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// GET ALL COUPONS
export const getCoupons = async (req, res) => {
  try {
    const coupons = await Coupon.find();

    res.json(coupons);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// APPLY COUPON
export const applyCoupon = async (req, res) => {
  try {
    const { code, totalAmount } = req.body;

    const coupon = await Coupon.findOne({
      code,
      isActive: true,
    });

    if (!coupon) {
      return res.status(404).json({
        message: "Invalid coupon",
      });
    }

    if (new Date() > coupon.expiryDate) {
      return res.status(400).json({
        message: "Coupon expired",
      });
    }

    const discount =
      (totalAmount * coupon.discountPercentage) / 100;

    const finalAmount = totalAmount - discount;

    res.json({
      coupon: coupon.code,
      discount,
      finalAmount,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};