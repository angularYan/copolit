# WeatherApp

## Overview
WeatherApp is a simple console application that allows users to input a city name and retrieve the current weather information for that city. The application utilizes an external weather API to fetch real-time weather data.

## Project Structure
The project is organized as follows:

```
WeatherApp
├── WeatherApp.sln
├── src
│   ├── WeatherApp
│   │   ├── Program.cs
│   │   ├── Services
│   │   │   └── WeatherService.cs
│   │   ├── Models
│   │   │   └── WeatherInfo.cs
│   │   └── WeatherApp.csproj
├── tests
│   ├── WeatherApp.Tests
│   │   ├── WeatherServiceTests.cs
│   │   └── WeatherApp.Tests.csproj
└── README.md
```

## Setup Instructions
1. Clone the repository to your local machine.
2. Navigate to the `src/WeatherApp` directory.
3. Restore the project dependencies by running:
   ```
   dotnet restore
   ```
4. Build the project using:
   ```
   dotnet build
   ```

## Usage
To run the application, execute the following command in the `src/WeatherApp` directory:
```
dotnet run
```
You will be prompted to enter a city name. After entering the city, the application will display the current weather information.

## Testing
To run the unit tests, navigate to the `tests/WeatherApp.Tests` directory and execute:
```
dotnet test
```
This will run all the tests defined in the `WeatherServiceTests.cs` file to ensure the functionality of the WeatherService class.

## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.