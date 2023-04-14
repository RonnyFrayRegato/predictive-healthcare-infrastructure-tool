#!/usr/bin/env bash

# Start Docker containers
echo "Starting containers..."
sudo docker start pg
sudo docker start synthea

# Delete existing database
sudo docker exec -it pg psql -U postgres -c "DROP DATABASE phit WITH (FORCE);"

# Create PHIT database and Synthea schema
echo "Creating PHIT database..."
sudo docker exec -it pg psql -U postgres -c "CREATE DATABASE phit;"
sudo docker exec -it pg psql -U postgres -d phit -c "CREATE SCHEMA IF NOT EXISTS synthea;"

# Create relation structure for database
echo "Creating relation structure for database..."
sudo docker cp /home/runner/work/predictive-healthcare-infrastructure-tool/predictive-healthcare-infrastructure-tool/install/sql/synthea_tables.sql pg:/home
sudo docker exec -it pg psql -U postgres -d phit -f "/home/synthea_tables.sql"

# Generate Synthea data
read -p "Enter desired population value: " population
sudo docker exec -it synthea bash -c "cd synthea/ && ./run_synthea -p ${population} --exporter.csv.export true"

# Copy CSV contents into database
echo "Copying CSV contents into database..."
declare -a array=("patients" "organizations" "providers" "payers" "encounters" "allergies" "careplans" "claims" "payer_transitions" "claims_transactions"\
  "conditions" "devices" "imaging_studies" "immunizations" "medications" "observations" "procedures" "supplies")

for FILE in "${array[@]}"; do
  sudo docker exec -it pg psql -U postgres -d phit -c "SET schema 'synthea';" -c "COPY ${FILE} FROM '/home/${FILE}.csv' WITH (format csv, header true, delimiter ',');"
done

# Create database views
echo "Creating database views..."
sudo docker cp /home/runner/work/predictive-healthcare-infrastructure-tool/predictive-healthcare-infrastructure-tool/install/sql/synthea_views.sql pg:/home
sudo docker exec -it pg psql -U postgres -d phit -f "/home/synthea_views.sql"

# Run Insights Engine algorithm using ACS API
echo "Generating Insights Engine output..."
cd insights-engine/
python3 acs_engine.py
cd ..

# Copy Insights Engine output to database
echo "Copying Insights Engine output to database..."
sudo docker exec -it pg psql -U postgres -d phit -c "CREATE SCHEMA IF NOT EXISTS acs;"
sudo docker cp /home/runner/work/predictive-healthcare-infrastructure-tool/predictive-healthcare-infrastructure-tool/install/insights-engine/population_data.csv pg:/home
sudo docker cp /home/runner/work/predictive-healthcare-infrastructure-tool/predictive-healthcare-infrastructure-tool/install/sql/api_views.sql pg:/home
sudo docker exec -it pg psql -U postgres -d phit -f "/home/api_views.sql"
sudo docker exec -it pg psql -U postgres -d phit -c "SET schema 'acs';" -c "COPY population_change FROM '/home/population_data.csv' WITH (format csv, header true, delimiter ',');"
