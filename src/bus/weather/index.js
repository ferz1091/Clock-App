// Core
import { useDispatch } from 'react-redux';

// Actions
import { weatherActions } from './slice';

export const useWeatherData = () => {
    const dispatch = useDispatch();
    function getWeatherDataByLocation() {
        dispatch(weatherActions.getWeatherDataByLocation());
    }
    return {
        getWeatherDataByLocation,
    }
}