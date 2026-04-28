const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const SecurityLog = require("../models/SecurityLog");

exports.login = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user || !(await bcrypt.compare(password, user.password))) {
        if (user) {
            user.failedAttempts++;
            await user.save();

            await SecurityLog.create({
                type: "FAILED_LOGIN",
                userId: user._id,
                message: "Invalid login attempt"
            });
        }

        return res.status(401).json({ message: "Invalid credentials" });
    }

    user.failedAttempts = 0;
    await user.save();

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    res.json({ token });
};