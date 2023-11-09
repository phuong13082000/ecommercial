const mongoose = require("mongoose");

const messageSchema = mongoose.Schema({
    user_id: String,
    name: String,
    email: String,
    number: String,
    message: String,
}, {
    versionKey: false, timestamps: true,
});

const MessageModel = mongoose.model("message", messageSchema);

module.exports = MessageModel;
