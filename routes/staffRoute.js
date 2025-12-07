// Staff Routes - samueldelacruz123
const express = require('express');
const router = express.Router();
const staffController = require('../controller/staffController');

// GET all staff
router.get('/', staffController.getAll);
/* #swagger.path = '/api/staff'
   #swagger.tags = ['Staff']
   #swagger.summary = 'Get all staff members'
   #swagger.description = 'Returns a list of all staff members'
   #swagger.responses[200] = { description: 'Array of staff members' }
   #swagger.responses[500] = { description: 'Internal server error' }
*/

// GET single staff member
router.get('/:id', staffController.getSingle);
/* #swagger.path = '/api/staff/{id}'
   #swagger.tags = ['Staff']
   #swagger.summary = 'Get a staff member by ID'
   #swagger.description = 'Returns a single staff member based on the provided ID'
   #swagger.parameters['id'] = { description: 'Staff ID', required: true, type: 'string' }
   #swagger.responses[200] = { description: 'Staff object' }
   #swagger.responses[404] = { description: 'Staff member not found' }
   #swagger.responses[500] = { description: 'Internal server error' }
*/

// POST create staff
router.post('/', staffController.postStaff);
/* #swagger.path = '/api/staff'
   #swagger.tags = ['Staff']
   #swagger.summary = 'Create a new staff member'
   #swagger.description = 'Creates a new staff record'
   #swagger.parameters['staff'] = {
        in: 'body',
        description: 'Staff information to create',
        required: true,
        schema: { $ref: '#/definitions/Staff' }
   }
   #swagger.responses[201] = { description: 'Staff created successfully' }
   #swagger.responses[500] = { description: 'Internal server error' }
*/

// PUT update staff
router.put('/:id', staffController.putStaff);
/* #swagger.path = '/api/staff/{id}'
   #swagger.tags = ['Staff']
   #swagger.summary = 'Update a staff member by ID'
   #swagger.description = 'Updates an existing staff record'
   #swagger.parameters['id'] = { description: 'Staff ID', required: true, type: 'string' }
   #swagger.parameters['staff'] = {
        in: 'body',
        description: 'Updated staff information',
        required: true,
        schema: { $ref: '#/definitions/Staff' }
   }
   #swagger.responses[200] = { description: 'Staff updated successfully' }
   #swagger.responses[400] = { description: 'Bad request' }
   #swagger.responses[500] = { description: 'Internal server error' }
*/

// DELETE staff member
router.delete('/:id', staffController.deleteStaff);
/* #swagger.path = '/api/staff/{id}'
   #swagger.tags = ['Staff']
   #swagger.summary = 'Delete a staff member by ID'
   #swagger.description = 'Deletes a staff record'
   #swagger.parameters['id'] = { description: 'Staff ID', required: true, type: 'string' }
   #swagger.responses[200] = { description: 'Staff deleted successfully' }
   #swagger.responses[400] = { description: 'Bad request' }
   #swagger.responses[500] = { description: 'Internal server error' }
*/

module.exports = router;