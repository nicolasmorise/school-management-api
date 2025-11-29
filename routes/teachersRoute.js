const express = require('express');
const router = express.Router();
const teachersController = require("../controllers/teachersController"); 

router.get('/', teachersController.getAll);
router.get('/:id', teachersController.getSingle);
router.post('/', teachersController.postTeacher);
router.put('/:id', teachersController.putTeacher);
router.delete('/:id', teachersController.deleteTeacher);

module.exports = router;