//Students Routes - samueldelacruz123
const express = require('express');
const router = express.Router();
const studentsController = require('../controller/studentsController');
const studentsValidation = require('../middleware/studentsValidation');
const handleValidation = require('../middleware/validation');

const ensureAuth = require('../middleware/ensureauth')

router.use(ensureAuth)
// #swagger.tags = ['Students']
// #swagger.summary = 'Get all students'
// #swagger.description = 'Returns a list of all students'
router.get('/', studentsController.getAllStudent);

// #swagger.tags = ['Students']
// #swagger.summary = 'Get a student by ID'
// #swagger.description = 'Returns a single student based on the provided ID'
// #swagger.parameters['id'] = { description: 'Student ID' }
router.get('/:id', studentsController.getSingleStudent);

// #swagger.tags = ['Students']
// #swagger.summary = 'Create a new student'
// #swagger.description = 'Creates a new student record'
router.post('/', studentsValidation.createStudentValidation, handleValidation.handleValidationErrors ,studentsController.createStudent);

// #swagger.tags = ['Students']
// #swagger.summary = 'Update a student by ID'
// #swagger.parameters['id'] = { description: 'Student ID' }
router.put('/:id', studentsValidation.updateStudentValidation, handleValidation.handleValidationErrors , studentsController.updateStudent);

// #swagger.tags = ['Students']
// #swagger.summary = 'Delete a student'
// #swagger.parameters['id'] = { description: 'Student ID' }
router.delete('/:id', studentsController.deleteStudent);

module.exports = router;