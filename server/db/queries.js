const client = require('./conn'); // Import the client instance.

client.connect();

const getSupplies = () => {
    const query = {
        text: 'SELECT * FROM synthea.supplies ',
        rowMode: 'array',
    };

    return client.query(query)
        .then((results) => {
            return results.rows;
        });
};

const getPatientsByAge = (minAge, maxAge) => {
    const query = {
        text: 'SELECT * FROM synthea.patient_diagnosis_by_age_ascending WHERE years_old > $1 AND years_old <= $2',
        rowMode: 'array',
    };

    return client.query(query, [minAge, maxAge])
        .then((results) => {
            return results.rows;
        });
};



const getAllergies = () => {
    const query = {
        text: 'SELECT patient_id, code, system, description, type, category FROM synthea.allergies',
        rowMode: 'array',
    };

    return client.query(query)
        .then((results) => {
            return results.rows;
        });
};

const getMedicationsByAge = (minAge, maxAge) => {
    const query = {
        text: 'SELECT * FROM synthea.medication_filled_by_age_ascending WHERE years_old > $1 AND years_old <= $2',
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

const getTotalDiabeticPatients = () => {

    const query = {
        text: "SELECT diabetic_patients FROM synthea.diabetic_patients WHERE description = 'Diabetes mellitus type 2 (disorder)'",
        rowMode: 'array',
    };

    return client.query(query)
        .then((results) => {
            return results.rows[0];
        });
};


const insertDiabeticResults = (year, totalPatients) => {

    const insertQuery = {
        text: 'INSERT INTO acs.diabetic_results(year, total_patients) VALUES($1, $2)',
        values: [year, totalPatients],
    };

    client.query(insertQuery, (err, res) => {
        if (err) {
            console.log(err.stack);
        }
    });
};

const getDiabeticResults = () => {

    const query = {
        text: "SELECT * FROM acs.diabetic_results",
        rowMode: 'array',
    };

    return client.query(query)
        .then((results) => {
            return results.rows;
        });
};

const getInsulinDays = () => {

    const query = {
        text: "SELECT average_time_interval FROM synthea.average_diabetic_statistics",
        rowMode: 'array',
    };

    return client.query(query)
        .then((results) => {
            return results.rows[0];
        });
};

const getInsulinUnitsDispensed = () => {

    const query = {
        text: "SELECT average_total_units_dispensed FROM synthea.average_diabetic_statistics",
        rowMode: 'array',
    };

    return client.query(query)
        .then((results) => {
            return results.rows[0];
        });
};

const insertInsulinResults = (year, totalUnits) => {

    const insertQuery = {
        text: 'INSERT INTO acs.insulin_results(year, total_units) VALUES($1, $2)',
        values: [year, totalUnits],
    };

    client.query(insertQuery, (err, res) => {
        if (err) {
            console.log(err.stack);
        }
    });
};

const getInsulinResults = () => {

    const query = {
        text: "SELECT * FROM acs.insulin_results",
        rowMode: 'array',
    };

    return client.query(query)
        .then((results) => {
            return results.rows;
        });
};

module.exports = {
    getSupplies,
    getPatientsByAge,
    getAllergies,
    getMedicationsByAge,
    getPopulationChange2020_2021,
    getTotalPeanutAllergyPatients,
    insertPeanutAllergyResults,
    getPeanutAllergyResults,
    getTotalDiabeticPatients,
    insertDiabeticResults,
    getDiabeticResults,
    getInsulinDays,
    getInsulinUnitsDispensed,
    getInsulinResults,
    insertInsulinResults
};
