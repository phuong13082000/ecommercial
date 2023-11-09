require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cloudinary = require('cloudinary');

const app = express();
const {connect} = require("./config/database");
const PORT = process.env.PORT;

const adminRoute = require("./router/adminRoute");
const userRoute = require("./router/userRoute");
const productRoute = require("./router/productRoute");
const orderRoute = require("./router/orderRoute");
const messageRoute = require("./router/messageRoute");

app.use(cors());
app.use(express.json());

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.get('/', (req, res) => res.json(`welcome!`));
// app.use("/images", express.static("./images"));

app.use("/admin", adminRoute);
app.use("/user", userRoute);
app.use("/product", productRoute);
app.use("/order", orderRoute);
app.use("/message", messageRoute);

app.listen(PORT, async () => {
    try {
        await connect;
        console.log(`http://localhost:${PORT}`);
    } catch (error) {
        console.log(`The port is running on ${PORT}`);
    }
});