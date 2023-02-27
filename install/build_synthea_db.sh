#!/usr/bin/env bash

# Start Docker containers
echo "Starting containers..."
sudo docker start pg
sudo docker start synthea

# Create PHIT database and Synthea schema
echo "Creating Synthea database..."
sudo docker exec -it pg psql -U postgres -c "CREATE DATABASE phit;"
sudo docker exec -it pg psql -U postgres -d phit -c "CREATE SCHEMA IF NOT EXISTS synthea;"

# Create relation structure for database
echo "Creating relation structure for database..."
sudo chmod +x synthea_template.sql
sudo docker cp /home/ubuntu/synthea_template.sql pg:/home
sudo docker exec -it pg psql -U postgres -d phit -f "/home/synthea_template.sql"

# Copy CSV contents into database
echo "Copying CSV contents into database..."
declare -a array=("patients" "organizations" "providers" "payers" "encounters" "allergies" "careplans" "claims" "payer_transitions" "claims_transactions" "conditions" "devices" "imaging_studies" "immunizations" "medications" "observations" "procedures" "supplies")

for FILE in "${array[@]}"; do
  sudo docker exec -it pg psql -U postgres -d phit -c "SET schema 'synthea';"
  sudo docker exec -it pg psql -U postgres -d phit -c "COPY ${FILE} FROM '/home/output/csv/${FILE}.csv' WITH (format csv, header true, delimiter ',');"
done
