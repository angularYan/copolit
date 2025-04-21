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
            var apiKey = "YOUR_API_KEY"; // Replace with your actual API key
            var url = $"https://api.openweathermap.org/data/2.5/weather?q={city}&appid={apiKey}&units=metric";

            var response = await _httpClient.GetStringAsync(url);
            var weatherData = JsonConvert.DeserializeObject<WeatherApiResponse>(response);

            return new WeatherInfo
            {
                City = weatherData.Name,
                Temperature = weatherData.Main.Temp,
                Condition = weatherData.Weather[0].Description
            };
        }
    }

    public class WeatherApiResponse
    {
        public Main Main { get; set; }
        public Weather[] Weather { get; set; }
        public string Name { get; set; }
    }

    public class Main
    {
        public float Temp { get; set; }
    }

    public class Weather
    {
        public string Description { get; set; }
    }
}