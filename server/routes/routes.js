const express = require('express');
const { getSupplies, getPatientsByAge, getCarePlans, getAllergies, getMedicationsByAge} = require('../db/queries');
const {calculatePeanutAllergy, calculateDiabetic, calculateInsulin} = require("../insights_engine/prediction_algorithms");

const router = express.Router();

router.get('/supply', (req, res) => {
    getSupplies()
        .then((data) => {
            res.json({ message: data });
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send('Internal Server Error');
        });
});

router.get('/patients/:minAge/:maxAge', (req, res) => {
    getPatientsByAge(req.params.minAge, req.params.maxAge)
        .then((data) => {
            res.json({ message: data });
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send('Internal Server Error');
        });
});

router.get('/carePlans', (req, res) => {
    getCarePlans()
        .then((data) => {
            res.json({ message: data });
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send('Internal Server Error');
        });
});

router.get('/allergies', (req, res) => {
    getAllergies()
        .then((data) => {
            res.json({ message: data });
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send('Internal Server Error');
        });
});

router.get('/medications/:minAge/:maxAge', (req, res) => {
    getMedicationsByAge(req.params.minAge, req.params.maxAge)
        .then((data) => {
            res.json({ message: data });
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send('Internal Server Error');
        });
});

router.get('/peanutPrediction', (req, res) => {

    calculatePeanutAllergy().then((data) => {

        res.json({ message: data });

    }).catch((error) => {
        console.error(error);
        res.send(error)
    });

});

router.get('/diabeticPrediction', (req, res) => {

    calculateDiabetic().then((data) => {

        res.json({ message: data });

    }).catch((error) => {
        console.error(error);
        res.send(error)
    });

});

router.get('/insulinPrediction', (req, res) => {

    calculateInsulin().then((data) => {

        res.json({ message: data });

    }).catch((error) => {
        console.error(error);
        res.send(error)
    });

});

module.exports = router;
