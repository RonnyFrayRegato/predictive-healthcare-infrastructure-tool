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
        text: "SELECT allergenic_patients FROM synthea.peanut_allergy_patients",
        rowMode: 'array',
    };

    return client.query(query)
        .then((results) => {
            return results.rows[0];
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






const getInsulinDays = () => {

    const query = {
        text: "SELECT average_time_interval FROM synthea.average_diabetic_medication_statistics",
        rowMode: 'array',
    };

    return client.query(query)
        .then((results) => {
            return results.rows[0];
        });
};

const getInsulinUnitsDispensed = () => {

    const query = {
        text: "SELECT average_units_dispensed FROM synthea.average_diabetic_medication_statistics",
        rowMode: 'array',
    };

    return client.query(query)
        .then((results) => {
            return results.rows[0];
        });
};

const insertResults = (year, total) => {

    const insertQuery = {
        text: 'INSERT INTO acs.results(year, total) VALUES($1, $2)',
        values: [year, total],
    };

    client.query(insertQuery, (err, res) => {
        if (err) {
            console.log(err.stack);
        }
    });
};

const getResults = () => {

    const query = {
        text: "SELECT * FROM acs.results",
        rowMode: 'array',
    };

    return client.query(query)
        .then((results) => {
            return results.rows;
        });
};

const truncateTable = () => {

    const truncateQuery = {
        text: "TRUNCATE TABLE acs.results",
    };

    client.query(truncateQuery, (err, res) => {
        if (err) {
            console.log(err.stack);
        }
    });
};

const getPeanutMedicationDays = (description) => {
    const query = {
        text: "SELECT average_time_interval FROM synthea.average_peanut_medication_statistics WHERE code = $1",
        rowMode: 'array',
    };

    return client.query(query, [description])
        .then((results) => {
            return results.rows[0];
        });
};

const getMedicationUnitsDispensed = (description) => {

    const query = {
        text: "SELECT average_dispensed FROM synthea.average_peanut_medication_statistics WHERE code = $1",
        rowMode: 'array',
    };

    return client.query(query, [description])
        .then((results) => {
            return results.rows[0];
        });
};

module.exports = {
    getSupplies,
    getPatientsByAge,
    getAllergies,
    getMedicationsByAge,
    getPopulationChange2020_2021,
    getTotalPeanutAllergyPatients,
    getTotalDiabeticPatients,
    getInsulinDays,
    getInsulinUnitsDispensed,
    getResults,
    insertResults,
    truncateTable,
    getPeanutMedicationDays,
    getMedicationUnitsDispensed
};
