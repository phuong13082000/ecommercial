require("dotenv").config();
const jwt = require("jsonwebtoken");

const adminAuth = (req, res, next) => {
    const token = req.headers.admintoken;

    if (token) {
        const decoded = jwt.verify(token, process.env.PRIVATE_TOKEN_ADMIN);
        decoded ? next() : res.json("please login first!");
    } else {
        res.json("please login first!");
    }
}

module.exports = adminAuth;