//Students Routes - samueldelacruz123
const express = require('express');
const router = express.Router();
const studentsController = require('../controller/studentsController');

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
router.post('/', studentsController.createStudent);

// #swagger.tags = ['Students']
// #swagger.summary = 'Update a student by ID'
// #swagger.parameters['id'] = { description: 'Student ID' }
router.put('/:id', studentsController.updateStudent);

// #swagger.tags = ['Students']
// #swagger.summary = 'Delete a student'
// #swagger.parameters['id'] = { description: 'Student ID' }
router.delete('/:id', studentsController.deleteStudent);