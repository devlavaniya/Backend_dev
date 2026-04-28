const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    beneficiary: { type: String, required: true },
    amount: { type: Number, required: true },
    description: { type: String },
    status: {
        type: String,
        enum: ["PENDING", "COMPLETED"],
        default: "PENDING"
    }
}, { timestamps: true });

module.exports = mongoose.model("Transaction", transactionSchema);