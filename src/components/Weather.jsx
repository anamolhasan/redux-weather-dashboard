import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import weatherBanner from "../assets/weather-banner.png";
import WeatherCard from "./WeatherCard";
import { clearWeatherData, fetchWeatherData } from "../redux/features/weather/weatherSlice";

const Weather = () => {
  const { weatherData, loading, error } = useSelector((state) => state.weather);
  const dispatch = useDispatch();
  console.log(weatherData);

  const [city, setCity] = useState("");

  const handleFetchWeather = (e) => {
    e.preventDefault();

    if (city.trim() === "") return;
    dispatch(fetchWeatherData(city));
    setCity("");
  };

  return (
    <div className="bg-blue-300">
      <div className="px-6 py-20 container max-w-screen-lg mx-auto min-h-screen">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-3">
          Weather Dashboard
        </h1>
        <div className="w-full flex justify-center">
          <p className="bg-red-500 text-white inline-block px-2 text-center mb-6">
            fetch weather data from different cities using redux toolkit and
            redux thunk
          </p>
        </div>

        <div className="w-full flex justify-center">
          <img src={weatherBanner} alt="weather banner" />
        </div>

        {/* search weather */}
        <form
          onSubmit={handleFetchWeather}
          className="my-6 flex flex-wrap gap-2 md:gap-4"
        >
          <input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            type="text"
            placeholder="Enter city name"
            className="flex-grow p-2 border rounded bg-gray-300"
            name=""
            id=""
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Search Weather
          </button>
          <button
          onClick={()=>dispatch(clearWeatherData())}
            type="button"
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Clear
          </button>
        </form>

        {/* weather card with loading and error */}
        {loading && (
          <p className="text-center font-bold text-blue-50">Loading.....</p>
        )}
        {error && <p className="text-center text-red-500">{error}</p>}

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
          {weatherData.map((data, index) => (
            <WeatherCard
              key={index}
              city={data.name}
              temp={data.main.temp}
              description={data.weather[0].description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Weather;
