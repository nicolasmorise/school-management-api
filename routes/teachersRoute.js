// Teachers Routes - samueldelacruz123
const express = require('express');
const router = express.Router();
const teachersController = require("../controller/teachersController");
const teacherValidation = require("../middleware/teachersValidation");
const handleValidation = require("../middleware/validation")

const ensureAuth = require('../middleware/ensureauth')

router.use(ensureAuth)
// Public Routes
router.get('/', teachersController.getAll);
/* #swagger.path = '/api/teachers'
   #swagger.tags = ['Teachers']
   #swagger.summary = 'Get all teachers'
   #swagger.description = 'Returns a list of all teachers'
   #swagger.responses[200] = { description: 'Array of teachers' }
   #swagger.responses[500] = { description: 'Internal server error' }
*/

// GET single teacher
router.get('/:id', teachersController.getSingle);
/* #swagger.path = '/api/teachers/{id}'
   #swagger.tags = ['Teachers']
   #swagger.summary = 'Get a teacher by ID'
   #swagger.description = 'Returns a single teacher based on the provided ID'
   #swagger.parameters['id'] = { description: 'Teacher ID', required: true, type: 'string' }
   #swagger.responses[200] = { description: 'Teacher object' }
   #swagger.responses[404] = { description: 'Teacher not found' }
   #swagger.responses[500] = { description: 'Internal server error' }
*/

// Protected Routes
router.post('/', teacherValidation.createTeacherValidation, handleValidation.handleValidationErrors, teachersController.postTeacher);
router.put('/:id', teacherValidation.updateTeacherValidation, handleValidation.handleValidationErrors ,teachersController.putTeacher);
router.delete('/:id', teachersController.deleteTeacher);
/* #swagger.path = '/api/teachers/{id}'
   #swagger.tags = ['Teachers']
   #swagger.summary = 'Delete a teacher by ID'
   #swagger.description = 'Deletes a teacher record'
   #swagger.parameters['id'] = { description: 'Teacher ID', required: true, type: 'string' }
   #swagger.responses[200] = { description: 'Teacher deleted successfully' }
   #swagger.responses[400] = { description: 'Bad request' }
   #swagger.responses[500] = { description: 'Internal server error' }
*/

module.exports = router;