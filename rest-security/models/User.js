const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    is2FAEnabled: Boolean,
    twoFASecret: String,
    failedAttempts: { type: Number, default: 0 }
});

module.exports = mongoose.model("User", userSchema);