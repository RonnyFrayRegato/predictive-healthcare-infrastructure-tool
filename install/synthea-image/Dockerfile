# Use an official Oracle Linux base image
FROM oraclelinux:8

# Install dependencies
RUN yum update -y && \
    yum install -y curl && \
    yum install -y java-11-openjdk && \
    yum clean all 

# Set working directory to "synthea" folder
WORKDIR /synthea

# Download jar file from Synthea GitHub
RUN curl -L -o synthea-with-dependencies.jar https://github.com/synthetichealth/synthea/releases/download/master-branch-latest/synthea-with-dependencies.jar
