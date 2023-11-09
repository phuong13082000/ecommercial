const express = require("express");
const {loginAdmin, registerAdmin} = require("../controllers/adminController");
const adminRoute = express.Router();
adminRoute.use(express.json());

adminRoute.route('/login-admin').post(loginAdmin);
adminRoute.route('/register-admin').post(registerAdmin);

module.exports = adminRoute;