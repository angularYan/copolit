# Oracle Weather Project

## Overview
The Oracle Weather Project is designed to retrieve and display weather information for a specified city using an API. This project includes SQL scripts for setting up the database environment, defining necessary types, and implementing the logic to interact with the weather API.

## Project Structure
```
oracle-weather-project
├── src
│   ├── main.sql          # Main entry point for the project
│   ├── utils
│   │   └── weather_api.sql # Contains functions to interact with the weather API
│   └── types
│       └── city_type.sql  # Defines the city type with relevant attributes
├── scripts
│   └── setup.sql         # SQL commands to set up the database environment
└── README.md             # Project documentation
```

## Setup Instructions
1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd oracle-weather-project
   ```

2. **Run the setup script**:
   Execute the `setup.sql` script to create the necessary database structures:
   ```sql
   @scripts/setup.sql
   ```

3. **Define the city**:
   Use the `city_type.sql` to define the city you want to query.

4. **Retrieve Weather Information**:
   Execute the `main.sql` script to input the city name and retrieve the weather data:
   ```sql
   @src/main.sql
   ```

## Dependencies
- Oracle Database
- Access to a weather API (API key may be required)

## Configuration
Ensure that the weather API endpoint and any necessary credentials are configured in the `weather_api.sql` file.

## License
This project is licensed under the MIT License.