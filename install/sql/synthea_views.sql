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

CREATE VIEW synthea.diabetic_patients AS
SELECT reason_description AS description, COUNT(DISTINCT patient_id) AS diabetic_patients
FROM synthea.medications
WHERE reason_description LIKE 'Diabetes%' OR reason_description LIKE '%diabetes'
GROUP BY reason_description;

CREATE VIEW synthea.average_diabetic_statistics AS
SELECT DATE_TRUNC('day', AVG(time_interval)) AS average_time_inteval, ROUND(AVG(total_units_dispensed), 0) AS average_total_units_dispensed
FROM (SELECT patient_id, (MAX(end_date)::timestamp - MIN(start_date)::timestamp) AS time_interval, SUM(dispenses)*100 as total_units_dispensed
      FROM synthea.medications
      WHERE reason_description LIKE 'Diabetes%' AND end_date IS NOT NULL
      GROUP BY patient_id) AS full_diabetic_statics;
