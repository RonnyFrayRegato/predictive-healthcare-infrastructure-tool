const {
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
    insertInsulinResults,
} = require('../db/queries');

async function calculatePeanutAllergy() {
    return new Promise(async (resolve, reject) => {
        try {
            let populationChange = await getPopulationChange2020_2021();
            populationChange = parseFloat(populationChange[0]) + 1;

            let patientsWithPeanutAllergy = await getTotalPeanutAllergyPatients();
            patientsWithPeanutAllergy = parseFloat(patientsWithPeanutAllergy[0]);
            let currentYear = 2023;
            const predictYear = 2045;
            for (currentYear; currentYear < predictYear + 1; currentYear++) {

                await insertPeanutAllergyResults(currentYear, patientsWithPeanutAllergy);

                patientsWithPeanutAllergy = patientsWithPeanutAllergy * populationChange;
            }

            const peanutAllergyResults = await getPeanutAllergyResults();
            resolve(peanutAllergyResults);
        } catch (error) {
            reject(error);
        }
    });
}


async function calculateDiabetic() {
    return new Promise(async (resolve, reject) => {
        try {
            let populationChange = await getPopulationChange2020_2021();
            populationChange = parseFloat(populationChange[0]) + 1;

            let patientsWithDiabetes = await getTotalDiabeticPatients();
            patientsWithDiabetes = parseFloat(patientsWithDiabetes[0]);
            let currentYear = 2023;
            const predictYear = 2045;
            for (currentYear; currentYear < predictYear + 1; currentYear++) {

                await insertDiabeticResults(currentYear, patientsWithDiabetes);

                patientsWithDiabetes = patientsWithDiabetes * populationChange;
            }

            const diabeticResults = await getDiabeticResults();
            resolve(diabeticResults);
        } catch (error) {
            reject(error);
        }
    });
}

async function calculateInsulin() {
    return new Promise(async (resolve, reject) => {
        try {
            let populationChange = await getPopulationChange2020_2021();
            populationChange = parseFloat(populationChange[0]) + 1;


            let insulinDays = await getInsulinDays();
            let insulinYears = parseFloat(insulinDays[0]) / 365;

            let totalInsulinUnits = await getInsulinUnitsDispensed();
            totalInsulinUnits = parseFloat(totalInsulinUnits[0]);



            let unitsPerYear = totalInsulinUnits / insulinYears;


            let currentYear = 2023;
            const predictYear = 2045;
            for (currentYear; currentYear < predictYear + 1; currentYear++) {

                await insertInsulinResults(currentYear, unitsPerYear);

                unitsPerYear = unitsPerYear * populationChange;
            }

            const insulinResults = await getInsulinResults();
            resolve(insulinResults);
        } catch (error) {
            reject(error);
        }
    });
}



module.exports = {
    calculatePeanutAllergy,
    calculateDiabetic,
    calculateInsulin
};
