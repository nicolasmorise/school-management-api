//Staff Routes - samueldelacruz123
const express = require('express');
const router = express.Router();
const staffController = require('../controller/staffController');
const validationHandler = require('../middleware/validation')
const staffValidation = require('../middleware/staffValidation')

const ensureAuth = require('../middleware/ensureauth')

router.use(ensureAuth)

router.get('/', staffController.getAllStaff);

router.get('/:id', staffController.getSingleStaffMember);

router.post('/', staffValidation.createStaffValidation, validationHandler.handleValidationErrors, staffController.createStaffMember);

router.put('/:id', staffValidation.updateStaffValidation, validationHandler.handleValidationErrors, staffController.updateStaffMember);

router.delete('/:id', staffController.deleteStaffMember);

module.exports = router