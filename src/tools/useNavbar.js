// Core
import { useState, useEffect } from 'react';

// Hooks
import { useNavbarClickListener } from './';

export const useNavbar = () => {
    const ref = useNavbarClickListener();
    const [isOpen, toggleIsOpen] = useState(false);
    useEffect(() => {
        document.addEventListener('click', (e) => {
            if (e.target !== ref.clockRef.current && e.target !== ref.clockImgRef.current &&
                e.target !== ref.timerRef.current && e.target !== ref.timerImgRef.current &&
                e.target !== ref.weatherRef.current && e.target !== ref.weatherImgRef.current &&
                e.target !== ref.btnRef.current && e.target !== ref.btnImgRef.current && isOpen) {
                toggleIsOpen(false);
            }
        });
    }, [isOpen])
    return {
        ref,
        isOpen,
        toggleIsOpen,
    }
}