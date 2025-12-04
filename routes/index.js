const router = require('express').Router();

// Student Route - samueldelacruz123
router.use('/students', require('./studentsRoute'));

// Staff Route - samueldelacruz123
router.use('/staff', require('./staffRoute'));

module.exports = router;