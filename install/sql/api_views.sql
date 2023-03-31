CREATE TABLE IF NOT EXISTS acs.population_change
(
    state 			TEXT,
    year_range		TEXT,
    percent_change	NUMERIC
);

CREATE TABLE IF NOT EXISTS acs.peanut_allergy_results
(
    year		    TEXT,
    total_patients	NUMERIC
);

CREATE TABLE IF NOT EXISTS acs.diabetic_results
(
    year		    TEXT,
    total_patients	NUMERIC
);

CREATE TABLE IF NOT EXISTS acs.insulin_results
(
    year		    TEXT,
    total_units	NUMERIC
);