const MessageModel = require("../models/messageModel");

exports.getAllMessage = async (req, res) => {
    try {
        const totalMessage = await MessageModel.countDocuments();
        const messages = await MessageModel.find();

        res.send({
            messages: messages,
            totalMessage: totalMessage
        })
    } catch (err) {
        res.send({error: err.message})
    }
}

exports.getAllMessageByUser = async (req, res) => {
    const userId = req.params.id;

    try {
        const messages = await MessageModel.find({user_id: userId})

        res.send({message: messages});
    } catch (err) {
        res.send({error: err.message})
    }
}

exports.createMessage = async (req, res) => {
    const userId = req.params.id;

    try {
        await MessageModel.create({
            user_id: userId,
            name: req.body.name,
            email: req.body.email,
            number: req.body.number,
            message: req.body.message,
        })

        res.send({msg: "create successfully"})
    } catch (err) {
        res.send({error: err.message})
    }
}

exports.updateMessage = async (req, res) => {
    const id = req.params.id;

    try {
        await MessageModel.findByIdAndUpdate({_id: id}, {
            user_id: req.body.user_id,
            name: req.body.name,
            email: req.body.email,
            number: req.body.number,
            message: req.body.message,
        })

        res.send({msg: "update successfully"})
    } catch (err) {
        res.send({error: err.message})
    }
}

exports.deleteMessage = async (req, res) => {
    const id = req.params.id;

    try {
        await MessageModel.findByIdAndDelete({_id: id})

        res.send({msg: "delete successfully"})
    } catch (err) {
        res.send({error: err.message})
    }
}