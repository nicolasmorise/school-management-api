// Teachers Routes - samueldelacruz123
const express = require('express');
const router = express.Router();
const teachersController = require('../controller/teachersController');

// GET all teachers
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

// POST create teacher
router.post('/', teachersController.postTeacher);
/* #swagger.path = '/api/teachers'
   #swagger.tags = ['Teachers']
   #swagger.summary = 'Create a new teacher'
   #swagger.description = 'Creates a new teacher record'
   #swagger.parameters['teacher'] = {
        in: 'body',
        description: 'Teacher information to create',
        required: true,
        schema: { $ref: '#/definitions/Teacher' }
   }
   #swagger.responses[201] = { description: 'Teacher created successfully' }
   #swagger.responses[500] = { description: 'Internal server error' }
*/

// PUT update teacher
router.put('/:id', teachersController.putTeacher);
/* #swagger.path = '/api/teachers/{id}'
   #swagger.tags = ['Teachers']
   #swagger.summary = 'Update a teacher by ID'
   #swagger.description = 'Updates an existing teacher record'
   #swagger.parameters['id'] = { description: 'Teacher ID', required: true, type: 'string' }
   #swagger.parameters['teacher'] = {
        in: 'body',
        description: 'Updated teacher information',
        required: true,
        schema: { $ref: '#/definitions/Teacher' }
   }
   #swagger.responses[200] = { description: 'Teacher updated successfully' }
   #swagger.responses[400] = { description: 'Bad request' }
   #swagger.responses[500] = { description: 'Internal server error' }
*/

// DELETE teacher
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