const mongodb = require('../connection/db');
const ObjectId = require('mongodb').ObjectId;

// staffController.js
const staffModels = require("../models/staffModels");

// GET ALL
const getAll = async (req, res) => {
    // #swagger.tags = ['Staff']
    try {
        const staff = await staffModels.getAll();
        res.status(200).json(staff);
    } catch (err) {
        res.status(500).json({
            message: "Error: We had problems fetching the list of staff members.",
            error: err.message
        });
    }
};

// GET ONE
const getSingle = async (req, res) => {
    // #swagger.tags = ['Staff']
    try {
        const staff = await staffModels.getSingle(req.params.id);

        if (!staff) {
            return res.status(404).json({
                message: "Error: Staff member not found."
            });
        }

        res.status(200).json(staff);
    } catch (err) {
        res.status(500).json({
            message: "Error: We had problems fetching this staff member.",
            error: err.message
        });
    }
};

// POST
const postStaff = async (req, res) => {
    /*  
        #swagger.tags = ['Staff']
        #swagger.description = 'Create a new staff member'
        #swagger.parameters['staff'] = {
            in: 'body',
            description: 'Staff information to create',
            required: true,
            schema: { $ref: '#/definitions/Staff' }
        }
    */
    try {
        const response = await staffModels.postStaff(req.body);

        if (response.acknowledged) {
            return res.status(201).json({
                message: "Success: New staff member has been created.",
                id: response.insertedId
            });
        }

        res.status(500).json({ message: "Error: Unable to create staff member." });
    } catch (err) {
        res.status(500).json({
            message: "Error: Unable to create staff member.",
            error: err.message
        });
    }
};

// PUT
const putStaff = async (req, res) => {
    /*  
        #swagger.tags = ['Staff']
        #swagger.description = 'Update a staff member'
        #swagger.parameters['staff'] = {
            in: 'body',
            description: 'Staff information to update',
            required: true,
            schema: { $ref: '#/definitions/Staff' }
        }
    */
    
    try {
        const response = await staffModels.putStaff(req.params.id, req.body);

        if (response.modifiedCount > 0) {
            return res.status(200).json({
                message: "Success: Staff member has been updated."
            });
        }

        res.status(400).json({
            message: "Error: Unable to locate staff member or no changes made."
        });
    } catch (err) {
        res.status(500).json({
            message: "Error: Unable to update staff member.",
            error: err.message
        });
    }
};

// DELETE
const deleteStaff = async (req, res) => {
    // #swagger.tags = ['Staff']
    try {
        const response = await staffModels.deleteStaff(req.params.id);

        if (response.deletedCount > 0) {
            return res.status(200).json({
                message: "Success: Staff member has been deleted."
            });
        }

        res.status(400).json({
            message: "Error: Unable to locate staff member."
        });

    } catch (err) {
        res.status(500).json({
            message: "Error: Unable to delete staff member.",
            error: err.message
        });
    }
};

module.exports = {
    getAll,
    getSingle,
    postStaff,
    putStaff,
    deleteStaff
};
