# React Weather App

This is a simple React application that allows users to input a city name and fetch the current weather data for that city.

## Project Structure

```
react-weather-app
├── public
│   └── index.html
├── src
│   ├── components
│   │   ├── WeatherDisplay.jsx
│   │   └── CityInput.jsx
│   ├── services
│   │   └── weatherService.js
│   ├── tests
│   │   ├── WeatherDisplay.test.jsx
│   │   └── CityInput.test.jsx
│   ├── App.jsx
│   ├── index.js
│   └── styles.css
├── package.json
└── README.md
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd react-weather-app
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

1. Start the development server:
   ```
   npm start
   ```
2. Open your browser and go to `http://localhost:3000`.
3. Enter a city name in the input field and press enter to see the weather data.

## Components

- **WeatherDisplay**: Displays the weather information or a prompt to enter a city.
- **CityInput**: Allows users to input a city name and fetch the weather data.

## Services

- **weatherService**: Contains the function to fetch weather data from an API.

## Testing

Unit tests are provided for both components. To run the tests, use:
```
npm test
```

## License

This project is licensed under the MIT License.