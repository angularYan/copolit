import React from 'react';

const WeatherDisplay = ({ weatherData }) => {
    return (
        <div className="weather-display">
            {weatherData ? (
                <p>{weatherData}</p>
            ) : (
                <p>Please enter a city to see the weather.</p>
            )}
        </div>
    );
};

export default WeatherDisplay;