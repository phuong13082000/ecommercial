const express = require("express");
const adminAuth = require("../middleware/adminAuth");
const {
    loginUser,
    registerUser,
    getAllUser,
    getOneUser,
    updateUser,
    deleteUser,
    createWishlist,
    deleteWishlist,
    deleteAllWishlist,
    createCart,
    deleteCart,
    deleteAllCart,
} = require("../controllers/userController");
const userRouter = express.Router()
userRouter.use(express.json());

userRouter.route('/login').post(loginUser);
userRouter.route('/register').post(registerUser);
userRouter.route('/get-all').get(getAllUser);
userRouter.route('/:id').get(getOneUser);
userRouter.route('/update/:id').put(updateUser);
userRouter.route('/delete/:id').delete(deleteUser);

userRouter.route('/wishlist/create/:id').post(createWishlist);
userRouter.route('/wishlist/delete/:id').put(deleteWishlist);
userRouter.route('/wishlist/delete-all/:id').delete(deleteAllWishlist);

userRouter.route('/cart/create/:id').post(createCart);
userRouter.route('/cart/delete/:id').put(deleteCart);
userRouter.route('/cart/delete-all/:id').delete(deleteAllCart);

module.exports = userRouter
