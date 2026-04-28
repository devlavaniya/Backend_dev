const Transaction = require("../models/Transaction");

exports.createTransaction = async (req, res) => {
    const { amount, description } = req.body;

    if (amount <= 0) return res.status(400).json({ msg: "Invalid amount" });

    // 2FA condition
    if (amount > 1000) {
        return res.status(403).json({ msg: "2FA required" });
    }

    const txn = await Transaction.create({
        userId: req.user.id,
        amount,
        description
    });

    res.json(txn);
};