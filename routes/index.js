const router = require('express').Router();

router.use('/', require('./swagger'));

// Swagger documentation routes
router.use('/api-docs', require('./swagger'));

// Student Route - samueldelacruz123
router.use('/students', require('./studentsRoute'));

router.use('/staff', require('./staffRoute'));

module.exports = router;