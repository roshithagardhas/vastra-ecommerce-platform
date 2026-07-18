import User from "../models/User.js";
import Product from "../models/Product.js";
import Order from "../models/orderModel.js";

export const getAnalytics = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();

    const totalProducts = await Product.countDocuments();

    const totalOrders = await Order.countDocuments();

    const paidOrders = await Order.find({ isPaid: true });

    const totalRevenue = paidOrders.reduce(
      (acc, order) => acc + order.totalPrice,
      0
    );

    const deliveredOrders = await Order.countDocuments({
      isDelivered: true,
    });

    const pendingOrders = await Order.countDocuments({
      isDelivered: false,
    });

    res.json({
      totalUsers,
      totalProducts,
      totalOrders,
      totalRevenue,
      deliveredOrders,
      pendingOrders,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};