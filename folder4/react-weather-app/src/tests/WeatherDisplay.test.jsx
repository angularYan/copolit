import React from 'react';
import { render, screen } from '@testing-library/react';
import WeatherDisplay from '../components/WeatherDisplay';

describe('WeatherDisplay Component', () => {
    test('renders weather data when provided', () => {
        const weatherData = 'Sunny, 25°C';
        render(<WeatherDisplay weatherData={weatherData} />);
        expect(screen.getByText(weatherData)).toBeInTheDocument();
    });

    test('renders prompt when no weather data is provided', () => {
        render(<WeatherDisplay weatherData={null} />);
        expect(screen.getByText(/Please enter a city to see the weather./i)).toBeInTheDocument();
    });
});