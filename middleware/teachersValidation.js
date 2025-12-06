// validators/teachersValidators.js
const { body } = require("express-validator");

exports.createTeacherValidation = [
    body("firstName").notEmpty().isString(),
    body("lastName").notEmpty().isString(),
    body("email").isEmail(),
    body("department").notEmpty().isString(),
    body("phone").optional().isString(),
    body("hireDate").optional().isISO8601(),
    body("salary").optional().isNumeric(),
];

exports.updateTeacherValidation = [
    body("firstName").optional().isString(),
    body("lastName").optional().isString(),
    body("email").optional().isEmail(),
    body("department").optional().isString(),
    body("phone").optional().isString(),
    body("hireDate").optional().isISO8601(),
    body("salary").optional().isNumeric(),
];
