const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

router.get('/:id', async function(req, res, next) {
    try {
        res.json(await bcrypt.hash(req.params.id, 10));
    } catch (err) {
        console.error(`error while generating password for string: ${req.params.id}`, err.message);
        next(err);
    }
});

module.exports = router;
