// Core
import { all } from 'redux-saga/effects';

// Tools
import { sagaWeatherByLocationWatcher } from '../../bus/weather/saga';

export function* rootSaga() {
    yield all([sagaWeatherByLocationWatcher()]);
}