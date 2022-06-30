// Core
import { useRef } from 'react';

export const useNavbarClickListener = () => {
    const clockRef = useRef(null);
    const timerRef = useRef(null);
    const weatherRef = useRef(null);
    const clockImgRef = useRef(null);
    const timerImgRef = useRef(null);
    const weatherImgRef = useRef(null);
    const btnRef = useRef(null);
    const btnImgRef = useRef(null);
    return {
        clockRef,
        clockImgRef,
        timerRef,
        timerImgRef,
        weatherRef,
        weatherImgRef,
        btnRef,
        btnImgRef,
    }
}