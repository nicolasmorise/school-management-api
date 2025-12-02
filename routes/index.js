const router = require('express').Router();

// Student Route - samueldelacruz123
router.use('/students', require('./studentsRoute'));

module.exports = router;