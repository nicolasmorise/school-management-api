// validators/staffValidators.js
const { body } = require("express-validator");

exports.createStaffValidation = [
    body("firstName").notEmpty().isString(),
    body("lastName").notEmpty().isString(),
    body("email").isEmail(),
    body("phone").optional().isString(),
    body("role").notEmpty().isString(),
    body("department").notEmpty().isString(),
    body("hireDate").optional().isISO8601().withMessage("hireDate must be a valid date"),
    body("status").isString().notEmpty(),
];

exports.updateStaffValidation = [
    body("firstName").optional().isString(),
    body("lastName").optional().isString(),
    body("email").optional().isEmail(),
    body("phone").optional().isString(),
    body("role").optional().isString(),
    body("department").optional().isString(),
    body("hireDate").optional().isISO8601(),
    body("status").optional().isString(),
];
