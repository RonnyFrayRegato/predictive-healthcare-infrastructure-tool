# Build the Synthea Docker image:
docker build -t synthea -f /home/ubuntu/predictive-healthcare-infrastructure-tool/install/synthea-image/Dockerfile .

# Run image as a Docker container:
docker run -it -d --name=synthea synthea

# Ask user for population value
read -p "Enter Desired population value: " population

# Generate population of synthetic patients
docker exec -it synthea bash -c "cd synthea/ && ./run_synthea -p ${population} --exporter.csv.export true"
