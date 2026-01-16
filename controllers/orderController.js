const Order = require("../models/Order");

// CREATE ORDER
exports.createOrder = async (req, res) => {
  try {
    const { product_name, quantity } = req.body;

    const order = await Order.create({
      product_name,
      quantity,
      user: req.user.id
    });

    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET USER ORDERS
exports.getOrders = async (req, res) => {
  const orders = await Order.find({ user: req.user.id });
  res.json(orders);
};
