require("dotenv").config();
const jwt = require("jsonwebtoken");

const userAuth = (req, res, next) => {
    const token = req.headers.usertoken;

    if (token) {
        jwt.verify(token, process.env.PRIVATE_TOKEN_USER);
        next();
    } else {
        res.json("please login first!");
    }
}

module.exports = userAuth