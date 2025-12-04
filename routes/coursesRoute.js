const express = require('express');
const router = express.Router();
const coursesController = require("../controller/coursesController");


// Public Routes
router.get('/', coursesController.getAll);
router.get('/:id', coursesController.getSingle);

// Protected Routes
router.post('/', coursesController.postCourse);
router.put('/:id', coursesController.putCourse);
router.delete('/:id', coursesController.deleteCourse);

module.exports = router;