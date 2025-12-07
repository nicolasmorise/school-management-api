const staffController = require('../controller/staffController');

// Mock the staffModels
jest.mock('../models/staffModels', () => ({
  getAll: jest.fn(() => Promise.resolve([{ _id: "1", firstName: "Alice", lastName: "Smith" }])),
  getSingle: jest.fn(() => Promise.resolve({ _id: "1", firstName: "Alice", lastName: "Smith" })),
  postStaff: jest.fn(() => Promise.resolve({ acknowledged: true, insertedId: "1" })),
  putStaff: jest.fn(() => Promise.resolve({ modifiedCount: 1 })),
  deleteStaff: jest.fn(() => Promise.resolve({ deletedCount: 1 })),
}));

describe('Staff Controller GET routes', () => {
  let req, res;

  beforeEach(() => {
    req = {};
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
  });

  test('GET ALL staff returns list', async () => {
    await staffController.getAll(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith([{ _id: "1", firstName: "Alice", lastName: "Smith" }]);
  });

  test('GET staff member by ID returns one', async () => {
    req.params = { id: "1" };
    await staffController.getSingle(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ _id: "1", firstName: "Alice", lastName: "Smith" });
  });
});

describe('Staff Controller POST, PUT, DELETE routes', () => {
  let req, res;

  beforeEach(() => {
    req = { body: { firstName: "Alice", lastName: "Smith" }, params: { id: "1" } };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
  });

  test('POST creates a staff member', async () => {
    await staffController.postStaff(req, res);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({
      message: "Success: New staff member has been created.",
      id: "1",
    });
  });

  test('PUT updates a staff member', async () => {
    await staffController.putStaff(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ message: "Success: Staff member has been updated." });
  });

  test('DELETE removes a staff member', async () => {
    await staffController.deleteStaff(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ message: "Success: Staff member has been deleted." });
  });
});
