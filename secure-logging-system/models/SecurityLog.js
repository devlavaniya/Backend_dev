const mongoose = require("mongoose");

module.exports = mongoose.model("SecurityLog", new mongoose.Schema({
    type: String, // FAILED_LOGIN / FRAUD / ALERT
    userId: String,
    message: String
}, { timestamps: true }));