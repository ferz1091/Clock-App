// Core
import { configureStore } from '@reduxjs/toolkit';

// Middleware
import { sagaMiddleware } from './middleware';

// Saga
import { rootSaga } from './rootSage';

// Reducers
import timer from '../../bus/timer/slice';
import weather from '../../bus/weather/slice';

export const store = configureStore({
    reducer: {
        timer,
        weather,
    },
    middleware: [ sagaMiddleware ],
})

sagaMiddleware.run(rootSaga);