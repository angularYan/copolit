using System;
using System.Threading.Tasks;
using WeatherApp.Services;

namespace WeatherApp
{
    class Program
    {
        static async Task Main(string[] args)
        {
            Console.Write("Enter the city name: ");
            string city = Console.ReadLine();

            WeatherService weatherService = new WeatherService();
            var weatherInfo = await weatherService.GetWeatherAsync(city);

            if (weatherInfo != null)
            {
                Console.WriteLine($"Weather in {weatherInfo.City}:");
                Console.WriteLine($"Temperature: {weatherInfo.Temperature}°C");
                Console.WriteLine($"Condition: {weatherInfo.Condition}");
                Console.WriteLine(GetWeatherAsciiArt(weatherInfo.Condition));
            }
            else
            {
                Console.WriteLine("Could not retrieve weather data. Please check the city name.");
            }
        }

        static string GetWeatherAsciiArt(string condition)
        {
            return condition.ToLower() switch
            {
                "clear" => @"
     \   /
      .-.
   ― (   ) ―
      `-'
     /   \
    Clear Sky",
                "rain" => @"
     .-.
    (   ).
   (___(__)
    ‘ ‘ ‘ ‘
   ‘ ‘ ‘ ‘
    Rainy",
                "cloudy" => @"
     .--.
  .-(    ).
 (___.__)__)
    Cloudy",
                _ => @"
     ???
  Unknown Weather"
            };
        }
    }
}