import requests
import csv

# Define API endpoint and parameters
acs_2015_url = "https://api.census.gov/data/2015/acs/acs5"
acs_2015_params = {
    "get": "NAME,B01001_001E",
    "for": "state:12"
}

acs_2020_url = "https://api.census.gov/data/2020/acs/acs5"
acs_2020_params = {
    "get": "NAME,B01001_001E",
    "for": "state:12"
}

acs_2021_url = "https://api.census.gov/data/2021/acs/acs5"
acs_2021_params = {
    "get": "NAME,B01001_001E",
    "for": "state:12"
}

# Make API request and parse response
acs_2015_response = requests.get(acs_2015_url, params=acs_2015_params)
acs_2015_data = acs_2015_response.json()

acs_2020_response = requests.get(acs_2020_url, params=acs_2020_params)
acs_2020_data = acs_2020_response.json()

acs_2021_response = requests.get(acs_2021_url, params=acs_2021_params)
acs_2021_data = acs_2021_response.json()

# Print Florida population data
print(f"Population in {acs_2015_data[1][0]} (2015): {int(acs_2015_data[1][1]):,}")
print(f"Population in {acs_2020_data[1][0]} (2020): {int(acs_2020_data[1][1]):,}")
print(f"Population in {acs_2021_data[1][0]} (2021): {int(acs_2021_data[1][1]):,}")

# Calculate percentage increase
percent_increase_2020_2021 = (1 - (float(acs_2020_data[1][1])) / (float(acs_2021_data[1][1])))
percent_increase_2015_2020 = (1 - (float(acs_2015_data[1][1])) / (float(acs_2020_data[1][1])))

# Generate CSV file
with open('population_data.csv', mode='w', newline='') as file:
    writer = csv.writer(file)
    writer.writerow(['State', 'Year Range', '% Change'])

    # Write data for 2015-2020 to CSV
    writer.writerow([acs_2020_data[1][0], '2015-2020', percent_increase_2015_2020])

    # Write data for 2020-2021 to CSV
    writer.writerow([acs_2021_data[1][0], '2020-2021', percent_increase_2020_2021])

print("Population data written to CSV file successfully!")
