require("dotenv").config();
const jsonwebtoken = require("jsonwebtoken");

const generateJWTokenUser = id => jsonwebtoken.sign({id}, process.env.PRIVATE_TOKEN_USER, {expiresIn: "10d"});

const generateJWTokenAdmin = id => jsonwebtoken.sign({id}, process.env.PRIVATE_TOKEN_ADMIN, {expiresIn: "10d"});

module.exports = {generateJWTokenUser, generateJWTokenAdmin};