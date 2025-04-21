using System;
using System.Threading.Tasks;
using Xunit;
using WeatherApp.Services;
using WeatherApp.Models;

namespace WeatherApp.Tests
{
    public class WeatherServiceTests
    {
        private readonly WeatherService _weatherService;

        public WeatherServiceTests()
        {
            _weatherService = new WeatherService();
        }

        [Fact]
        public async Task GetWeatherAsync_ValidCity_ReturnsWeatherInfo()
        {
            // Arrange
            string city = "London";

            // Act
            WeatherInfo result = await _weatherService.GetWeatherAsync(city);

            // Assert
            Assert.NotNull(result);
            Assert.Equal(city, result.City);
            Assert.True(result.Temperature > 0); // Assuming temperature is always above 0
        }

        [Fact]
        public async Task GetWeatherAsync_InvalidCity_ReturnsNull()
        {
            // Arrange
            string city = "InvalidCityName";

            // Act
            WeatherInfo result = await _weatherService.GetWeatherAsync(city);

            // Assert
            Assert.Null(result);
        }
    }
}