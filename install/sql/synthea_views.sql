CREATE VIEW synthea."medication_filled_by_age_ascending" AS
SELECT patients.id, date_part('year', age(birth_date)) AS years_old, medications.code, medications.description, medications.dispenses
FROM synthea.patients
INNER JOIN synthea.medications ON medications.patient_id = patients.id
ORDER BY years_old ASC;

CREATE VIEW synthea."patient_diagnosis_by_age_ascending" AS
SELECT patients.id, date_part('year', age(birth_date)) AS years_old, conditions.Code, conditions.Description
FROM synthea.patients
INNER JOIN synthea.conditions ON conditions.patient_id = patients.id
ORDER BY years_old ASC;

CREATE VIEW synthea.peanut_allergenic AS
SELECT description, COUNT(description) AS allergenic_patients
FROM synthea.allergies
WHERE description = 'Peanut (substance)'
GROUP BY description;
