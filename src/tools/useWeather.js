// Core
import { useEffect } from 'react';
import { useSelector } from 'react-redux/es/exports';

// Bus
import { useWeatherData } from '../bus/weather';

export const useWeather = () => {
    const { getWeatherDataByLocation } = useWeatherData();
    useEffect(() => { 
        getWeatherDataByLocation();
    }, []);
    const weatherData = useSelector((state) => state.weather.weatherDataByLocation);
    return {
        weatherData,
    }
}