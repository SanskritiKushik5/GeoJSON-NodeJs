const express = require('express');
const { findByIdAndRemove } = require('../models/ninja');
const router = express.Router();
const Ninja = require('../models/ninja');

router.get('/ninjas', (req, res, next) => {
    // Ninja.find({}).then((ninjas) => {
    //     res.send(ninjas);
    // });
    Ninja.aggregate(
        [
            { "$geoNear": {
                "near": {
                    "type": "Point",
                    "coordinates": [parseFloat(req.query.lng), parseFloat(req.query.lat)] 
                },
                "maxDistance": 100000,
                'distanceField' : 'distance',
                "spherical": true
            }}
        ],
        function(err, ninjas) {
            if(!err){
                res.send(ninjas);
            }
            else{
                res.send("error coming")
            }
        }
    )
});

router.post('/ninjas', (req, res, next) => {
    Ninja.create(req.body).then((ninja) => {
        res.send(ninja);
    }).catch(next);
});

router.put('/ninjas/:id', (req, res, next) => {
    Ninja.findByIdAndUpdate({_id: req.params.id}, req.body).then(() => {
        Ninja.findOne({_id: req.params.id}).then((ninja) => {
            res.send(ninja);
        });
    });
});

router.delete('/ninjas/:id', (req, res, next) => {
    Ninja.findByIdAndRemove({_id: req.params.id}).then((ninja) => {
        res.send(ninja);
    })
});

module.exports = router;