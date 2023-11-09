const UserModel = require("../models/userModel");
const { generateJWTokenAdmin } = require("../config/webToken");

exports.loginUser = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) return res.send({ msg: "specify the required fields" });

    const user = await UserModel.findOne({ email }).select("+password");

    if (user && await user.matchPassword(password)) {
        res.send({
            msg: "login successfully",
            token: generateJWTokenAdmin(user._id),
            user: user
        });
    }

    return res.send({ msg: "invalid email or password" });
}

exports.registerUser = async (req, res) => {
    const { email, password, name } = req.body;
    if (!email || !password) return res.send({ msg: "specify the required fields" });

    const user = await UserModel.findOne({ email: email });
    if (user) {
        return res.send({ msg: "gmail already exist!" })
    }

    const newUser = await UserModel.create({ email, password, name });
    const token = generateJWTokenAdmin(newUser._id);

    return res.send({
        msg: "signup successfully",
        token: token,
        _id: newUser._id,
        email: newUser.email,
        name: newUser.name
    });
}

exports.getAllUser = async (req, res) => {
    try {
        const totalUser = await UserModel.countDocuments();
        const users = await UserModel.find();

        res.send({
            users: users,
            totalUser: totalUser
        });
    } catch (err) {
        console.log(err)
    }
}

exports.getOneUser = async (req, res) => {
    const id = req.params.id;
    if (!id) return res.send({ msg: "login first" });

    try {
        const user = await UserModel.findById({ _id: id });
        res.send({ user: user });
    } catch (err) {
        console.log(err)
    }
}

exports.updateUser = async (req, res) => {
    const id = req.params.id;
    const payload = req.body;

    try {
        const user = await UserModel.findById({ _id: id });

        if (user) {
            await UserModel.findByIdAndUpdate({ _id: id }, payload);
            res.send({ msg: "update successfully" });
        }
    } catch (err) {
        res.send({ msg: "wrong update" });
    }
}

exports.deleteUser = async (req, res) => {
    const id = req.params.id;

    try {
        await UserModel.findByIdAndDelete({ _id: id });
        res.send({ msg: "delete successfully" });
    } catch (err) {
        res.send({ msg: "wrong delete" });
    }
}

exports.createWishlist = async (req, res) => {
    const userId = req.params.id;

    try {
        const user = await UserModel.findById(userId);

        const isAlreadyAdded = user.wishlist.some((p) => p.name === req.body.name);

        if (isAlreadyAdded) {
            return res.send({ msg: "exist" });
        }

        const updatedWishlist = [...user.wishlist, req.body];

        await UserModel.findByIdAndUpdate(userId, { wishlist: updatedWishlist });

        res.send({ msg: "create successfully" });
    } catch (err) {
        console.log(err)
    }
}

exports.deleteWishlist = async (req, res) => {
    const userId = req.params.id;
    const productId = req.body.productId;

    try {
        await UserModel.findByIdAndUpdate(
            { _id: userId },
            { $pull: { wishlist: { product_id: productId } } },
            { new: true }
        ).then(() => res.send({ msg: "delete successfully" }));

    } catch (err) {
        console.log(err)
    }
}

exports.deleteAllWishlist = async (req, res) => {
    const userId = req.params.id;

    try {
        await UserModel.findByIdAndUpdate({ _id: userId }, { wishlist: [] });
        res.send({ msg: "delete successfully" });
    } catch (err) {
        console.log(err)
    }
}

exports.createCart = async (req, res) => {
    const userId = req.params.id;

    try {
        const user = await UserModel.findById(userId);

        const isAlreadyAdded = user.cartItem.some((p) => p.name === req.body.name);

        if (isAlreadyAdded) {
            return res.send({ msg: "exist" });
        }

        const updatedCart = [...user.cartItem, req.body];

        await UserModel.findByIdAndUpdate({ _id: userId }, { cartItem: updatedCart });
        res.send({ msg: "create successfully" });
    } catch (err) {
        console.log(err)
    }
}

exports.deleteCart = async (req, res) => {
    const userId = req.params.id;
    const productId = req.body.productId;

    try {
        await UserModel.findByIdAndUpdate(
            { _id: userId },
            { $pull: { cartItem: { product_id: productId } } },
            { new: true }
        ).then(() => res.send({ msg: "delete successfully" }));

    } catch (err) {
        console.log(err)
    }
}

exports.deleteAllCart = async (req, res) => {
    const userId = req.params.id;

    try {
        await UserModel.findByIdAndUpdate({ _id: userId }, { cartItem: [] });
        res.send({ msg: "delete successfully" });
    } catch (err) {
        console.log(err)
    }
}
