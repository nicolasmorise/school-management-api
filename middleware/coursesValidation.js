// validators/coursesValidators.js
const { body } = require("express-validator");

exports.createCourseValidation = [
    body("name").isString().notEmpty().withMessage("Course name is required"),
    body("code").isString().notEmpty().withMessage("Course code is required"),
    body("description").optional().isString(),
    body("credits").isNumeric().withMessage("Credits must be a number"),
    body("department").isString().notEmpty().withMessage("Department is required"),
];

exports.updateCourseValidation = [
    body("name").optional().isString(),
    body("code").optional().isString(),
    body("description").optional().isString(),
    body("credits").optional().isNumeric(),
    body("department").optional().isString(),
];
