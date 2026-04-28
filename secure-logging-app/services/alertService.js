const SecurityLog = require("../models/SecurityLog");

exports.send = (message) => {
    return SecurityLog.create({ type: "ALERT", message });
};