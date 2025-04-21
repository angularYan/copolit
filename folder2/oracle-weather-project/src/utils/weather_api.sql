CREATE OR REPLACE FUNCTION get_weather(city_name IN VARCHAR2) RETURN VARCHAR2 IS
    weather_data VARCHAR2(4000);
BEGIN
    -- Here you would typically make an API call to a weather service.
    -- For demonstration purposes, we will simulate the response.
    
    -- Simulated weather data response
    weather_data := 'Weather data for ' || city_name || ': Sunny, 25°C';

    RETURN weather_data;
EXCEPTION
    WHEN OTHERS THEN
        RETURN 'Error retrieving weather data';
END get_weather;