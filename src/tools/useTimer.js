// Core
import { useEffect, useState } from 'react';

// Bus
import { usePoints } from '../bus/timer';

export const useTimer = () => {
    const { points, 
            isOn, 
            timerStartValue, 
            savePoint, 
            toggleEdit, 
            editPointName, 
            deletePoint, 
            toggleMode, 
            setTimerStartValue } = usePoints();
    const [ms, setMs] = useState(0);
    const [sec, setSec] = useState(0);
    const [date, setDate] = useState(null);
    const [cacheDate, setCacheDate] = useState(null);
    const [isWasOn, toggleWasOn] = useState(false);
    const [name, setName] = useState('');
    function startTimer() {
        if (!cacheDate && !date && !isOn) {
        setTimerStartValue(new Date().getTime());
        toggleMode(true);
        setDate(new Date().getTime());
        toggleWasOn(true);
        } else if (isOn && !date) {
            setDate(timerStartValue);
            toggleWasOn(true);
        } else {
            setDate(cacheDate + new Date().getTime() - cacheDate - 1000 * sec - ms);
            toggleWasOn(true);
        }
    }
    useEffect(() => {
        if (date) {
            setTimeout(() => {
                if (ms < 999) {
                    setMs(new Date().getTime() - date - 1000 * sec);
                }
                if (ms >= 999) {
                    setMs(0);
                    setSec(sec + 1);
                }
            });
        }
    })
    function stopTimer() {
        setCacheDate(date);
        setDate(null);
        toggleMode(false);
    }
    function resetTimer() {
        setCacheDate(null);
        setMs(0);
        setSec(0);
        toggleWasOn(false);
    }
    function saveTimer() {
        if (date) {
        savePoint({value: new Date().getTime() - date, isEdited: false, name: ''});
        } else {
            savePoint({value: sec * 1000 + ms, isEdited: false, name: ''});
        }
    }
    function pointToBoard(point) {
        return `${Math.trunc(Math.trunc(point / 1000) / 60 / 10)}
        ${Math.trunc(Math.trunc(point / 1000) / 60 - Math.trunc(Math.trunc(point / 1000) / 60 / 10) * 10)} : 
        ${Math.trunc(point / 1000) < 60 ? Math.trunc(Math.trunc(point / 1000) / 10) :
            Math.trunc(Math.trunc(point / 1000) / 10) - 6 * Math.trunc(Math.trunc(point / 1000) / 60)}
        ${Math.trunc(point / 1000) - Math.trunc(Math.trunc(point / 1000) / 10) * 10} : 
        ${Math.trunc((point - Math.trunc(point / 1000) * 1000) / 100) >= 10 ? 9 :
        Math.trunc((point - Math.trunc(point / 1000) * 1000) / 100)}
        ${Math.trunc((point - Math.trunc(point / 1000) * 1000) / 10) - Math.trunc((point - Math.trunc(point / 1000) * 1000) / 100) * 10}
        ${(point - Math.trunc(point / 1000) * 1000) - Math.trunc((point - Math.trunc(point / 1000) * 1000) / 10) * 10}`
    }
    let dial_ms = ms - Math.trunc(ms / 10) * 10;
    let dial_ms_10 = Math.trunc(ms / 10) - Math.trunc(ms / 100) * 10;
    let dial_ms_100 = Math.trunc(ms / 100) >= 10 ? 9 : Math.trunc(ms / 100);
    let dial_sec = sec - Math.trunc(sec / 10) * 10;
    let dial_sec_10 = sec < 60 ? Math.trunc(sec / 10) : Math.trunc(sec / 10) - 6 * Math.trunc(sec / 60);
    let dial_min = Math.trunc(sec / 60 - Math.trunc(sec / 60 / 10) * 10);
    let dial_min_10 = Math.trunc(sec / 60 / 10);
    return {
        dial_ms,
        dial_ms_10,
        dial_ms_100,
        dial_sec,
        dial_sec_10,
        dial_min,
        dial_min_10,
        startTimer,
        stopTimer,
        resetTimer,
        saveTimer,
        pointToBoard,
        toggleEdit,
        date,
        isWasOn,
        name,
        setName,
        editPointName,
        deletePoint,
        toggleMode,
        isOn,
    }
}