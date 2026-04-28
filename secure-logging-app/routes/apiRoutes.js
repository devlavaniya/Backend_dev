const router = require("express").Router();
const { createTransaction } = require("../controllers/apiController");

router.post("/transaction", createTransaction);

module.exports = router;