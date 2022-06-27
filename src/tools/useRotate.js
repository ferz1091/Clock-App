// Hooks
import { useDate } from './useDate';

export const useRotate = () => {
    const { seconds, minutes, hours, day, date, month, year, daysInCurrentMonth } = useDate();
    const secondsRotationEnable = seconds === 9 || seconds === 19 || seconds === 29 || seconds === 39 || seconds === 49 || seconds === 59;
    const minutesRotationEnable = {
        unit: seconds === 59,
        block: seconds === 59 && minutes === 9 || minutes === 19 || minutes === 29 || minutes === 39 || minutes === 49 || minutes === 59,
    };
    const hoursRotationEnable = {
        unit: seconds === 59 && minutes === 59,
        block: hours === 9 || hours === 19 || hours === 23 && seconds === 59 && minutes === 59,
    }
    const dayRotationEnable = seconds === 59 && minutes === 59 && hours === 23;
    const monthRotationEnable = seconds === 59 && minutes === 59 && hours === 23 && date === daysInCurrentMonth;
    const yearRotationEnable = seconds === 59 && minutes === 59 && hours === 23 && date === daysInCurrentMonth && month === 11;
    return {
        secondsRotationEnable,
        minutesRotationEnable,
        hoursRotationEnable,
        dayRotationEnable,
        monthRotationEnable,
        yearRotationEnable,
    }
}