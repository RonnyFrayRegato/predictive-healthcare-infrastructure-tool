#!/usr/bin/env bash

# Start Docker containers
echo "Starting containers..."
sudo docker start pg
sudo docker start synthea

# Delete existing database
sudo docker exec -i pg psql -U postgres -c "DROP DATABASE phit WITH (FORCE);"

# Create PHIT database and Synthea schema
echo "Creating Synthea database..."
sudo docker exec -i pg psql -U postgres -c "CREATE DATABASE phit;"
sudo docker exec -i pg psql -U postgres -d phit -c "CREATE SCHEMA IF NOT EXISTS synthea;"

# Create relation structure for database
echo "Creating relation structure for database..."
pwd
sudo docker cp /sql/synthea_template.sql pg:/home
sudo docker exec -i pg psql -U postgres -d phit -f "/home/synthea_template.sql"

# Generate Synthea Data
sudo docker exec -i synthea bash -c "java -jar synthea-with-dependencies.jar -p 1000 --exporter.csv.export true"

# Copy CSV contents into database
echo "Copying CSV contents into database..."
declare -a array=("patients" "organizations" "providers" "payers" "encounters" "allergies" "careplans" "claims" "payer_transitions" "claims_transactions"\
  "conditions" "devices" "imaging_studies" "immunizations" "medications" "observations" "procedures" "supplies")

for FILE in "${array[@]}"; do
  sudo docker exec -i pg psql -U postgres -d phit -c "SET schema 'synthea';" -c "COPY ${FILE} FROM '/home/${FILE}.csv' WITH (format csv, header true, delimiter ',');"
done

# Create database Views
echo "Creating database views..."
sudo docker cp /sql/views_template.sql pg:/home
sudo docker exec -i pg psql -U postgres -d phit -f "/home/views_template.sql"
