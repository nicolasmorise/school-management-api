const mongodb = require('../connection/db');
const { ObjectId } = require('mongodb');

async function getAll() {
    return mongodb
        .getDb()
        .collection("courses")
        .find({})
        .toArray();
}

async function getSingle(id) {
    const courseId = new ObjectId(id);
    return mongodb
        .getDb()
        .collection("courses")
        .findOne({ _id: courseId });
}

async function postCourse(course) {
    return mongodb
        .getDb()
        .collection("courses")
        .insertOne(course);
}

async function putCourse(id, course) {
    const courseId = new ObjectId(id);
    return mongodb
        .getDb()
        .collection("courses")
        .replaceOne({ _id: courseId }, course);
}

async function deleteCourse(id) {
    const courseId = new ObjectId(id);
    return mongodb
        .getDb()
        .collection("courses")
        .deleteOne({ _id: courseId });
}

module.exports = {
    getAll,
    getSingle,
    postCourse,
    putCourse,
    deleteCourse,
};
