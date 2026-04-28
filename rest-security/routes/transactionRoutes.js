const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/transactionController");
const auth = require("../middleware/authMiddleware");

router.post("/", auth, ctrl.createTransaction);

module.exports = router;