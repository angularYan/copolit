-- This file is the main entry point for the Oracle project.
-- It contains the logic to take a city as input and call the weather API to retrieve and display the weather information for that city.

DECLARE
    city_name VARCHAR2(100);
    weather_info VARCHAR2(4000);
BEGIN
    -- Prompt user for city input
    DBMS_OUTPUT.PUT_LINE('Enter the city name:');
    city_name := '&city_name';

    -- Call the weather API function to get weather information
    weather_info := get_weather(city_name);

    -- Display the weather information
    DBMS_OUTPUT.PUT_LINE('Weather information for ' || city_name || ':');
    DBMS_OUTPUT.PUT_LINE(weather_info);
END;