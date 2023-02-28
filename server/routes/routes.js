const express = require('express');
const { getSupplies, getPatientsByAge, getCarePlans, getAllergies, getMedicationsByAge } = require('../db/queries');

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

module.exports = router;
