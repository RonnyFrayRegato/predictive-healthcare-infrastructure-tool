CREATE TABLE IF NOT EXISTS  patients
(
    id                  UUID PRIMARY KEY,
    birth_date          TIMESTAMP,
    death_date          TIMESTAMP,
    ssn                 TEXT,
    drivers             TEXT,
    passport            TEXT,
    prefix              TEXT,
    first_name          TEXT,
    last_name           TEXT,
    suffix              TEXT,
    maiden_name         TEXT,
    marital_status      TEXT,
    race                TEXT,
    ethnicity           TEXT,
    gender              TEXT,
    birth_place         TEXT,
    address             TEXT,
    city                TEXT,
    state               TEXT,
    country             TEXT,
    fips                TEXT,
    zip                 TEXT,
    lat                 NUMERIC,
    lon                 NUMERIC,
    healthcare_expenses MONEY,
    healthcare_coverage MONEY,
    income              MONEY
);

CREATE TABLE IF NOT EXISTS  organizations
(
    id          UUID PRIMARY KEY,
    name        TEXT,
    address     TEXT,
    city        TEXT,
    state       TEXT,
    zip         TEXT,
    lat         NUMERIC,
    lon         NUMERIC,
    phone       TEXT,
    revenue     NUMERIC,
    utilization NUMERIC
);

CREATE TABLE IF NOT EXISTS  providers
(
    id              UUID PRIMARY KEY,
    organization_id UUID,
    name            TEXT,
    gender          TEXT,
    specialty       TEXT,
    address         TEXT,
    city            TEXT,
    state           TEXT,
    zip             TEXT,
    lat             NUMERIC,
    lon             NUMERIC,
    encounters      NUMERIC,
    procedures      NUMERIC,
    FOREIGN KEY (organization_id) REFERENCES organizations (id)
);

CREATE TABLE IF NOT EXISTS  payers
(
    id                      TEXT PRIMARY KEY,
    name                    TEXT,
    ownership               TEXT,
    address                 TEXT,
    city                    TEXT,
    state_headquartered     TEXT,
    zip                     TEXT,
    phone                   TEXT,
    amount_covered          MONEY,
    amount_uncovered        MONEY,
    revenue                 MONEY,
    covered_encounters      NUMERIC,
    uncovered_encounters    NUMERIC,
    covered_medications     NUMERIC,
    uncovered_medications   NUMERIC,
    covered_procedures      NUMERIC,
    uncovered_procedures    NUMERIC,
    covered_immunizations   NUMERIC,
    uncovered_immunizations NUMERIC,
    unique_customers        NUMERIC,
    qols_avg                NUMERIC,
    member_months           NUMERIC
);

CREATE TABLE IF NOT EXISTS  encounters
(
    id                  UUID PRIMARY KEY,
    start_timestamp     TIMESTAMP,
    stop_timestamp      TIMESTAMP,
    patient_id          UUID,
    organization_id     UUID,
    provider_id         UUID,
    payer               TEXT,
    encounter_class     TEXT,
    code                TEXT,
    description         TEXT,
    base_encounter_cost MONEY,
    total_claim_cost    MONEY,
    payer_coverage      MONEY,
    reason_code         TEXT,
    reason_description  TEXT,
    FOREIGN KEY (patient_id) REFERENCES patients (id),
    FOREIGN KEY (organization_id) REFERENCES organizations (id),
    FOREIGN KEY (provider_id) REFERENCES providers (id),
    FOREIGN KEY (payer) REFERENCES payers (id)
);

CREATE TABLE IF NOT EXISTS  allergies
(
    start_timestamp TIMESTAMP,
    stop_timestamp  TIMESTAMP,
    patient_id      UUID,
    encounter_id    UUID,
    code            NUMERIC,
    system          TEXT,
    description     TEXT,
    type            TEXT,
    category        TEXT,
    reaction1       TEXT,
    description1    TEXT,
    severity1       TEXT,
    reaction2       TEXT,
    description2    TEXT,
    severity2       TEXT,
    FOREIGN KEY (patient_id) REFERENCES patients (id),
    FOREIGN KEY (encounter_id) REFERENCES encounters (id)
);

