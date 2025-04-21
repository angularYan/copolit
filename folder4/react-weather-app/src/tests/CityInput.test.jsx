import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CityInput from '../components/CityInput';

describe('CityInput Component', () => {
    test('renders input field and button', () => {
        render(<CityInput fetchWeather={jest.fn()} />);
        const inputElement = screen.getByPlaceholderText(/enter city/i);
        const buttonElement = screen.getByRole('button', { name: /get weather/i });
        
        expect(inputElement).toBeInTheDocument();
        expect(buttonElement).toBeInTheDocument();
    });

    test('captures user input and calls fetchWeather on button click', () => {
        const fetchWeatherMock = jest.fn();
        render(<CityInput fetchWeather={fetchWeatherMock} />);
        
        const inputElement = screen.getByPlaceholderText(/enter city/i);
        const buttonElement = screen.getByRole('button', { name: /get weather/i });

        fireEvent.change(inputElement, { target: { value: 'New York' } });
        fireEvent.click(buttonElement);

        expect(fetchWeatherMock).toHaveBeenCalledWith('New York');
    });
});