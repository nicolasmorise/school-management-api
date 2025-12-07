// models/staffModels.js
const mongodb = require("../connection/db");
const ObjectId = require("mongodb").ObjectId;

const getAll = async () => {
    const db = mongodb.getDb();
    return db.collection("staff").find().toArray();
};

const getSingle = async (id) => {
    const db = mongodb.getDb();
    return db.collection("staff").findOne({ _id: new ObjectId(id) });
};

const postStaff = async (staff) => {
    const db = mongodb.getDb();
    return db.collection("staff").insertOne(staff);
};

const putStaff = async (id, staff) => {
    const db = mongodb.getDb();
    return db.collection("staff").replaceOne(
        { _id: new ObjectId(id) },
        staff
    );
};

const deleteStaff = async (id) => {
    const db = mongodb.getDb();
    return db.collection("staff").deleteOne({ _id: new ObjectId(id) });
};

module.exports = {
    getAll,
    getSingle,
    postStaff,
    putStaff,
    deleteStaff
};
