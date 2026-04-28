const { body, validationResult } = require("express-validator");

exports.validateTransaction = [
    body("amount")
        .isFloat({ gt: 0 })
        .withMessage("Amount must be greater than 0"),

    body("beneficiary")
        .trim()
        .escape()
        .notEmpty()
        .withMessage("Beneficiary required"),

    body("description")
        .optional()
        .trim()
        .escape(),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];