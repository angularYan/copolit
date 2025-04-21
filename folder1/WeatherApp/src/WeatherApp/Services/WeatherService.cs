using System;
using System.Net.Http;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace WeatherApp.Services
{
    public class WeatherService
    {
        private readonly HttpClient _httpClient;

        public WeatherService()
        {
            _httpClient = new HttpClient();
        }

        public async Task<WeatherInfo> GetWeatherAsync(string city)
        {
            try
            {
                // Step 1: Get latitude and longitude for the city
                var geocodingUrl = $"https://geocoding-api.open-meteo.com/v1/search?name={city}";
                var geocodingResponse = await _httpClient.GetStringAsync(geocodingUrl);
                dynamic geocodingData = JsonConvert.DeserializeObject(geocodingResponse);

                if (geocodingData.results == null || geocodingData.results.Count == 0)
                {
                    throw new Exception("City not found");
                }

                var location = geocodingData.results[0];
                double latitude = location.latitude;
                double longitude = location.longitude;

                // Step 2: Fetch weather data using latitude and longitude
                var weatherUrl = $"https://api.open-meteo.com/v1/forecast?latitude={latitude}&longitude={longitude}&current_weather=true";
                var weatherResponse = await _httpClient.GetStringAsync(weatherUrl);
                dynamic weatherData = JsonConvert.DeserializeObject(weatherResponse);

                return new WeatherInfo
                {
                    City = location.name,
                    Temperature = weatherData.current_weather.temperature,
                    Condition = $"Weather Code: {weatherData.current_weather.weathercode}" // Open-Meteo uses weather codes
                };
            }
            catch
            {
                return null; // Return null if any error occurs
            }
        }
    }

    public class WeatherInfo
    {
        public string City { get; set; }
        public float Temperature { get; set; }
        public string Condition { get; set; }
    }
}