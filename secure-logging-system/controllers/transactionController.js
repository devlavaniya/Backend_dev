const Transaction = require("../models/Transaction");
const { logAction } = require("../services/auditService");
const { checkFraud } = require("../services/fraudService");
const { sendAlert } = require("../services/alertService");

exports.transfer = async (req, res) => {
    const { amount } = req.body;

    const txn = await Transaction.create({
        userId: req.user.id,
        amount,
        status: "PENDING"
    });

    // Audit trail
    await logAction(req.user.id, "TRANSACTION_CREATED", { amount });

    // Fraud detection
    const fraud = await checkFraud(req.user.id, amount);

    if (fraud) {
        await sendAlert(req.user.id, "Suspicious transaction");
    }

    res.json({ txn });
};