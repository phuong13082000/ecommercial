const express = require("express");
const adminAuth = require("../middleware/adminAuth");
const {
    getAllProduct,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
} = require("../controllers/productController");
const productRouter = express.Router()
productRouter.use(express.json());

productRouter.route('/').get(getAllProduct);
productRouter.route('/:id').get(getProductById);
productRouter.route('/create').post(createProduct);
productRouter.route('/update/:id').put(updateProduct);
productRouter.route('/delete/:id').delete(deleteProduct);

module.exports = productRouter
