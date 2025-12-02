const router = require('express').Router();

router.use('/', require('./swagger'));

// Swagger documentation routes
router.use('/api-docs', require('./swagger'));

// Student Route - samueldelacruz123
router.use('/students', require('./studentsRoute'));

// Teachers routes
router.use('/teachers', require('./teachersRoute'));

// Root welcome message
router.get('/', (req, res) => {
  //#swagger.tags = ['Welcome']
  res.send('Welcome to the School Management API 👋');
});

module.exports = router;