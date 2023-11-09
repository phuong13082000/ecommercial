const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
    user_id: String,
    name: String,
    number: String,
    email: String,
    method: String,
    address: String,
    total_products: String,
    total_price: String,
    placed_on: {type: Date, default: Date.now()},
    payment_status: {type: String, default: 'pending'},
}, {
    versionKey: false, timestamps: true,
});

const OrderModel = mongoose.model("order", orderSchema);

module.exports = OrderModel;
