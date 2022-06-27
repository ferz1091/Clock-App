// Core
import { useState} from 'react';

export const useDate = () => {

    function getDaysOfMonth() {
        const currentMonth = new Date().getMonth() + 1;
        const nextMonth = new Date().getMonth() + 2;
        const currentYear = new Date().getFullYear();
        let daysInCurrentMonth = null;
        if (currentMonth === 12) {
            daysInCurrentMonth = (new Date(`${currentYear + 1}-${1}`).getTime() - new Date(`${currentYear}-${currentMonth}`).getTime()) / 60000 / 1440;
        } else {
            daysInCurrentMonth = (new Date(`${currentYear}-${nextMonth}`).getTime() - new Date(`${currentYear}-${currentMonth}`).getTime()) / 60000 / 1440;
        }
        return Math.round(daysInCurrentMonth);
    }
    function getDayOfWeek() {
        const currentDay = new Date().getDay();
        switch(currentDay) {
            case 0: {
                return 'Sunday';
            }
            case 1: {
                return 'Monday';
            }
            case 2: {
                return 'Tuesday';
            }
            case 3: {
                return 'Wednesday';
            }
            case 4: {
                return 'Thursday';
            }
            case 5: {
                return 'Friday';
            }
            case 6: {
                return 'Saturday';
            }
            default: {
                return 'Error';
            }
        }
    }
    function getMonth() {
        const currentMonth = new Date().getMonth();
        switch(currentMonth) {
            case 0: {
                return 'JAN';
            }
            case 1: {
                return 'FEB';
            }
            case 2: {
                return 'MAR';
            }
            case 3: {
                return 'APR';
            }
            case 4: {
                return 'MAY';
            }
            case 5: {
                return 'JUN';
            }
            case 6: {
                return 'JUL';
            }
            case 7: {
                return 'AUG';
            }
            case 8: {
                return 'SEP';
            }
            case 9: {
                return 'OCT';
            }
            case 10: {
                return 'NOV';
            }
            case 11: {
                return 'DEC';
            }
            default: {
                return 'Error';
            }
        }
    }
    const daysInCurrentMonth = getDaysOfMonth();
    const monthName = getMonth();
    const [seconds, setSeconds] = useState(new Date().getSeconds());
    const [minutes, setMinutes] = useState(new Date().getMinutes());
    const [hours, setHours] = useState(new Date().getHours());
    const [date, setDate] = useState(new Date().getDate());
    const [month, setMonth] = useState(new Date().getMonth() + 1);
    const [year, setYear] = useState(new Date().getFullYear());
    const [day, setDay] = useState(getDayOfWeek(new Date().getDay()));
    
    setInterval(() => setSeconds(new Date().getSeconds()), 1000);
    if (seconds === 59) {
        setTimeout(() => setMinutes(new Date().getMinutes()), 1000);
    }
    if (seconds === 59 && minutes === 59) {
        setTimeout(() => setHours(new Date().getHours()), 1000);
    }
    if (seconds === 59 && minutes === 59 && hours === 23) {
        setTimeout(() => setDate(new Date().getDate()), 1000);
    }
    if (seconds === 59 && minutes === 59 && hours === 23) {
        setTimeout(() => setDay(getDayOfWeek(new Date().getDay())));
    }
    if (seconds === 59 && minutes === 59 && hours === 23 && date === daysInCurrentMonth) {
        setTimeout(() => setMonth(new Date().getMonth() + 1), 1000);
    }
    if (seconds === 59 && minutes === 59 && hours === 23 && date === daysInCurrentMonth && month === 12) {
        setTimeout(() => setYear(new Date().getFullYear()), 1000);
    }
    return {
        seconds,
        minutes,
        hours,
        day,
        date,
        month,
        monthName,
        year,
        daysInCurrentMonth,
    }
};