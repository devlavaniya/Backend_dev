const SecurityLog = require("../models/SecurityLog");

exports.checkFraud = async (userId, amount) => {
    if (amount > 50000) {
        await SecurityLog.create({
            type: "FRAUD",
            userId,
            message: "High value transaction detected"
        });
        return true;
    }
    return false;
};