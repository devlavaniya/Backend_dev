const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    loginTimes: [Date],
    logoutTimes: [Date],
    lastActive: Date
});

// Middleware to update lastActive on every save
userSchema.pre('save', function(next) {
    this.lastActive = new Date();
    next();
});

const User = mongoose.model('User', userSchema);
module.exports = User;