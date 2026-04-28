const AuditLog = require("../models/AuditLog");

exports.log = (userId, action, metadata) => {
    return AuditLog.create({ userId, action, metadata });
};