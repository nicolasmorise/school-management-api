const express = require('express');
const router = express.Router();
const coursesController = require("../controller/coursesController");
const courseValidation = require('../middleware/coursesValidation');
const handleValidation = require('../middleware/validation');

const ensureAuth = require('../middleware/ensureauth')

router.use(ensureAuth)

// Public Routes
// =====================

// GET all courses
router.get('/', coursesController.getAll); 
/* #swagger.path = '/api/courses'
   #swagger.tags = ['Courses']
   #swagger.summary = 'Get all courses'
   #swagger.description = 'Returns a list of all courses'
   #swagger.responses[200] = { description: 'Array of courses' }
   #swagger.responses[500] = { description: 'Internal server error' }
*/

// GET single course
router.get('/:id', coursesController.getSingle); 
/* #swagger.path = '/api/courses/{id}'
   #swagger.tags = ['Courses']
   #swagger.summary = 'Get a course by ID'
   #swagger.description = 'Returns a single course based on the provided ID'
   #swagger.parameters['id'] = { description: 'Course ID', required: true, type: 'string' }
   #swagger.responses[200] = { description: 'Course object' }
   #swagger.responses[404] = { description: 'Course not found' }
   #swagger.responses[500] = { description: 'Internal server error' }
*/

// POST create course
router.post('/', coursesController.postCourse); 
/* #swagger.path = '/api/courses'
   #swagger.tags = ['Courses']
   #swagger.summary = 'Create a new course'
   #swagger.description = 'Creates a new course record'
   #swagger.parameters['course'] = {
        in: 'body',
        description: 'Course information to create',
        required: true,
        schema: { $ref: '#/definitions/Course' }
   }
   #swagger.responses[201] = { description: 'Course created successfully' }
   #swagger.responses[500] = { description: 'Internal server error' }
*/

// PUT update course
router.put('/:id', coursesController.putCourse); 
/* #swagger.path = '/api/courses/{id}'
   #swagger.tags = ['Courses']
   #swagger.summary = 'Update a course by ID'
   #swagger.description = 'Updates an existing course record'
   #swagger.parameters['id'] = { description: 'Course ID', required: true, type: 'string' }
   #swagger.parameters['course'] = {
        in: 'body',
        description: 'Updated course information',
        required: true,
        schema: { $ref: '#/definitions/Course' }
   }
   #swagger.responses[200] = { description: 'Course updated successfully' }
   #swagger.responses[400] = { description: 'Bad request' }
   #swagger.responses[500] = { description: 'Internal server error' }
*/

// Protected Routes
router.post('/', courseValidation.createCourseValidation, handleValidation.handleValidationErrors,coursesController.postCourse);
router.put('/:id', courseValidation.updateCourseValidation, handleValidation.handleValidationErrors,coursesController.putCourse);
router.delete('/:id', coursesController.deleteCourse);

module.exports = router;