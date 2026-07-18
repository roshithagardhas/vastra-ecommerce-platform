import User from "../models/User.js";
import Product from "../models/Product.js";
import Order from "../models/orderModel.js";

export const getDashboardStats = async (req, res) => {
  try {
    const users = await User.countDocuments();

    const products = await Product.countDocuments();

    const orders = await Order.countDocuments();

    const paidOrders = await Order.find({
      isPaid: true,
    });

    const revenue = paidOrders.reduce(
      (acc, order) => acc + order.totalPrice,
      0
    );

    res.json({
      users,
      products,
      orders,
      revenue,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};