const express = require('express');
const router = express.Router();
const Ninja = require('../models/ninja');

router.get('/ninjas', (req, res, next) => {
    res.send({ type: "GET" });
});

router.post('/ninjas', (req, res, next) => {
    Ninja.create(req.body).then((ninja) => {
        res.send(ninja);
    }).catch(next);
});

router.put('/ninjas/:id', (req, res, next) => {
    res.send({ type: "PUT" });
});

router.delete('/ninjas/:id', (req, res, next) => {
    res.send({ type: "DELETE" });
});

module.exports = router;