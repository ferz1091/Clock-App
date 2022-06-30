// Core
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux/es/exports';

// Bus
import { useWeatherData } from '../bus/weather';

export const useWeather = () => {
    const { getWeatherDataByLocation } = useWeatherData();
    const refBtn = useRef();
    const refImg = useRef();
    const [isOpen, toggleIsOpen] = useState(false);
    useEffect(() => {
        getWeatherDataByLocation();
    }, []);
    useEffect(() => {
        document.addEventListener('click', (e) => {
            if (e.target !== refBtn.current && e.target !== refImg.current && isOpen) {
                if (window.screen.height > 400) {
                    toggleIsOpen(false);
                }
            }
        });
    }, [isOpen])
    const isFetching = useSelector((state) => state.weather.isFetching);
    const weatherData = useSelector((state) => state.weather.weatherDataByLocation);
    const location = useSelector((state) => {
        if (state.weather.location) {
            return {
                city: state.weather.location.city,
                country: state.weather.location.country_name,
            }
        } else {
            return state.weather.location;
        }
    });

    return {
        weatherData,
        location,
        isFetching,
        refBtn,
        refImg,
        isOpen,
        toggleIsOpen,
    }
}