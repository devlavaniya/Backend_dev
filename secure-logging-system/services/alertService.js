const SecurityLog = require("../models/SecurityLog");

exports.sendAlert = async (userId, message) => {
    await SecurityLog.create({
        type: "ALERT",
        userId,
        message
    });
};