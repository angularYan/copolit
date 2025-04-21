import React, { useState } from 'react';

const WeatherForm = ({ onFetchWeather }) => {
    const [city, setCity] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (city) {
            onFetchWeather(city);
            setCity('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter city name"
                required
            />
            <button type="submit">Get Weather</button>
        </form>
    );
};

export default WeatherForm;