const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const adminSchema = mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role:{type:String, default:"Admin"}
}, {
    versionKey: false, timestamps: true,
});

adminSchema.methods.matchPassword = async function (pass) {
    return await bcrypt.compare(pass, this.password);
}

adminSchema.pre("save", async function (next) {
    if (!this.isModified) next();

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

const AdminModel = mongoose.model("admin", adminSchema);

module.exports = AdminModel;
