const express = require('express');
const router = express.Router();
const teachersController = require("../controller/teachersController");
const teacherValidation = require("../middleware/teachersValidation");
const handleValidation = require("../middleware/validation")

const ensureAuth = require('../middleware/ensureauth')

router.use(ensureAuth)
// Public Routes
router.get('/', teachersController.getAll);
router.get('/:id', teachersController.getSingle);

// Protected Routes
router.post('/', teacherValidation.createTeacherValidation, handleValidation.handleValidationErrors, teachersController.postTeacher);
router.put('/:id', teacherValidation.updateTeacherValidation, handleValidation.handleValidationErrors ,teachersController.putTeacher);
router.delete('/:id', teachersController.deleteTeacher);

module.exports = router;