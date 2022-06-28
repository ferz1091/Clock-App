// Core
import { take, call, put, select } from 'redux-saga/effects';

// Actions
import { weatherActions } from './slice';

async function getLocation() {
    const Location = await fetch('https://ipapi.co/json/');
    if (Location.status !== 200) {
        return { serverError: Location.reason };
    } else if (!Location) {
        return { serverError: 'Server doesn\'t responding' };
    } else {
        return Location.json();
    }
}

async function getWeatherDataByLocation(city, country) {
    const weatherData = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city},${country}?key=BTQT3VSQFP8NL2U66697L5EL2`
    );
    if (weatherData.status !== 200) {
        return { serverError: weatherData.reason };
    } else if (!weatherData) {
        return { serverError: 'Server doesn\'t responding' };
    } else
    return weatherData.json();
}

export function* sagaWeatherByLocationWorker() {
    if (!(yield select((state) => {
        return state.weather.weatherDataByLocation
    }))) {
        const LocationData = yield call(getLocation);
        if (LocationData.serverError) {
            yield put(weatherActions.setWeatherDataByLocation(LocationData))
        } else {
            yield put(weatherActions.setLocation(LocationData));
            const [city, country] = yield select((state) => {
                return [
                    state.weather.location.city,
                    state.weather.location.country,
                ]
            });
            const weatherData = yield call(getWeatherDataByLocation, city, country);
            yield put(weatherActions.setWeatherDataByLocation(weatherData));
        }
    }
}

export function* sagaWeatherByLocationWatcher() {
    yield take(weatherActions.getWeatherDataByLocation);
    yield sagaWeatherByLocationWorker();
}