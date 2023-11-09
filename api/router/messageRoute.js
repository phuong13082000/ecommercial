const express = require("express");
const adminAuth = require("../middleware/adminAuth");
const {
    getAllMessage,
    getAllMessageByUser,
    createMessage,
    updateMessage,
    deleteMessage
} = require("../controllers/messageController");
const messageRoute = express.Router()
messageRoute.use(express.json());

messageRoute.route('/').get(getAllMessage);
messageRoute.route('/:id').get(getAllMessageByUser);
messageRoute.route('/create/:id').post(createMessage);
messageRoute.route('/update/:id').put(updateMessage);
messageRoute.route('/delete/:id').delete(deleteMessage);

module.exports = messageRoute