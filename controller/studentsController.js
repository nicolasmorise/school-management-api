// Students Controllers - samueldelacruz123 contribution
const mongodb = require('../connection/db');
const ObjectId = require('mongodb').ObjectId;

// Get all students
const getAllStudent = async (req, res) => {
    // #swagger.tags = ['Students']
    try {
        const students = await mongodb
            .getDb()
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
    // #swagger.tags = ['Students']
    try {
        const studentId = new ObjectId(req.params.id);

        const student = await mongodb
            .getDb()
            .collection('students')
            .findOne({ _id: studentId });

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
        /*  
        #swagger.tags = ['Students']
        #swagger.description = 'Update an existing student'
        #swagger.parameters['student'] = { 
            in: 'body',
            description: 'Updated student information',
            required: true,
            schema: { $ref: '#/definitions/Student' }
        }
    */
    try {
        const student = {
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
            .getDb()
            .collection('students')
            .insertOne(student);

        res.status(201).json({ message: 'Student created', id: response.insertedId });
    } catch (err) {
        res.status(500).json({
            message: 'Error creating student',
            error: err.message,
        });
    }
};

// Update a student by id
const updateStudent = async (req, res) => {
        /*  
        #swagger.tags = ['Students']
        #swagger.description = 'Update an existing student'
        #swagger.parameters['student'] = { 
            in: 'body',
            description: 'Updated student information',
            required: true,
            schema: { $ref: '#/definitions/Student' }
        }
    */
    try {
        const studentId = new ObjectId(req.params.id);

        const updatedStudent = {
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
            .getDb()
            .collection('students')
            .replaceOne({ _id: studentId }, updatedStudent);

        res.status(200).json(response);
    } catch (err) {
        res.status(500).json({
            message: 'Error updating student',
            error: err.message,
        });
    }
};

// Delete a student by id
const deleteStudent = async (req, res) => {
    // #swagger.tags = ['Students']
    try {
        const studentId = new ObjectId(req.params.id);

        const response = await mongodb
            .getDb()
            .collection('students')
            .deleteOne({ _id: studentId });

        res.status(200).json(response);
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
