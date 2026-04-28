const mongoose = require("mongoose");

module.exports = mongoose.model("Transaction", new mongoose.Schema({
    userId: String,
    amount: Number,
    status: String
}, { timestamps: true }));