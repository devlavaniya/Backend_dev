const express = require('express');
const router = express.Router();
const mfa = require('../middleware/mfa');

router.get('/sensitive', mfa, (req, res) => {
    res.send(`Welcome ${req.user.name}, you passed MFA`);
});

module.exports = router;