// Core
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

// Hooks
import { useNavbar } from '../../../tools';

// Assets
import clockIcon from '../../../assets/icons/clock.png';
import timerIcon from '../../../assets/icons/timer.png';
import weatherIcon from '../../../assets/icons/weather.png';
import dropIcon from '../../../assets/icons/drop.png';

// Styles
import { Sidebar as SidebarWrapper } from './styles';

export const Navbar = () => {
    const {ref, isOpen, toggleIsOpen} = useNavbar();
    
    return (
        <SidebarWrapper className='sidebar'>
            <div className={isOpen ? 'open-panel' : 'hidden-panel'}>
                <NavLink  
                    ref={ref.clockRef}
                    className='left-btn'
                    to='/'
                >
                    <img
                        ref={ref.clockImgRef}
                        src={clockIcon}
                        alt='clock'
                    />
                </NavLink>
                <NavLink  
                    ref={ref.timerRef}
                    to='/timer'
                >
                    <img
                        ref={ref.timerImgRef}
                        src={timerIcon}
                        alt='timer'
                    />
                </NavLink>
                <NavLink
                    ref={ref.weatherRef}
                    className='right-btn'
                    to='/weather'
                >
                    <img
                        ref={ref.weatherImgRef}
                        src={weatherIcon}
                        alt='weather'
                    />
                </NavLink>
            </div>
            <button
                ref={ref.btnRef}
                className={isOpen ? 'hidden-btn' : 'open-btn'}
                onClick={() => toggleIsOpen(true)}
            >
                <img
                    ref={ref.btnImgRef}
                    src={dropIcon}
                    alt='drop'
                />
            </button>
        </SidebarWrapper>
    )
}