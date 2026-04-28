const { body, validationResult } = require("express-validator");

exports.validateProfileUpdate = [
    body("name").optional().trim().escape(),

    body("accountNumber")
        .optional()
        .isLength({ min: 8 })
        .withMessage("Invalid account number"),

    body("routingNumber")
        .optional()
        .isLength({ min: 5 })
        .withMessage("Invalid routing number"),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];