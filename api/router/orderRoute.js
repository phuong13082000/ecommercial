const express = require("express");
const adminAuth = require("../middleware/adminAuth");
const {createOrder, updateOrder, deleteOrder, getAllOrder, getAllOrderByUser} = require("../controllers/orderController");
const orderRouter = express.Router();
orderRouter.use(express.json());

orderRouter.route('/').get(getAllOrder);
orderRouter.route('/:id').get(getAllOrderByUser);
orderRouter.route('/create/:id').post(createOrder);
orderRouter.route('/update/:id').put(updateOrder);
orderRouter.route('/delete/:id').delete(deleteOrder);

module.exports = orderRouter;