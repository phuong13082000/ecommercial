require("dotenv").config();
const mongoose = require("mongoose");

const url = process.env.MONGOOSE_URL;
const connect = mongoose.connect(url);

module.exports = {connect};