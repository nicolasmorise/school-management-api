const mongodb = require('../connection/db');
const { ObjectId } = require('mongodb');

async function getAll() {
    return mongodb
        .getDb()
        .collection("teachers")
        .find({})
        .toArray();
}

async function getSingle(id) {
    const teacherId = new ObjectId(id);
    return mongodb
        .getDb()
        .collection("teachers")
        .findOne({ _id: teacherId });
}

async function postTeacher(teacher) {
    return mongodb
        .getDb()
        .collection("teachers")
        .insertOne(teacher);
}

async function putTeacher(id, teacher) {
    const teacherId = new ObjectId(id);
    return mongodb
        .getDb()
        .collection("teachers")
        .replaceOne({ _id: teacherId }, teacher);
}

async function deleteTeacher(id) {
    const teacherId = new ObjectId(id);
    return mongodb
        .getDb()
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
