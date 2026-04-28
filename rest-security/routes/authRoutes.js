const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/authController");

router.post("/register", ctrl.register);
router.post("/login", ctrl.login);
router.post("/2fa", ctrl.enable2FA);

module.exports = router;