const {
    getPopulationChange2020_2021,
    getTotalPeanutAllergyPatients,
    getTotalDiabeticPatients,
    getInsulinDays,
    getInsulinUnitsDispensed,
    getResults,
    insertResults,
    truncateTable,
    getPeanutMedicationDays,
    getPeanutMedicationUnitsDispensed,
    getPollenMedicationDays,
    getPollenMedicationUnitsDispensed,
    getTotalPollenAllergyPatients,
} = require('../db/queries');

async function calculatePeanutAllergy() {
    return new Promise(async (resolve, reject) => {
        try {
            truncateTable();

            let populationChange = await getPopulationChange2020_2021();
            populationChange = parseFloat(populationChange[0]) + 1;

            let patientsWithPeanutAllergy = await getTotalPeanutAllergyPatients();
            patientsWithPeanutAllergy = parseFloat(patientsWithPeanutAllergy[0]);
            let currentYear = 2023;
            const predictYear = 2045;
            for (currentYear; currentYear < predictYear + 1; currentYear++) {

                await insertResults(currentYear, patientsWithPeanutAllergy.toFixed(3));

                patientsWithPeanutAllergy = patientsWithPeanutAllergy * populationChange;
            }

            const peanutAllergyResults = await getResults();
            resolve(peanutAllergyResults);
        } catch (error) {
            reject(error);
        }
    });
}

async function calculateDiabetic() {
    return new Promise(async (resolve, reject) => {
        try {
            truncateTable();

            let populationChange = await getPopulationChange2020_2021();
            populationChange = parseFloat(populationChange[0]) + 1;

            let patientsWithDiabetes = await getTotalDiabeticPatients();
            patientsWithDiabetes = parseFloat(patientsWithDiabetes[0]);
            let currentYear = 2023;
            const predictYear = 2045;
            for (currentYear; currentYear < predictYear + 1; currentYear++) {

                await insertResults(currentYear, patientsWithDiabetes.toFixed(3));

                patientsWithDiabetes = patientsWithDiabetes * populationChange;
            }

            const diabeticResults = await getResults();
            resolve(diabeticResults);
        } catch (error) {
            reject(error);
        }
    });
}

async function calculateInsulin() {
    return new Promise(async (resolve, reject) => {
        try {
            truncateTable();


            let populationChange = await getPopulationChange2020_2021();
            populationChange = parseFloat(populationChange[0]) + 1;


            let insulinPerDay = await getInsulinDays();
            let insulinPerYear = parseFloat(insulinPerDay[0]) / 365;

            let totalInsulinUnits = await getInsulinUnitsDispensed();
            totalInsulinUnits = parseFloat(totalInsulinUnits[0]);

            let unitsPerYear = totalInsulinUnits / insulinPerYear;

            let patientsWithDiabetes = await getTotalDiabeticPatients();
            patientsWithDiabetes = parseFloat(patientsWithDiabetes[0]);

            let totalInsulinUsedPerYear = unitsPerYear * patientsWithDiabetes;

            let currentYear = 2023;
            const predictYear = 2045;
            for (currentYear; currentYear < predictYear + 1; currentYear++) {

                await insertResults(currentYear, totalInsulinUsedPerYear.toFixed(3));

                totalInsulinUsedPerYear = totalInsulinUsedPerYear * populationChange;
            }

            const insulinResults = await getResults();
            resolve(insulinResults);
        } catch (error) {
            reject(error);
        }
    });
}

async function calculatePeanutMedication(description) {
    return new Promise(async (resolve, reject) => {
        try {
            truncateTable();

            let populationChange = await getPopulationChange2020_2021();
            populationChange = parseFloat(populationChange[0]) + 1;

            let medicationPerDay = await getPeanutMedicationDays(description);
            let medicationsPerYear = parseFloat(medicationPerDay[0]) / 365;

            let totalMedicationUnits = await getPeanutMedicationUnitsDispensed(description);
            totalMedicationUnits = parseFloat(totalMedicationUnits[0]);

            let unitsPerYear = totalMedicationUnits / medicationsPerYear;

            let patientsWithPeanutAllergy = await getTotalPeanutAllergyPatients();
            patientsWithPeanutAllergy = parseFloat(patientsWithPeanutAllergy[0]);

            let totalMedicationUsedPerYear = unitsPerYear * patientsWithPeanutAllergy;

            let currentYear = 2023;
            const predictYear = 2045;
            for (currentYear; currentYear < predictYear + 1; currentYear++) {

                await insertResults(currentYear, totalMedicationUsedPerYear.toFixed(3));

                totalMedicationUsedPerYear = totalMedicationUsedPerYear * populationChange;
            }

            const medicationResults = await getResults();
            resolve(medicationResults);
        } catch (error) {
            reject(error);
        }
    });
}

async function calculatePollenAllergy() {
    return new Promise(async (resolve, reject) => {
        try {
            truncateTable();

            let populationChange = await getPopulationChange2020_2021();
            populationChange = parseFloat(populationChange[0]) + 1;

            let patientsWithPollenAllergy = await getTotalPollenAllergyPatients();
            patientsWithPollenAllergy = parseFloat(patientsWithPollenAllergy[0]);
            let currentYear = 2023;
            const predictYear = 2045;
            for (currentYear; currentYear < predictYear + 1; currentYear++) {

                await insertResults(currentYear, patientsWithPollenAllergy.toFixed(3));

                patientsWithPollenAllergy = patientsWithPollenAllergy * populationChange;
            }

            const pollenAllergyResults = await getResults();
            resolve(pollenAllergyResults);
        } catch (error) {
            reject(error);
        }
    });
}

async function calculatePollenMedication(description) {
    return new Promise(async (resolve, reject) => {
        try {
            truncateTable();

            let populationChange = await getPopulationChange2020_2021();
            populationChange = parseFloat(populationChange[0]) + 1;

            let medicationPerDay = await getPollenMedicationDays(description);
            let medicationsPerYear = parseFloat(medicationPerDay[0]) / 365;

            let totalMedicationUnits = await getPollenMedicationUnitsDispensed(description);
            totalMedicationUnits = parseFloat(totalMedicationUnits[0]);

            let unitsPerYear = totalMedicationUnits / medicationsPerYear;

            let patientsWithPollenAllergy = await getTotalPollenAllergyPatients();
            patientsWithPollenAllergy = parseFloat(patientsWithPollenAllergy[0]);

            let totalMedicationUsedPerYear = unitsPerYear * patientsWithPollenAllergy;

            let currentYear = 2023;
            const predictYear = 2045;
            for (currentYear; currentYear < predictYear + 1; currentYear++) {

                await insertResults(currentYear, totalMedicationUsedPerYear.toFixed(3));

                totalMedicationUsedPerYear = totalMedicationUsedPerYear * populationChange;
            }

            const medicationResults = await getResults();
            resolve(medicationResults);
        } catch (error) {
            reject(error);
        }
    });
}

module.exports = {
    calculatePeanutAllergy,
    calculateDiabetic,
    calculateInsulin,
    calculatePeanutMedication,
    calculatePollenMedication,
    calculatePollenAllergy,
};
