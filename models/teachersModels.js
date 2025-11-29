const mongodb = require('../data/database');
const { ObjectId } = require('mongodb');

async function getAll() {
    return mongodb
        .getDatabase()
        .collection("teachers") 
        .find()
        .toArray();
}

async function getSingle(id) {
    const teacherId = new ObjectId(id);
    return mongodb
        .getDatabase()
        .collection("teachers")
        .find({ _id: teacherId })
        .findOne({ _id: teacherId });
}

async function postTeacher(teacher) {
    return mongodb
        .getDatabase()
        .collection("teachers")
        .insertOne(teacher);
}

async function putTeacher(id, teacher) {
    const teacherId = new ObjectId(id);
    return mongodb
        .getDatabase()
        .collection("teachers")
        .replaceOne({ _id: teacherId }, teacher);
}

async function deleteTeacher(id) {
    const teacherId = new ObjectId(id);
    return mongodb
        .getDatabase()
        .collection("teachers")
        .deleteOne({ _id: teacherId });
}

module.exports = {
    getAll,
    getSingle,
    postTeacher,
    putTeacher,
    deleteTeacher,
};
