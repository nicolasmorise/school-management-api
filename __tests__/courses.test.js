// tests/courses.test.js
const coursesController = require('../controller/coursesController');

jest.mock('../models/coursesModels', () => ({
    getAll: jest.fn().mockResolvedValue([
        { id: "101", title: "Math 101" }
    ]),
    getSingle: jest.fn().mockResolvedValue(
        { id: "101", title: "Math 101" }
    )
}));

describe("Courses Controller GET routes", () => {

    test("GET ALL courses returns list", async () => {
        const req = {};
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };

        await coursesController.getAll(req, res);

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith([
            { id: "101", title: "Math 101" }
        ]);
    });

    test("GET course by ID returns single course", async () => {
        const req = { params: { id: "101" } };
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };

        await coursesController.getSingle(req, res);

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith(
            { id: "101", title: "Math 101" }
        );
    });
});
