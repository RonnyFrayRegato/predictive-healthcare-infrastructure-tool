CREATE TABLE IF NOT EXISTS acs.population_change
(
    state 			TEXT,
    year_range		TEXT,
    percent_change	NUMERIC
);

CREATE TABLE IF NOT EXISTS acs.results
(
    year		    TEXT,
    total	NUMERIC
);
