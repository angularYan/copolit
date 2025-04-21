import axios from 'axios';

const BASE_URL = 'https://api.open-meteo.com/v1/forecast';

export const fetchWeather = async (city) => {
    try {
        const geocodingUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${city}`;
        const geocodingResponse = await axios.get(geocodingUrl);
        const location = geocodingResponse.data.results[0];

        const weatherUrl = `${BASE_URL}?latitude=${location.latitude}&longitude=${location.longitude}&current_weather=true`;
        const weatherResponse = await axios.get(weatherUrl);

        return {
            city: location.name,
            temperature: weatherResponse.data.current_weather.temperature,
            condition: weatherResponse.data.current_weather.weathercode,
        };
    } catch (error) {
        throw new Error('Failed to fetch weather data');
    }
};