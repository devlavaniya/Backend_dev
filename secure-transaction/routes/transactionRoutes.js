const express = require("express");
const router = express.Router();

const {
    createTransaction,
    confirmTransaction
} = require("../controllers/transactionController");

const auth = require("../middlewares/authMiddleware");
const limiter = require("../middlewares/rateLimiter");
const sanitize = require("../middlewares/sanitizeMiddleware");
const { validateTransaction } = require("../middlewares/validateMiddleware");

router.post(
    "/transfer",
    auth,
    limiter,
    sanitize,
    validateTransaction,
    createTransaction
);

router.post(
    "/confirm/:id",
    auth,
    confirmTransaction
);

module.exports = router;