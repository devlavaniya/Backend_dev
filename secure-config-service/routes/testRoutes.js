const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    req.session.user = "secureUser";
    res.json({ message: "Session stored securely" });
});

router.get("/check", (req, res) => {
    res.json({ session: req.session.user || "No session" });
});

module.exports = router;