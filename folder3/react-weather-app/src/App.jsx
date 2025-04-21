import React, { useState } from 'react';
import WeatherForm from './components/WeatherForm';
import WeatherDisplay from './components/WeatherDisplay';

const App = () => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState('');

    const fetchWeather = async (cityName) => {
        // Simulate an API call to the backend function get_weather
        // In a real application, you would replace this with an actual API call
        const response = await fetch(`/api/weather?city=${cityName}`);
        const data = await response.text();
        setWeatherData(data);
    };

    const handleCitySubmit = (cityName) => {
        setCity(cityName);
        fetchWeather(cityName);
    };

    return (
        <div className="App">
            <WeatherForm onCitySubmit={handleCitySubmit} />
            <WeatherDisplay weatherData={weatherData} />
        </div>
    );
};

export default App;