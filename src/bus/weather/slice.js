// Core
import { createSlice } from '@reduxjs/toolkit';

// Reducers
import * as reducers from './reducers';

const initialState = { location: null, weatherDataByLocation: null, error: null, isFetching: false};

export const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers,
})

export const weatherActions = weatherSlice.actions;
export default weatherSlice.reducer;