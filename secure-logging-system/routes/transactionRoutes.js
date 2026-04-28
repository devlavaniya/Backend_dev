const router = require("express").Router();
const { transfer } = require("../controllers/transactionController");

router.post("/transfer", transfer);

module.exports = router;