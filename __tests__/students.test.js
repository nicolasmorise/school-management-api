const studentsController = require('../controller/studentsController');

// Mock the mongodb getDb
jest.mock('../connection/db', () => {
  const { ObjectId } = require('mongodb'); // move inside factory
  return {
    getDb: jest.fn(() => ({
      collection: jest.fn(() => ({
        find: jest.fn(() => ({
          toArray: jest.fn(() =>
            Promise.resolve([{ _id: new ObjectId("000000000000000000000001"), name: "Student One" }])
          ),
        })),
        findOne: jest.fn(() =>
          Promise.resolve({ _id: new ObjectId("000000000000000000000001"), name: "Student One" })
        ),
        insertOne: jest.fn(() => Promise.resolve({ acknowledged: true, insertedId: "1" })),
        replaceOne: jest.fn(() => Promise.resolve({ modifiedCount: 1 })),
        deleteOne: jest.fn(() => Promise.resolve({ deletedCount: 1 })),
      })),
    })),
  };
});

describe('Students Controller GET routes', () => {
  let req, res;

  beforeEach(() => {
    req = {};
    res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
  });

  test('GET ALL students returns list', async () => {
    await studentsController.getAllStudent(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith([
      { _id: expect.any(Object), name: "Student One" },
    ]);
  });

  test('GET student by ID returns single student', async () => {
    req.params = { id: "000000000000000000000001" };
    await studentsController.getSingleStudent(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ _id: expect.any(Object), name: "Student One" });
  });
});

describe('Students Controller POST, PUT, DELETE routes', () => {
  let req, res;

  beforeEach(() => {
    req = { body: { name: "Student One" }, params: { id: "000000000000000000000001" } };
    res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
  });

  test('POST creates a student', async () => {
    await studentsController.createStudent(req, res);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({ message: "Student created", id: "1" });
  });

  test('PUT updates a student', async () => {
    await studentsController.updateStudent(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ modifiedCount: 1 });
  });

  test('DELETE removes a student', async () => {
    await studentsController.deleteStudent(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ deletedCount: 1 });
  });
});
