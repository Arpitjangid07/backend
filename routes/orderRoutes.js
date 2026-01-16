const express = require("express");
const { createOrder, getOrders } = require("../controllers/orderController");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/order", auth, createOrder);
router.get("/orders", auth, getOrders);

module.exports = router;
