const User = require("../models/User");
const { encrypt, decrypt } = require("../utils/encryption");
const { mask } = require("../utils/mask");

// GET PROFILE (secure)
exports.getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);

        if (!user) return res.status(404).json({ message: "User not found" });

        res.json({
            name: user.name,
            email: user.email,
            accountNumber: mask(decrypt(user.accountNumber)),
            routingNumber: mask(decrypt(user.routingNumber))
        });

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// UPDATE PROFILE
exports.updateProfile = async (req, res) => {
    try {
        const updates = {};

        if (req.body.name) updates.name = req.body.name;

        if (req.body.accountNumber) {
            updates.accountNumber = encrypt(req.body.accountNumber);
        }

        if (req.body.routingNumber) {
            updates.routingNumber = encrypt(req.body.routingNumber);
        }

        await User.findByIdAndUpdate(req.user.id, updates);

        res.json({ message: "Profile updated securely" });

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};