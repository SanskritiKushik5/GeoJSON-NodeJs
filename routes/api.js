const express = require('express');
const { findByIdAndRemove } = require('../models/ninja');
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
    Ninja.findByIdAndRemove({_id: req.params.id}).then((ninja) => {
        res.send(ninja);
    })
});

module.exports = router;