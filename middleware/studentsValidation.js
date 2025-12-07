// validators/studentsValidators.js
const { body } = require("express-validator");

exports.createStudentValidation = [
    body("firstName").notEmpty().isString(),
    body("lastName").notEmpty().isString(),
    body("age").isNumeric().withMessage("Age must be a number"),
    body("grade").isString().notEmpty(),
    body("email").isEmail(),
    body("enrolled").isBoolean(),
    body("gpa").optional().isFloat({ min: 0.0, max: 4.0 }),
    body("homeroomTeacher").optional().isString(),
];

exports.updateStudentValidation = [
    body("firstName").optional().isString(),
    body("lastName").optional().isString(),
    body("age").optional().isNumeric(),
    body("grade").optional().isString(),
    body("email").optional().isEmail(),
    body("enrolled").optional().isBoolean(),
    body("gpa").optional().isFloat({ min: 0.0, max: 4.0 }),
    body("homeroomTeacher").optional().isString(),
];
