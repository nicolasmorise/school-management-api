const mongodb = require('../connection/db');
const ObjectId = require('mongodb').ObjectId;

const teachersModels = require("../models/teachersModels");

// GET ALL
const getAll = async (req, res) => {
    // #swagger.tags = ['Teachers']
    try {
        const teacher = await teachersModels.getAll();
        res.status(200).json(teacher);
    } catch (err) {
        res.status(500).json({
            message: "Error: We had problems fetching the list of teachers.",
            error: err.message
        });
    }
};

// GET ONE
const getSingle = async (req, res) => {
    // #swagger.tags = ['Teachers']
    try {
        const teacher = await teachersModels.getSingle(req.params.id);

        if (!teacher) {
            return res.status(404).json({
                message: "Error: Teachers not found."
            });
        }

        res.status(200).json(teacher);
    } catch (err) {
        res.status(500).json({
            message: "Error: We had problems fetching this teacher.",
            error: err.message
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
        const response = await teachersModels.postTeacher(req.body);

        if (response.acknowledged) {
            return res.status(201).json({
                message: "Success: New teacher has been created.",
                id: response.insertedId
            });
        }

        res.status(500).json({ message: "Error: Unable to create teacher." });
    } catch (err) {
        res.status(500).json({
            message: "Error: Unable to create teacher.",
            error: err.message
        });
    }
};

// PUT
const putTeacher = async (req, res) => {
    /*  
        #swagger.tags = ['Teachers']
        #swagger.description = 'Update a teacher'
        #swagger.parameters['teacher'] = {
            in: 'body',
            description: 'Teacher information to update',
            required: true,
            schema: { $ref: '#/definitions/Teacher' }
        }
    */
    
    try {
        const response = await teachersModels.putTeacher(req.params.id, req.body);

        if (response.modifiedCount > 0) {
            return res.status(200).json({
                message: "Success: Teacher has been updated."
            });
        }

        res.status(400).json({
            message: "Error: Unable to locate teacher or no changes made."
        });
    } catch (err) {
        res.status(500).json({
            message: "Error: Unable to update teacher.",
            error: err.message
        });
    }
};

// DELETE
const deleteTeacher = async (req, res) => {
    // #swagger.tags = ['Teachers']
    try {
        const response = await teachersModels.deleteTeacher(req.params.id);

        if (response.deletedCount > 0) {
            return res.status(200).json({
                message: "Success: Teacher has been deleted."
            });
        }

        res.status(400).json({
            message: "Error: Unable to locate teacher."
        });

    } catch (err) {
        res.status(500).json({
            message: "Error: Unable to delete teacher.",
            error: err.message
        });
    }
};

module.exports = {
    getAll,
    getSingle,
    postTeacher,
    putTeacher,
    deleteTeacher
};
