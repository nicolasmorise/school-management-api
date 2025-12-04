//Staff Routes - samueldelacruz123
const express = require('express');
const router = express.Router();
const staffController = require('../controller/studentsController');

router.get('/', staffController.getAllStaff);

router.get('/:id', staffController.getSingleStaffMember);

router.post('/', staffController.createStaffMember);

router.put('/:id', staffController.updateStaffMember);

router.delete('/:id', staffController.deleteStaffMember);