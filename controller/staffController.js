// Staff Controllers - samueldelacruz123 contribution
const mongodb = require('../connection/db');
const ObjectId = require('mongodb').ObjectId;

// Get all Staff
const getAllStaff = async (req, res) => {
    try {
        // #swagger.tags = ['Staff']
        const staff = await mongodb
            .getDatabase()
            .db()
            .collection('staff')
            .find()
            .toArray();

        res.status(200).json(staff);
    } catch (err) {
        res.status(500).json({
            message: 'Error retrieving staff',
            error: err.message,
        });
    }
};

// Get single staff member by id
const getSingleStaffMember = async (req, res) => {
    try {
        // #swagger.tags = ['Staff']
        const staffMemberId = new ObjectId(req.params.id);

        const staffMember = await mongodb
            .getDatabase()
            .db()
            .collection('staff')
            .findOne({ _id: staffMemberId });

        if (!staffMember) {
            return res.status(404).json({ message: 'Staff member not found' });
        }

        res.status(200).json(staffMember);
    } catch (err) {
        res.status(500).json({
            message: 'Error retrieving staff member',
            error: err.message,
        });
    }
};

// Create a new staff member
const createStaffMember = async (req, res) => {
    try {
        // #swagger.tags = ['Staff']
        const staffMember = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            phone: req.body.phone,
            role: req.body.role,
            department: req.body.department,
            hireDate: req.body.hireDate,
            status: req.body.status,
        };

        const response = await mongodb
            .getDatabase()
            .db()
            .collection('staff')
            .insertOne(staffMember);

        if (response.acknowledged) {
            res.status(201).json({ message: 'Staff member created successfully' });
        } else {
            res.status(500).json({ message: 'Failed to create staff member' });
        }
    } catch (err) {
        res.status(500).json({
            message: 'Error creating staff member',
            error: err.message,
        });
    }
};

// Update a staff member by id
const updateStaffMember = async (req, res) => {
    try {
        // #swagger.tags = ['Staff']
        const staffMemberId = new ObjectId(req.params.id);

        const updatedStaffMember = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            phone: req.body.phone,
            role: req.body.role,
            department: req.body.department,
            hireDate: req.body.hireDate,
            status: req.body.status,
        };

        const response = await mongodb
            .getDatabase()
            .db()
            .collection('staff')
            .replaceOne({ _id: staffMemberId }, updatedStaffMember);

        if (response.modifiedCount > 0) {
            res.status(200).json({ message: 'Staff member updated successfully' });
        } else {
            res.status(404).json({ message: 'Staff member not found or no changes made' });
        }
    } catch (err) {
        res.status(500).json({
            message: 'Error updating staff member',
            error: err.message,
        });
    }
};

// Delete a staff member by id
const deleteStaffMember = async (req, res) => {
    try {
        // #swagger.tags = ['Staff']
        const staffMemberId = new ObjectId(req.params.id);
        const response = await mongodb
            .getDatabase()
            .db()
            .collection('staff')
            .deleteOne({ _id: staffMemberId });

        if (response.deletedCount > 0) {
            res.status(200).json({ message: 'Staff member deleted successfully' });
        } else {
            res.status(404).json({ message: 'Staff member not found' });
        }
    } catch (err) {
        res.status(500).json({
            message: 'Error deleting staff member',
            error: err.message,
        });
    }
};

module.exports = {
    getAllStaff,
    getSingleStaffMember,
    createStaffMember,
    updateStaffMember,
    deleteStaffMember,
};
