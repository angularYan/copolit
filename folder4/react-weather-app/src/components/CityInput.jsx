import React, { useState } from 'react';

const CityInput = ({ onFetchWeather }) => {
    const [city, setCity] = useState('');

    const handleInputChange = (event) => {
        setCity(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (city) {
            onFetchWeather(city);
            setCity('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="city-input">
            <input
                type="text"
                value={city}
                onChange={handleInputChange}
                placeholder="Enter city name"
                required
            />
            <button type="submit">Get Weather</button>
        </form>
    );
};

export default CityInput;