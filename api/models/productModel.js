const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name: String,
    details: String,
    price: String,
    category: String,
    images: [{
        public_id: String,
        url: String
    }],
}, {
    versionKey: false, timestamps: true,
});

const ProductModel = mongoose.model("product", productSchema);

module.exports = ProductModel;
