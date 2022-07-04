// Core
import { useState, useRef, useEffect } from 'react';

export const useActiveDay = () => {
    const [activeDay, setActiveDay] = useState(null);
    const [refArr] = useState(Array(15).fill('').map(item => item = Ref()))

    function Ref() {
        const ref = useRef();
        return ref;
    }
    useEffect(() => {
        document.addEventListener('mousemove', (e) => {
            setActiveDay(document.elementFromPoint(document.documentElement.clientWidth - 50, document.documentElement.clientHeight / 2));
        });
        document.addEventListener('mousewheel', (e) => {
            setActiveDay(document.elementFromPoint(document.documentElement.clientWidth - 50, document.documentElement.clientHeight / 2));
        })
    })
    
    return {
        refArr,
        activeDay,
    }
}