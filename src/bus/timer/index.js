// Core
import { useDispatch, useSelector } from 'react-redux';

// Actions
import { timerActions } from './slice';

export const usePoints = () => {
    const dispatch = useDispatch();
    const points = useSelector((state) => state.timer.points);
    const isOn = useSelector((state) => state.timer.isOn);
    const timerStartValue = useSelector((state) => state.timer.timerStartValue);
    function savePoint(point) {
        dispatch(timerActions.savePoint(point))
    }
    function toggleEdit(index) {
        dispatch(timerActions.toggleIsEdited(index))
    }
    function editPointName(payload) {
        dispatch(timerActions.editPointName(payload))
    }
    function deletePoint(index) {
        dispatch(timerActions.deletePoint(index));
    }
    function toggleMode(mode) {
        dispatch(timerActions.toggleMode(mode));
    }
    function setTimerStartValue(value) {
        dispatch(timerActions.setTimerStartValue(value));
    }
    return {
        points,
        isOn,
        timerStartValue,
        savePoint,
        toggleEdit,
        editPointName,
        deletePoint,
        toggleMode,
        setTimerStartValue,
    }
}