CREATE TABLE IF NOT EXISTS  careplans
(
    id                 UUID,
    start_timestamp    TIMESTAMP,
    stop_timestamp     TIMESTAMP,
    patient_id         UUID,
    encounter_id       UUID,
    code               TEXT,
    description        TEXT,
    reason_code        TEXT,
    reason_description TEXT,
    FOREIGN KEY (patient_id) REFERENCES patients (id),
    FOREIGN KEY (encounter_id) REFERENCES encounters (id)
);

CREATE TABLE IF NOT EXISTS  claims
(
    id                             UUID PRIMARY KEY,
    patient_id                     UUID,
    provider_id                    UUID,
    primary_patient_insurance_id   TEXT,
    secondary_patient_insurance_id TEXT,
    department_id                  NUMERIC,
    patient_department_id          NUMERIC,
    diagnosis1                     TEXT,
    diagnosis2                     TEXT,
    diagnosis3                     TEXT,
    diagnosis4                     TEXT,
    diagnosis5                     TEXT,
    diagnosis6                     TEXT,
    diagnosis7                     TEXT,
    diagnosis8                     TEXT,
    referring_provider_id          UUID,
    appointment_id                 UUID,
    current_illness_date           TIMESTAMP,
    service_date                   TIMESTAMP,
    supervising_provider_id        UUID,
    status1                        TEXT,
    status2                        TEXT,
    statusP                        TEXT,
    outstanding1                   MONEY,
    outstanding2                   MONEY,
    outstandingP                   MONEY,
    last_billed_date1              TIMESTAMP,
    last_billed_date2              TIMESTAMP,
    last_billed_dateP              TIMESTAMP,
    healthcare_claim_type_id1      NUMERIC,
    healthcare_claim_type_id2      NUMERIC,
    FOREIGN KEY (patient_id) REFERENCES patients (id),
    FOREIGN KEY (provider_id) REFERENCES providers (id),
    FOREIGN KEY (referring_provider_id) REFERENCES providers (id),
    FOREIGN KEY (appointment_id) REFERENCES encounters (id),
    FOREIGN KEY (supervising_provider_id) REFERENCES providers (id)
);

CREATE TABLE IF NOT EXISTS  payer_transitions
(
    patient         UUID,
    member_id       UUID,
    start_date      TIMESTAMP,
    end_date        TIMESTAMP,
    payer           TEXT,
    secondary_payer TEXT,
    plan_ownership  TEXT,
    owner_name      TEXT,
    FOREIGN KEY (patient) REFERENCES patients ("id"),
    FOREIGN KEY (payer) REFERENCES payers ("id"),
    FOREIGN KEY (secondary_payer) REFERENCES payers ("id")
);

CREATE TABLE IF NOT EXISTS  claims_transactions
(
    "id"                    UUID PRIMARY KEY,
    claim_id                UUID,
    charge_id               NUMERIC,
    patient_id              UUID,
    "type"                  TEXT,
    amount                  MONEY,
    "method"                TEXT,
    from_date               TIMESTAMP,
    to_date                 TIMESTAMP,
    place_of_service        UUID,
    procedure_code          TEXT,
    modifier1               TEXT,
    modifier2               TEXT,
    diagnosis_ref1          NUMERIC,
    diagnosis_ref2          NUMERIC,
    diagnosis_ref3          NUMERIC,
    diagnosis_ref4          NUMERIC,
    units                   NUMERIC,
    department_id           NUMERIC,
    notes                   TEXT,
    unit_amount             MONEY,
    transfer_out_id         NUMERIC,
    transfer_type           TEXT,
    payments                MONEY,
    adjustments             MONEY,
    transfers               MONEY,
    outstanding             MONEY,
    appointment_id          UUID,
    line_note               TEXT,
    patient_insurance_id    UUID,
    fee_schedule_id         NUMERIC,
    provider_id             UUID,
    supervising_provider_id UUID,
    FOREIGN KEY (claim_id) REFERENCES claims ("id"),
    FOREIGN KEY (patient_id) REFERENCES patients ("id"),
    FOREIGN KEY (place_of_service) REFERENCES organizations ("id"),
    FOREIGN KEY (appointment_id) REFERENCES encounters ("id"),
    FOREIGN KEY (provider_id) REFERENCES providers ("id"),
    FOREIGN KEY (supervising_provider_id) REFERENCES providers ("id")
);

