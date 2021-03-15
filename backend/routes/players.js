

const express = require('express');
const router = express.Router();
const players = require('../services/players');
let tableName = "players";

//login
router.post('/login', async function(req, res, next) {
    try {
        res.json(await players.login(req.body.username, req.body.password));
    } catch (err) {
        console.error(`error while login ${tableName} `, err.message);
        next(err);
    }
});

router.get('/:id', async function(req, res, next) {
    try {
        res.json(await players.get(req.params.id));
    } catch (err) {
        console.error(`error while getting ${tableName} `, err.message);
        next(err);
    }
});

router.get('/', async function(req, res, next) {
    try {
        res.json(await players.getAll());
    } catch (err) {
        console.error(`error while getting ${tableName} `, err.message);
        next(err);
    }
});

router.post('/', async function(req, res, next) {
    try {
        console.log("recieved: ");
        console.log(req.body);
        res.json(await players.create(req.body));
    } catch (err) {
        console.error(`error while creating ${tableName} `, err.message);
        next(err);
    }
});

router.put('/:id', async function(req, res, next) {
    try {
        res.json(await players.update(req.params.id, req.body));
    } catch (err) {
        console.error(`error while updating ${tableName}`, err.message);
        next(err);
    }
});

router.delete('/:id', async function(req, res, next) {
    try {
        res.json(await players.remove(req.params.id));
    } catch (err) {
        console.error(`error while deleting ${tableName}`, err.message);
        next(err);
    }
});

module.exports = router;