// tests/teachers.test.js
const teachersController = require('../controller/teachersController');

jest.mock('../models/teachersModels', () => ({
    getAll: jest.fn().mockResolvedValue([
        { id: "1", name: "Teacher One" }
    ]),
    getSingle: jest.fn().mockResolvedValue(
        { id: "1", name: "Teacher One" }
    )
}));

describe("Teachers Controller GET routes", () => {

    test("GET ALL teachers returns list", async () => {
        const req = {};
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };

        await teachersController.getAll(req, res);

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith([
            { id: "1", name: "Teacher One" }
        ]);
    });

    test("GET teacher by ID returns single teacher", async () => {
        const req = { params: { id: "1" } };
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };

        await teachersController.getSingle(req, res);

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith(
            { id: "1", name: "Teacher One" }
        );
    });
});
