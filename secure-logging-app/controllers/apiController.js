const Transaction = require("../models/Transaction");
const { log } = require("../services/auditService");
const { check } = require("../services/fraudService");
const { send } = require("../services/alertService");

exports.createTransaction = async (req, res) => {
    const { amount } = req.body;

    const txn = await Transaction.create({
        userId: "demoUser",
        amount
    });

    await log("demoUser", "TXN_CREATED", { amount });

    if (check(amount)) {
        await send("High value transaction");
    }

    res.json(txn);
};