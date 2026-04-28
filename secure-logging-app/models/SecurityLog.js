const mongoose = require("mongoose");

module.exports = mongoose.model("SecurityLog", new mongoose.Schema({
    type: String,
    message: String
}, { timestamps: true }));