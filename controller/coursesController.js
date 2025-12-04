const mongodb = require('../connection/db');
const ObjectId = require('mongodb').ObjectId;

const coursesModels = require("../models/coursesModels");

// GET ALL
const getAll = async (req, res) => {
    // #swagger.tags = ['Courses']
    try {
        const courses = await coursesModels.getAll();
        res.status(200).json(courses);
    } catch (err) {
        res.status(500).json({ message: "Error: We had problems fetching the list of courses." });
    }
};

// GET ONE
const getSingle = async (req, res) => {
    //#swagger.tags = ['Courses']
    try {
        const course = await coursesModels.getSingle(req.params.id);

        if (!course) {
            return res.status(404).json({
                message: "Error: Sorry, I don't think we can find that particular course",
            });
        }

        res.status(200).json(course);
    } catch (err) {
        res.status(500).json({
            message: "Error: We had problems fetching the course.",
            error: err.message,
        });
    }
};

// POST
const postCourse = async (req, res) => {
    /*  
        #swagger.tags = ['Courses']
        #swagger.description = 'Create a new course'
        #swagger.parameters['course'] = {
            in: 'body',
            description: 'Course information to create',
            required: true,
            schema: { $ref: '#/definitions/Course' }
        }
    */
    try {
        const course = req.body;
        const response = await coursesModels.postCourse(course);

        if (response.acknowledged) {
            return res.status(201).json({
                message: "Success: New course profile has been created",
                id: response.insertedId,
            });
        }

        res.status(500).json({ message: "Error: Unable to create course." });
    } catch (error) {
        res.status(500).json({ message: "Error: Unable to create course." });
    }
};

// PUT
const putCourse = async (req, res) => {
    /*  
        #swagger.tags = ['Courses']
        #swagger.description = 'Update an existing course'
        #swagger.parameters['course'] = { 
            in: 'body',
            description: 'Updated course information',
            required: true,
            schema: { $ref: '#/definitions/Course' }
        }
    */
    try {
        const response = await coursesModels.putCourse(req.params.id, req.body);

        if (response.modifiedCount > 0) {
            return res.status(200).json({ message: "Success: Course information has been updated." });
        }

        res.status(400).json({ message: "Error: Unable to locate course." });
    } catch (err) {
        res.status(500).json({ message: "Error: Unable to update course." });
    }
};

// DELETE
const deleteCourse = async (req, res) => {
    //#swagger.tags = ['Courses']
    try {
        const response = await coursesModels.deleteCourse(req.params.id);

        if (response.deletedCount > 0) {
            return res.status(200).json({ message: "Success: Course has been removed." });
        }

        res.status(400).json({ message: "Error: Unable to locate course." });
    } catch (err) {
        res.status(500).json({ message: "Error: Unable to delete course." });
    }
};

module.exports = {
    getAll,
    getSingle,
    postCourse,
    putCourse,
    deleteCourse,
};