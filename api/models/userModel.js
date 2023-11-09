const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    mobile: String,
    wishlist: Array,
    cartItem: Array,
    role: {
        type: String,
        default: "User"
    }
}, {
    versionKey: false,
    timestamps: true
});

userSchema.methods.matchPassword = async function (pass) {
    return await bcrypt.compare(pass, this.password);
}

userSchema.pre("save", async function (next) {
    if (!this.isModified) next();

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;