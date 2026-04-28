const mongoose = require("mongoose");

module.exports = mongoose.model("AuditLog", new mongoose.Schema({
    userId: String,
    action: String,
    metadata: Object
}, { timestamps: true }));