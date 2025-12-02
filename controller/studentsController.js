// Students Controllers - samueldelacruz123
const mongodb = require('../connection/db');

// Get all students
const getAllStudent = async (req, res) => {
    try {
        // #swagger.tags = ['Students']
        const students = await mongodb
            .getDatabase()
            .db()
            .collection('students')
            .find()
            .toArray();

        res.status(200).json(students);
    } catch (err) {
        res.status(500).json({
            message: 'Error retrieving students',
            error: err.message,
        });
    }
};

// Get single student by id
const getSingleStudent = async (req, res) => {
    try {
        // #swagger.tags = ['Students']
        const id = req.params.id;

        const student = await mongodb
            .getDatabase()
            .db()
            .collection('students')
            .findOne({ _id: id });

        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }

        res.status(200).json(student);
    } catch (err) {
        res.status(500).json({
            message: 'Error retrieving student',
            error: err.message,
        });
    }
};

// Create a new student
const createStudent = async (req, res) => {
    try {
        // #swagger.tags = ['Students']
        const student = {
            _id: req.body._id, // allow custom IDs like "s006"
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            age: req.body.age,
            grade: req.body.grade,
            email: req.body.email,
            enrolled: req.body.enrolled,
            gpa: req.body.gpa,
            homeroomTeacher: req.body.homeroomTeacher,
        };

        const response = await mongodb
            .getDatabase()
            .db()
            .collection('students')
            .insertOne(student);

        if (response.acknowledged) {
            res.status(201).json({ message: 'Student created successfully' });
        } else {
            res.status(500).json({ message: 'Failed to create student' });
        }
    } catch (err) {
        res.status(500).json({
            message: 'Error creating student',
            error: err.message,
        });
    }
};

// Update a student by id
const updateStudent = async (req, res) => {
    try {
        // #swagger.tags = ['Students']
        const studentId = req.params.id;

        const updatedStudent = {
            _id: studentId,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            age: req.body.age,
            grade: req.body.grade,
            email: req.body.email,
            enrolled: req.body.enrolled,
            gpa: req.body.gpa,
            homeroomTeacher: req.body.homeroomTeacher,
        };

        const response = await mongodb
            .getDatabase()
            .db()
            .collection('students')
            .replaceOne({ _id: studentId }, updatedStudent);

        if (response.modifiedCount > 0) {
            res.status(200).json({ message: 'Student updated successfully' });
        } else {
            res.status(404).json({ message: 'Student not found or no changes made' });
        }
    } catch (err) {
        res.status(500).json({
            message: 'Error updating student',
            error: err.message,
        });
    }
};

// Delete a student by id
const deleteStudent = async (req, res) => {
    try {
        // #swagger.tags = ['Students']
        const studentId = req.params.id;

        const response = await mongodb
            .getDatabase()
            .db()
            .collection('students')
            .deleteOne({ _id: studentId });

        if (response.deletedCount > 0) {
            res.status(200).json({ message: 'Student deleted successfully' });
        } else {
            res.status(404).json({ message: 'Student not found' });
        }
    } catch (err) {
        res.status(500).json({
            message: 'Error deleting student',
            error: err.message,
        });
    }
};

module.exports = {
    getAllStudent,
    getSingleStudent,
    createStudent,
    updateStudent,
    deleteStudent,
};
