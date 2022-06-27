// Core
import { configureStore } from '@reduxjs/toolkit';

// Reducers
import timer from '../../bus/timer/slice';

export const store = configureStore({
    reducer: {
        timer,
    },
})