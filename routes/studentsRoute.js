// Students Routes - samueldelacruz123
const express = require('express');
const router = express.Router();
const studentsController = require('../controller/studentsController');

// GET all students
router.get('/', studentsController.getAllStudent);
/* #swagger.path = '/api/students'
   #swagger.tags = ['Students']
   #swagger.summary = 'Get all students'
   #swagger.description = 'Returns a list of all students'
   #swagger.responses[200] = { description: 'Array of students' }
   #swagger.responses[500] = { description: 'Internal server error' }
*/

// GET single student
router.get('/:id', studentsController.getSingleStudent);
/* #swagger.path = '/api/students/{id}'
   #swagger.tags = ['Students']
   #swagger.summary = 'Get a student by ID'
   #swagger.description = 'Returns a single student based on the provided ID'
   #swagger.parameters['id'] = { description: 'Student ID', required: true, type: 'string' }
   #swagger.responses[200] = { description: 'Student object' }
   #swagger.responses[404] = { description: 'Student not found' }
   #swagger.responses[500] = { description: 'Internal server error' }
*/

// POST create student
router.post('/', studentsController.createStudent);
/* #swagger.path = '/api/students'
   #swagger.tags = ['Students']
   #swagger.summary = 'Create a new student'
   #swagger.description = 'Creates a new student record'
   #swagger.parameters['student'] = {
        in: 'body',
        description: 'Student information to create',
        required: true,
        schema: { $ref: '#/definitions/Student' }
   }
   #swagger.responses[201] = { description: 'Student created successfully' }
   #swagger.responses[500] = { description: 'Internal server error' }
*/

// PUT update student
router.put('/:id', studentsController.updateStudent);
/* #swagger.path = '/api/students/{id}'
   #swagger.tags = ['Students']
   #swagger.summary = 'Update a student by ID'
   #swagger.description = 'Updates an existing student record'
   #swagger.parameters['id'] = { description: 'Student ID', required: true, type: 'string' }
   #swagger.parameters['student'] = {
        in: 'body',
        description: 'Updated student information',
        required: true,
        schema: { $ref: '#/definitions/Student' }
   }
   #swagger.responses[200] = { description: 'Student updated successfully' }
   #swagger.responses[400] = { description: 'Bad request' }
   #swagger.responses[500] = { description: 'Internal server error' }
*/

// DELETE student
router.delete('/:id', studentsController.deleteStudent);
/* #swagger.path = '/api/students/{id}'
   #swagger.tags = ['Students']
   #swagger.summary = 'Delete a student by ID'
   #swagger.description = 'Deletes a student record'
   #swagger.parameters['id'] = { description: 'Student ID', required: true, type: 'string' }
   #swagger.responses[200] = { description: 'Student deleted successfully' }
   #swagger.responses[400] = { description: 'Bad request' }
   #swagger.responses[500] = { description: 'Internal server error' }
*/

module.exports = router;