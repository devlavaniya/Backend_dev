const express = require("express");
const router = express.Router();

const {
    getProfile,
    updateProfile
} = require("../controllers/accountController");

const auth = require("../middlewares/authMiddleware");
const sanitize = require("../middlewares/sanitizeMiddleware");
const { validateProfileUpdate } = require("../middlewares/validateMiddleware");

router.get("/me", auth, getProfile);

router.put(
    "/me",
    auth,
    sanitize,
    validateProfileUpdate,
    updateProfile
);

module.exports = router;