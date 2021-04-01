const bcrypt = require('bcrypt');
const createServer = require("../server")
const supertest = require("supertest");

const app = createServer();

test("GET /api/bcrypt/:id", async () => {
    const password = "myPassword";
	await supertest(app)
		.get("/api/bcrypt/" + password)
		.expect(200)
		.then((response) => {
            expect(await bcrypt.compare(password, response.body).toBeTruthy());
		})
})

