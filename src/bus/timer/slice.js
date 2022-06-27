// Core
import { createSlice } from '@reduxjs/toolkit';

// Reducers
import * as reducers from './reducers';

const initialState = {
    points: [],
    timerStartValue: null,
    isOn: false,
};
 
export const timerSlice = createSlice({
    name: 'timer',
    initialState,
    reducers,
})

export const timerActions = timerSlice.actions;
export default timerSlice.reducer;