CREATE TABLE IF NOT EXISTS  conditions
(
    "start"     TIMESTAMP,
    stop        TIMESTAMP,
    patient     UUID,
    encounter   UUID,
    code        TEXT,
    description TEXT,
    FOREIGN KEY (patient) REFERENCES patients ("id")
);

CREATE TABLE IF NOT EXISTS  devices
(
    "start"     TIMESTAMP,
    stop        TIMESTAMP,
    patient     UUID,
    encounter   UUID,
    code        TEXT,
    description TEXT,
    udi         TEXT,
    FOREIGN KEY (patient) REFERENCES patients ("id"),
    FOREIGN KEY (encounter) REFERENCES encounters ("id")
);

CREATE TABLE IF NOT EXISTS  imaging_studies
(
    "id"                  UUID,
    "date"                TIMESTAMP,
    patient               UUID,
    encounter             UUID,
    series_uid            TEXT,
    body_site_code        NUMERIC,
    body_site_description TEXT,
    modality_code         TEXT,
    modality_description  TEXT,
    instance_uid          TEXT,
    sop_code              TEXT,
    sop_description       TEXT,
    procedure_code        TEXT,
    FOREIGN KEY (patient) REFERENCES patients ("id"),
    FOREIGN KEY (encounter) REFERENCES encounters ("id")
);

CREATE TABLE IF NOT EXISTS  immunizations
(
    date        TIMESTAMP,
    patient     UUID,
    encounter   UUID,
    code        TEXT,
    description TEXT,
    base_cost   MONEY,
    FOREIGN KEY (patient) REFERENCES patients ("id"),
    FOREIGN KEY (encounter) REFERENCES encounters ("id")
);

CREATE TABLE IF NOT EXISTS  medications
(
    start_date         TIMESTAMP,
    end_date           TIMESTAMP,
    patient_id         UUID,
    payer              TEXT,
    encounter_id       UUID,
    code               NUMERIC,
    description        TEXT,
    base_cost          MONEY,
    payer_coverage     MONEY,
    dispenses          NUMERIC,
    total_cost         MONEY,
    reason_code        NUMERIC,
    reason_description TEXT,
    FOREIGN KEY (patient_id) REFERENCES patients (id),
    FOREIGN KEY (payer) REFERENCES payers (id),
    FOREIGN KEY (encounter_id) REFERENCES encounters (id)
);

CREATE TABLE IF NOT EXISTS observations
(
    date         TIMESTAMP,
    patient_id   UUID,
    encounter_id UUID,
    category     TEXT,
    code         TEXT,
    description  TEXT,
    value        TEXT,
    units        TEXT,
    type         TEXT,
    FOREIGN KEY (patient_id) REFERENCES patients (id),
    FOREIGN KEY (encounter_id) REFERENCES encounters (id)
);

CREATE TABLE IF NOT EXISTS  procedures
(
    start_date         TIMESTAMP,
    end_date           TIMESTAMP,
    patient_id         UUID,
    encounter_id       UUID,
    code               TEXT,
    description        TEXT,
    base_cost          MONEY,
    reason_code        TEXT,
    reason_description TEXT,
    FOREIGN KEY (patient_id) REFERENCES patients (id),
    FOREIGN KEY (encounter_id) REFERENCES encounters (id)
);

CREATE TABLE IF NOT EXISTS  supplies
(
    date         TIMESTAMP,
    patient_id   UUID,
    encounter_id UUID,
    code         TEXT,
    description  TEXT,
    quantity     NUMERIC,
    FOREIGN KEY (patient_id) REFERENCES patients (id),
    FOREIGN KEY (encounter_id) REFERENCES encounters (id)
);
