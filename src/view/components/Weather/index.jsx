// Core
import { Routes, Route, Navigate } from 'react-router-dom';

// Hooks
import { useWeather } from '../../../tools';

// Components
import { Today, Hourly, Spinner, Weeks } from './components';

// Assets
import dropIcon from '../../../assets/icons/drop-right.png';
import closeIcon from '../../../assets/icons/close.png';
import closeWhiteIcon from '../../../assets/icons/close-white.png';

// Styles
import { WeatherWrapper } from './styles';


export const Weather = () => {
    const { weatherData, location, isFetching, refBtn, refImg, isOpen, toggleIsOpen, loc } = useWeather();
    
    return (
        <WeatherWrapper 
            className='Weather-page' 
            hour={new Date().getHours()}
            isOpen = {isOpen}
        >
            {isFetching || !location || !weatherData ? 
                <Spinner />
                :
                <>
                    <section className='weather-panel'>
                        {loc.pathname === '/weather/today' ?
                        <h1>
                            <span className='city'>
                                {location.city}
                            </span>
                            <span className='country'>
                                {location.country}
                            </span>
                        </h1>
                        :
                        null}
                        <Routes>
                            <Route
                                path='/today'
                                element={<Today {...weatherData.days[0]} />}
                            />
                            <Route
                                path='/2weeks'
                                element={<Weeks days ={weatherData.days}/>}
                            />
                            <Route
                                path='*'
                                element={<Navigate to='/weather/today' replace />}
                            />
                        </Routes>
                    </section>
                    {loc.pathname === '/weather/today' ?
                    <section className={isOpen ? 'hourly-panel' : 'hourly-panel-hidden'}>
                        {Array.from(weatherData.days[0].hours).reverse().map((hour, index) => <Hourly key={index} {...hour} />)}
                        <button
                            className={isOpen ? 'open-btn' : 'hidden-btn'}
                            onClick={() => toggleIsOpen(true)}
                            ref={refBtn}
                        >
                            <img 
                                src = {dropIcon} 
                                alt = 'drop' 
                                ref = {refImg}
                            />
                        </button>
                        <img
                            onClick={() => toggleIsOpen(false)}
                            className='closeIcon' 
                            src = {new Date().getHours >= 21 || new Date().getHours() < 9 ? closeWhiteIcon : closeIcon} 
                            alt = 'close' 
                        />
                    </section> 
                    : 
                    null 
                    }
                </>
            }
        </WeatherWrapper>
    )
}