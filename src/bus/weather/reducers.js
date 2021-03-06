export const getWeatherDataByLocation = (state, action) => {};

export const setLocation = (state, action) => {
    return {
        ...state,
        location: action.payload,
    }
}

export const setWeatherDataByLocation = (state, action) => {
    return {
        ...state,
        weatherDataByLocation: action.payload,
    }
}

export const toggleIsFetching = (state, action) => {
    return {
        ...state,
        isFetching: !state.isFetching,
    }
}