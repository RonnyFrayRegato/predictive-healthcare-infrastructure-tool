const express = require('express');
const { Client } = require('pg');

const app = express();

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'phit',
    password: 'password',
    port: 5432,
});

client.connect();

app.get('/supply', (req, res) => {
    const query = {
        text: 'SELECT * FROM supplies ',
        rowMode: 'array',
    };

    client.query(query).then((results) => {
        const data = results.rows;

        res.json({ message: data });
    });
});

app.get('/patients/:minAge/:maxAge', (req, res) => {
    const query = {
        text: 'SELECT * FROM patient_diagnosis_by_age_ascending WHERE years_old > $1 AND years_old <= $2',
        rowMode: 'array',
    };

    client.query(query, [req.params.minAge, req.params.maxAge]).then((results) => {
        const data = results.rows;

        res.json({ message: data });
    });
});

app.get('/carePlans', (req, res) => {
    const query = {
        text: 'SELECT id, patient, encounter, code, description FROM careplans',
        rowMode: 'array',
    };

    client.query(query).then((results) => {
        const data = results.rows;

        res.json({ message: data });
    });
});

app.get('/allergies', (req, res) => {
    const query = {
        text: 'SELECT patient, code, system, description, type, category FROM allergies',
        rowMode: 'array',
    };

    client.query(query).then((results) => {
        const data = results.rows;

        res.json({ message: data });
    });
});

app.get('/medications/:minAge/:maxAge', (req, res) => {
    const query = {
        text: 'SELECT * FROM medication_filled_by_age_ascending WHERE years_old > $1 AND years_old <= $2',
        rowMode: 'array',
    };

    client.query(query, [req.params.minAge, req.params.maxAge]).then((results) => {
        const data = results.rows;

        res.json({ message: data });
    });
});

module.exports = app;
