const router = require('express').Router();

router.use('/', require('./swagger'));

// Swagger documentation routes
router.use('/api-docs', require('./swagger'));

// Student Route - samueldelacruz123
router.use('/students', require('./studentsRoute'));

// Staff Route - samueldelacruz123
router.use('/staff', require('./staffRoute'));

// Teachers Route - samueldelacruz123
router.use('/teachers', require('./teachersRoute'));

// Courses Route - samueldelacruz123
router.use('/courses', require('./coursesRoute'));

module.exports = router;