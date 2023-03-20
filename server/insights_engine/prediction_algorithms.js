const {
    getPopulationChange2020_2021,
    getTotalPeanutAllergyPatients,
    insertPeanutAllergyResults,
    getPeanutAllergyResults,
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

module.exports = {
    calculatePeanutAllergy,
};
