const AuditLog = require("../models/AuditLog");

exports.logAction = async (userId, action, metadata) => {
    await AuditLog.create({ userId, action, metadata });
};