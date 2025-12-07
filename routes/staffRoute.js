// Staff Routes - samueldelacruz123
const express = require('express');
const router = express.Router();
const staffController = require('../controller/staffController');
const validationHandler = require('../middleware/validation')
const staffValidation = require('../middleware/staffValidation')

const ensureAuth = require('../middleware/ensureauth')

router.use(ensureAuth)

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

router.post('/', staffValidation.createStaffValidation, validationHandler.handleValidationErrors, staffController.postStaff);

router.put('/:id', staffValidation.updateStaffValidation, validationHandler.handleValidationErrors, staffController.putStaff);

router.delete('/:id', staffController.deleteStaff);

module.exports = router
