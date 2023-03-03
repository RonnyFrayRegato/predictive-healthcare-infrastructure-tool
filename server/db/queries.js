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

module.exports = {
    getSupplies,
    getPatientsByAge,
    getCarePlans,
    getAllergies,
    getMedicationsByAge,
};
