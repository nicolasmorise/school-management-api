const express = require('express');
const router = express.Router();
const coursesController = require("../controller/coursesController");
const courseValidation = require('../middleware/coursesValidation');
const handleValidation = require('../middleware/validation');

const ensureAuth = require('../middleware/ensureauth')

router.use(ensureAuth)

// Public Routes
router.get('/', coursesController.getAll);
router.get('/:id', coursesController.getSingle);

// Protected Routes
router.post('/', courseValidation.createCourseValidation, handleValidation.handleValidationErrors,coursesController.postCourse);
router.put('/:id', courseValidation.updateCourseValidation, handleValidation.handleValidationErrors,coursesController.putCourse);
router.delete('/:id', coursesController.deleteCourse);

module.exports = router;