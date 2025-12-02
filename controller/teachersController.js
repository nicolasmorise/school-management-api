const teachersModels = require("../models/teachersModelss");

// GET ALL
const getAll = async (req, res) => {
    try {
        const teachers = await teachersModels.getAll();
        res.status(200).json(teachers);
    } catch (err) {
        res.status(500).json({ message: "Error: We had problems fetching the list of teachers." });
    }
};

// GET ONE
const getSingle = async (req, res) => {
    try {
        const teachers = await teachersModels.getSingle(req.params.id);
        if (!teachers[0]) {
            return res.status(404).json({ message: "Error: Sorry, I don't think we can find that particular teacher" });
        }
        res.status(200).json(teachers[0]);
    } catch (err) {
        res.status(500).json({ message: "Error: We had problems fetching the teacher's profile."});
    }
};

// POST
const postTeacher = async (req, res) => {
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