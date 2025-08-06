const { ROLES } = require("../utils/constants.js");
const Order = require("../models/Order.js");
const User = require("../models/User.js");

const getOrdersByUserId = async (req, res) => {
  const userId = req.id;

  try {
    const orders = await Order.find({ userId }).populate({
      path: "products.id",
      select: "name price category images",
    });

    if (!orders) {
      return res.status(500).json({
        success: false,
        message: "No Orders To Show",
      });
    }

    return res.status(200).json({
      success: true,
      data: orders,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

const getAllOrders = async (req, res) => {
  if (req.role !== ROLES.admin) {
    return res.status(403).json({
      success: false,
      message: "You are not authorized to access this resource",
    });
  }

  const { page, limit } = req.query;
  try {
    const orders = await Order.find()
      .populate({
        path: "products.id",
        select: "name price category images",
      })
      .populate({
        path: "userId",
        select: "name email",
      })
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .sort({ createdAt: -1 });

    if (!orders) {
      return res.status(404).json({
        success: false,
        message: "No Orders To Show",
      });
    }

    const count = await Order.countDocuments();

    return res.status(200).json({
      success: true,
      data: orders,
      totalPages: Math.ceil(count / limit),
      currentPage: Number(page),
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

const updateOrderStatus = async (req, res) => {
  if (req.role !== ROLES.admin) {
    return res.status(403).json({
      success: false,
      message: "You are not authorized to access this resource",
    });
  }

  const { paymentId } = req.params;
  const { status } = req.body;
  try {
    const order = await Order.findOneAndUpdate(
      {
        razorpayPaymentId: paymentId,
      },
      {
        status,
      },
      {
        new: true,
      }
    );

    if (!order)
      return res
        .status(404)
        .json({ success: false, message: "Order not found" });
    return res
      .status(200)
      .json({ success: true, data: order, message: "Order status updated" });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

const getMetrics = async (req, res) => {
  // admin hi esko access kar sakata hai
  if (req.role !== ROLES.admin) {
    return res.status(403).json({
      success: false,
      message: "You are not authorized to access this resource",
    });
  }

  const { startDate, endDate } = req.query;
  try {
    const start = new Date(
      startDate || new Date().setMonth(new Date().getMonth() - 1)
    );

    const end = new Date(endDate || new Date());

    const ordersInRange = await Order.find({
      createdAt: { $gte: start, $lt: end },
    });

    // Calculate total sales
    const totalSales = ordersInRange.reduce(
      (acc, order) => acc + order.amount,
      0
    );

    // cal this month's orders
    const thisMonthOrders = ordersInRange;

    // get the last month
    const lastMonth = new Date(new Date().setMonth(new Date().getMonth() - 1));

    // cal last moths's orders

    const lastMonthOrders = await Order.find({
      createdAt: { $gte: lastMonth, $lt: start },
    });

    // cal the total amt of this month orders

    const totalThisMonth = thisMonthOrders.reduce(
      (acc, order) => acc + order.amount,
      0
    );

    // cal total amt of the last months's order
    const totalLastMonth = lastMonthOrders.reduce(
      (acc, order) => acc + order.amount,
      0
    );

    // cal growth
    const salesGrowth = totalLastMonth
      ? ((totalThisMonth - totalLastMonth) / totalLastMonth) * 100
      : 0;

    // cal user
    const thisMonthUsers = await User.find({
      createdAt: { $gte: start, $lte: end },
    });

    const lastMonthUser = await User.find({
      createdAt: { $gte: lastMonth, $lt: start },
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
