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

CREATE VIEW synthea.peanut_allergy_patients AS
SELECT description, COUNT(description) AS allergenic_patients
FROM synthea.allergies
WHERE description LIKE 'Peanut%'
GROUP BY description;

CREATE VIEW synthea.average_peanut_medication_statistics AS
SELECT code, description, ROUND(AVG(dispenses), 0) AS average_dispensed, DATE_PART('day', AVG(time_interval))::NUMERIC AS average_time_interval
FROM(SELECT DISTINCT (medications.patient_id), medications.code, medications.description, medications.dispenses, MAX(CURRENT_DATE) - MIN(start_date) AS time_interval
     FROM synthea.medications
              JOIN (SELECT medications.code, medications.description
                    FROM synthea.allergies
                             JOIN synthea.medications ON medications.encounter_id = allergies.encounter_id
                    WHERE allergies.description LIKE 'Peanut%'
                    GROUP BY medications.description, medications.code) AS peanut_allergy_medications
                   ON peanut_allergy_medications.description = medications.description
     GROUP BY medications.patient_id, medications.description, medications.code, medications.dispenses) AS peanut_medication_statistics
GROUP BY description, code ORDER BY description ASC;

CREATE VIEW synthea.diabetic_patients AS
SELECT reason_description AS description, COUNT(DISTINCT patient_id) AS diabetic_patients
FROM synthea.medications
WHERE reason_description LIKE 'Diabetes%' OR reason_description LIKE '%diabetes'
GROUP BY reason_description;

CREATE VIEW synthea.average_diabetic_medication_statistics AS
SELECT DATE_PART('day', AVG(time_interval))::NUMERIC AS average_time_interval, ROUND(AVG(total_units_dispensed), 0) AS average_units_dispensed
FROM (SELECT patient_id, (MAX(end_date)::timestamp - MIN(start_date)::timestamp) AS time_interval, SUM(dispenses)*100 as total_units_dispensed
      FROM synthea.medications
      WHERE reason_description LIKE 'Diabetes%' AND end_date IS NOT NULL
      GROUP BY patient_id) AS full_diabetic_statics;

CREATE VIEW synthea.pollen_allergy_patients AS
SELECT description, COUNT(DISTINCT patient_id) AS pollen_allergy_patients
FROM synthea.allergies
WHERE description LIKE '%pollen%'
GROUP BY description;

CREATE VIEW synthea.average_pollen_medication_statistics AS
SELECT code,description, ROUND(AVG(dispenses), 0) AS average_dispensed, DATE_PART('day', AVG(time_interval))::NUMERIC AS average_time_interval
FROM(SELECT DISTINCT (medications.patient_id), medications.code, medications.description, medications.dispenses, MAX(CURRENT_DATE) - MIN(start_date) AS time_interval
     FROM synthea.medications
              JOIN (SELECT medications.code, medications.description
                    FROM synthea.allergies
                             JOIN synthea.medications ON medications.encounter_id = allergies.encounter_id
                    WHERE allergies.description LIKE '%pollen%'
                    GROUP BY medications.description, medications.code) AS pollen_allergy_medications
                   ON pollen_allergy_medications.description = medications.description
     GROUP BY medications.patient_id, medications.description, medications.code, medications.dispenses) AS pollen_medication_statistics
GROUP BY description, code ORDER BY description ASC;
