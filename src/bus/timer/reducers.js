export const savePoint = (state, action) => {
    return {
        ...state,
        points: [...state.points, action.payload],
    }
}

export const toggleIsEdited = (state, action) => {
    return {
        ...state,
        points: state.points.map((item, index) => {
            if (index === action.payload) {
                return {
                    ...item,
                    isEdited: !item.isEdited,
                } 
            } else {
                return {
                    ...item,
                }
            }
        })
    }
}

export const editPointName = (state, action) => {
    return {
        ...state,
        points: state.points.map((item, index) => {
            if (index === action.payload.index) {
                return {
                    ...item,
                    name: action.payload.name,
                    isEdited: false,
                }
            } else {
                return {
                    ...item,
                }
            }
        })
    }
}

export const deletePoint = (state, action) => {
    return {
        ...state, 
        points: state.points.filter((item, index) => index !== action.payload),
    }
}

export const toggleMode = (state, action) => {
    return {
        ...state,
        isOn: action.payload,
    }
}

export const setTimerValue = (state, action) => {
    return {
        ...state,
        timerValue: action.payload,
    }
}

export const setTimerStartValue = (state, action) => {
    return {
        ...state,
        timerStartValue: action.payload,
    }
}