import React, { useState } from 'react';
import CityInput from './components/CityInput';
import WeatherDisplay from './components/WeatherDisplay';
import { fetchWeather } from './services/weatherService';

const App = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [city, setCity] = useState('');

    const handleFetchWeather = async (cityName) => {
        const data = await fetchWeather(cityName);
        setWeatherData(data);
    };

    return (
        <div className="app">
            <h1>Weather App</h1>
            <CityInput onFetchWeather={handleFetchWeather} setCity={setCity} />
            <WeatherDisplay weatherData={weatherData} />
        </div>
    );
};

export default App;