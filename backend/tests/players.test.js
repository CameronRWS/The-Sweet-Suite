const createServer = require("../server")
const supertest = require("supertest");
const players = require('../services/players');
const bcrypt = require('bcrypt');

const app = createServer();

test("GET /api/players", async () => {
	await supertest(app)
		.get("/api/players")
		.expect(200)
		.then((response) => {
            expect(Array.isArray(response.body)).toBeTruthy();
		})
})

test("GET /api/players/:id", async () => {
    const playerCam = { id: 1,
        username: 'Cameron48',
        password: 'myPassword',
        email: 'csmith48@iastate.edu',
        display_name: 'Cameron S.',
        total_score: 0,
        spendable_score: 0 
    }

	await supertest(app)
		.get("/api/players/" + 1)
		.expect(200)
		.then(async (response) => {
			expect(response.body.username).toBe(playerCam.username);
            expect(await bcrypt.compare(playerCam.password, response.body.password)).toBeTruthy();
            expect(response.body.email).toBe(playerCam.email);
            expect(response.body.display_name).toBe(playerCam.display_name);
            expect(typeof response.body.total_score).toBe('number');
            expect(typeof response.body.spendable_score).toBe('number');
		})
})

test("POST /api/players", async () => {
    const testPlayer = {
        username: 'testUser',
        password: 'myPassword',
        email: 'testEmail@gmail.com',
        display_name: 'Tester',
        total_score: 0,
        spendable_score: 0 
    }

	await supertest(app)
		.post("/api/players")
        .send(testPlayer)
		.expect(200)
		.then(async (response) => {
			expect(response.body.username).toBe(testPlayer.username);
            expect(await bcrypt.compare(testPlayer.password, response.body.password)).toBeTruthy();
            expect(response.body.email).toBe(testPlayer.email);
            expect(response.body.display_name).toBe(testPlayer.display_name);
            expect(typeof response.body.total_score).toBe('number');
            expect(typeof response.body.spendable_score).toBe('number');
            const playerData = await players.getByUsername(testPlayer.username);
            expect(playerData.username).toBe(testPlayer.username);
            expect(await bcrypt.compare(testPlayer.password, playerData.password)).toBeTruthy();
            expect(playerData.email).toBe(testPlayer.email);
            expect(playerData.display_name).toBe(testPlayer.display_name);
            expect(typeof playerData.total_score).toBe('number');
            expect(typeof playerData.spendable_score).toBe('number');
            await players.remove(playerData.id);
		})
})

test("DELETE /api/players/:id", async () => {
    const testPlayer = {
        username: 'testUser',
        password: 'myPassword',
        email: 'testEmail@gmail.com',
        display_name: 'Tester',
        total_score: 0,
        spendable_score: 0 
    }
    const id = (await players.create(testPlayer)).id;
    const oldNumPlayers = (await players.getAll()).length;

	await supertest(app)
		.delete("/api/players/" + id)
		.expect(200)
		.then(async (response) => {
            const newNumPlayers = (await players.getAll()).length;
			expect(oldNumPlayers - newNumPlayers).toBe(1);
		})
})

test("PUT /api/players", async () => {
    const id = 1;
    const oldPlayerCam = {
        username: 'Cameron48',
        password: 'myPassword',
        email: 'csmith48@iastate.edu',
        display_name: 'Cameron S.',
        total_score: 0,
        spendable_score: 0 
    }
    const newPlayerCam = {
        username: 'Cameron48',
        password: 'myPassword',
        email: 'csmith48@iastate.edu',
        display_name: 'Cameron Smith',
        total_score: 0,
        spendable_score: 0 
    }

	await supertest(app)
		.put("/api/players/" + id)
        .send(newPlayerCam)
		.expect(200)
		.then(async (response) => {
			expect(response.body.username).toBe(newPlayerCam.username);
            expect(await bcrypt.compare(newPlayerCam.password, response.body.password)).toBeTruthy();
            expect(response.body.email).toBe(newPlayerCam.email);
            expect(response.body.display_name).toBe(newPlayerCam.display_name);
            expect(typeof response.body.total_score).toBe('number');
            expect(typeof response.body.spendable_score).toBe('number');
            const playerData = await players.getByUsername(newPlayerCam.username);
            expect(playerData.username).toBe(newPlayerCam.username);
            expect(await bcrypt.compare(newPlayerCam.password, playerData.password)).toBeTruthy();
            expect(playerData.email).toBe(newPlayerCam.email);
            expect(playerData.display_name).toBe(newPlayerCam.display_name);
            expect(typeof playerData.total_score).toBe('number');
            expect(typeof playerData.spendable_score).toBe('number');
            players.update(id, oldPlayerCam);
		})
})

test("POST /api/players/login", async () => {
    const testLoginTrue = {
        username: 'Cameron48',
        password: 'myPassword',
    }
    //incorrect username
    const testLoginFalse1 = {
        username: 'Cameron481',
        password: 'myPassword',
    }
    //incorrect password
    const testLoginFalse2 = {
        username: 'Cameron48',
        password: 'myPasswordz',
    }

	await supertest(app)
		.post("/api/players/login")
        .send(testLoginTrue)
		.expect(200)
		.then(async (response) => {
			expect(response.body.isSuccessful).toBeTruthy();
		})

    await supertest(app)
		.post("/api/players/login")
        .send(testLoginFalse1)
		.expect(200)
		.then(async (response) => {
			expect(response.body.isSuccessful).toBeFalsy();
		})
    
    await supertest(app)
		.post("/api/players/login")
        .send(testLoginFalse2)
		.expect(200)
		.then(async (response) => {
			expect(response.body.isSuccessful).toBeFalsy();
		})
})
