const Transaction = require("../models/Transaction");
const { checkTransactionLimit } = require("../utils/validators");

exports.createTransaction = async (req, res) => {
    try {
        const { amount, beneficiary, description } = req.body;

        // Server-side validation
        if (!checkTransactionLimit(amount)) {
            return res.status(400).json({
                message: "Transaction exceeds limit"
            });
        }

        const transaction = await Transaction.create({
            userId: req.user.id,
            amount,
            beneficiary,
            description
        });

        res.json({
            message: "Transaction initiated. Await confirmation.",
            transaction
        });

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.confirmTransaction = async (req, res) => {
    try {
        const { id } = req.params;

        const transaction = await Transaction.findById(id);

        if (!transaction) {
            return res.status(404).json({ message: "Not found" });
        }

        if (transaction.userId !== req.user.id) {
            return res.status(403).json({ message: "Forbidden" });
        }

        transaction.status = "COMPLETED";
        await transaction.save();

        res.json({
            message: "Transaction confirmed",
            transaction
        });

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};