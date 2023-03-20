const client = require('./conn'); // Import the client instance.

client.connect();

const getSupplies = () => {
    const query = {
        text: 'SELECT * FROM supplies ',
        rowMode: 'array',
    };

    return client.query(query)
        .then((results) => {
            return results.rows;
        });
};

const getPatientsByAge = (minAge, maxAge) => {
    const query = {
        text: 'SELECT * FROM patient_diagnosis_by_age_ascending WHERE years_old > $1 AND years_old <= $2',
        rowMode: 'array',
    };

    return client.query(query, [minAge, maxAge])
        .then((results) => {
            return results.rows;
        });
};

const getCarePlans = () => {
    const query = {
        text: 'SELECT id, patient, encounter, code, description FROM careplans',
        rowMode: 'array',
    };

    return client.query(query)
        .then((results) => {
            return results.rows;
        });
};

const getAllergies = () => {
    const query = {
        text: 'SELECT patient, code, system, description, type, category FROM allergies',
        rowMode: 'array',
    };

    return client.query(query)
        .then((results) => {
            return results.rows;
        });
};

const getMedicationsByAge = (minAge, maxAge) => {
    const query = {
        text: 'SELECT * FROM medication_filled_by_age_ascending WHERE years_old > $1 AND years_old <= $2',
        rowMode: 'array',
    };

    return client.query(query, [minAge, maxAge])
        .then((results) => {
            return results.rows;
        });
};

const getPopulationChange2020_2021 = () => {

    const query = {
        text: "SELECT percent_change FROM acs.population_change WHERE year_range = '2020-2021'",
        rowMode: 'array',
    };

    return client.query(query)
        .then((results) => {
            return results.rows[0];
        });
};

const getTotalPeanutAllergyPatients = () => {

    const query = {
        text: "SELECT allergenic_patients FROM synthea.peanut_allergenic",
        rowMode: 'array',
    };

    return client.query(query)
        .then((results) => {
            return results.rows[0];
        });
};

const getPeanutAllergyResults = () => {

    const query = {
        text: "SELECT * FROM acs.peanut_allergy_results",
        rowMode: 'array',
    };

    return client.query(query)
        .then((results) => {
            return results.rows;
        });
};

const insertPeanutAllergyResults = (year, totalPatients) => {

    const insertQuery = {
        text: 'INSERT INTO acs.peanut_allergy_results(year, total_patients) VALUES($1, $2)',
        values: [year, totalPatients],
    };

    client.query(insertQuery, (err, res) => {
        if (err) {
            console.log(err.stack);
        }
    });
};


module.exports = {
    getSupplies,
    getPatientsByAge,
    getCarePlans,
    getAllergies,
    getMedicationsByAge,
    getPopulationChange2020_2021,
    getTotalPeanutAllergyPatients,
    insertPeanutAllergyResults,
    getPeanutAllergyResults
};
