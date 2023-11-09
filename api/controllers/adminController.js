const AdminModel = require("../models/adminModel");
const { generateJWTokenAdmin } = require("../config/webToken");

exports.loginAdmin = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) return res.send({ msg: "specify the required fields" });

    try {
        const admin = await AdminModel.findOne({ email }).select("+password");
        if (admin) {
            const isPasswordMatch = await admin.matchPassword(password);
            if (isPasswordMatch) {
                res.send({
                    msg: "login successfully",
                    token: generateJWTokenAdmin(admin._id),
                    admin: admin
                });
            } else {
                res.send({ msg: "invalid email or password" });
            }
        }
    } catch (err) {
        console.log(err);
    }
}

exports.registerAdmin = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) return res.send({ msg: "specify the required fields" });

    try {
        const admin = await AdminModel.findOne({ email: email });
        if (admin) return res.send({ msg: "gmail already exist!" })

        const newAdmin = await AdminModel.create({ email, password });
        const token = generateJWTokenAdmin(newAdmin._id);

        res.send({
            msg: "signup successfully",
            token: token,
            _id: newAdmin._id,
            email: newAdmin.email
        });
    } catch (err) {
        console.log(err);
    }
}
