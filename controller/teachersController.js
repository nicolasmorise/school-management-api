const mongodb = require('../connection/db');
const ObjectId = require('mongodb').ObjectId;

const teachersModels = require("../models/teachersModels");

// GET ALL
const getAll = async (req, res) => {
    // #swagger.tags = ['Teachers']
    try {
        const teachers = await teachersModels.getAll();
        res.status(200).json(teachers);
    } catch (err) {
        res.status(500).json({ message: "Error: We had problems fetching the list of teachers." });
    }
};

// GET ONE
const getSingle = async (req, res) => {
    //#swagger.tags = ['Teachers']
    try {
        const teacher = await teachersModels.getSingle(req.params.id);

        if (!teacher) {
            return res.status(404).json({
                message: "Error: Sorry, I don't think we can find that particular teacher",
            });
        }

        res.status(200).json(teacher);
    } catch (err) {
        res.status(500).json({
            message: "Error: We had problems fetching the teacher's profile.",
            error: err.message,
        });
    }
};

// POST
const postTeacher = async (req, res) => {
    /*  
        #swagger.tags = ['Teachers']
        #swagger.description = 'Create a new teacher'
        #swagger.parameters['teacher'] = {
            in: 'body',
            description: 'Teacher information to create',
            required: true,
            schema: { $ref: '#/definitions/Teacher' }
        }
    */
    try {
        const teacher = req.body;
        const response = await teachersModels.postTeacher(teacher);

        if (response.acknowledged) {
            return res.status(201).json({
                message: "Success: New teacher profile has been created",
                id: response.insertedId,
            });
        }

        res.status(500).json({ message: "Error: Unable to create teacher profile." });
    } catch (error) {
        res.status(500).json({ message: "Error: Unable to create teacher profile." });
    }
};

// PUT
const putTeacher = async (req, res) => {
    /*  
        #swagger.tags = ['Teachers']
        #swagger.description = 'Update an existing teacher'
        #swagger.parameters['teacher'] = { 
            in: 'body',
            description: 'Updated teacher information',
            required: true,
            schema: { $ref: '#/definitions/Teacher' }
        }
    */
    try {
        const response = await teachersModels.putTeacher(req.params.id, req.body);

        if (response.modifiedCount > 0) {
            return res.status(200).json({ message: "Success: Teacher profile has been updated." });
        }

        res.status(400).json({ message: "Error: Unable to locate teacher profile." });
    } catch (err) {
        res.status(500).json({ message: "Error: Unable to update teacher profile." });
    }
};

// DELETE
const deleteTeacher = async (req, res) => {
    //#swagger.tags = ['Teachers']
    try {
        const response = await teachersModels.deleteTeacher(req.params.id);

        if (response.deletedCount > 0) {
            return res.status(200).json({ message: "Success: Teacher profile has been removed." });
        }

        res.status(400).json({ message: "Error: Unable to locate teacher profile." });
    } catch (err) {
        res.status(500).json({ message: "Error: Unable to delete teacher profile" });
    }
};

module.exports = {
    getAll,
    getSingle,
    postTeacher,
    putTeacher,
    deleteTeacher,
};