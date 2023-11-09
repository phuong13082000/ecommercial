const OrderModel = require("../models/orderModel");
const UserModel = require("../models/userModel");

exports.getAllOrder = async (req, res) => {
    try {
        const totalOrder = await OrderModel.countDocuments();
        const getOrders = await OrderModel.find();

        res.send({
            orders: getOrders,
            totalOrder: totalOrder
        });
    } catch (err) {
        res.send({ msg: "error: " + err });
    }
}

exports.getAllOrderByUser = async (req, res) => {
    const idUser = req.params.id;

    try {
        const totalOrder = await OrderModel.countDocuments();
        const getOrderById = await OrderModel.find({ user_id: idUser });

        res.send({
            orders: getOrderById,
            totalOrder: totalOrder
        });
    } catch (err) {
        res.send({ msg: "error: " + err });
    }
}

exports.createOrder = async (req, res) => {
    const userId = req.params.id;
    const user = await UserModel.findOne({ _id: userId });

    try {
        if (!user) return res.send({ msg: "login first!" });

        await UserModel.findByIdAndUpdate({ _id: userId }, { cartItem: [] });

        await OrderModel.create({
            user_id: userId,
            name: req.body.name || user.name,
            email: req.body.email || user.email,
            method: req.body.method,
            address: req.body.address,
            total_products: req.body.total_products,
            total_price: req.body.total_price,
            placed_on: Date.now(),
            payment_status: req.body.payment_status
        });

        res.send({ msg: "create successfully" });
    } catch (err) {
        res.send({ msg: "error: " + err });
    }
}

exports.updateOrder = async (req, res) => {
    const id = req.params.id;

    try {
        await OrderModel.findByIdAndUpdate({ _id: id }, {
            user_id: req.body.user_id,
            name: req.body.name,
            email: req.body.email,
            method: req.body.method,
            address: req.body.address,
            total_products: req.body.total_products,
            total_price: req.body.total_price,
            placed_on: Date.now(),
            payment_status: req.body.payment_status
        });

        res.send({ msg: "update successfully" });
    } catch (err) {
        res.send({ msg: "error: " + err });
    }
}

exports.deleteOrder = async (req, res) => {
    const id = req.params.id;

    try {
        await OrderModel.findByIdAndDelete({ _id: id });

        res.send({ msg: "delete successfully" });
    } catch (err) {
        res.send({ msg: "error: " + err });
    }
}
