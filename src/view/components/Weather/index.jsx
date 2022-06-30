// Core
import { Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

// Hooks
import { useWeather } from '../../../tools';

// Components
import { Today, Hourly } from './components';

// Assets
import dropIcon from '../../../assets/icons/drop-right.png';
import closeIcon from '../../../assets/icons/close.png';

// Styles
import { WeatherWrapper } from './styles';


export const Weather = () => {
    const { weatherData, location, isFetching, refBtn, refImg, isOpen, toggleIsOpen } = useWeather();

    return (
        <WeatherWrapper 
            className='Weather-page' 
            hour={new Date().getHours()}
            isOpen = {isOpen}
        >
            {isFetching || !location || !weatherData ? 
                <div>
                    Загрузка данных
                </div>
                :
                <>
                    <section className='weather-panel'>
                        <h1>
                            <span className='city'>
                                {location.city}
                            </span>
                            <span className='country'>
                                {location.country}
                            </span>
                        </h1>
                        <Routes>
                            <Route
                                path='/today'
                                element={<Today {...weatherData.days[0]} />}
                            />
                            <Route
                                path='*'
                                element={<Navigate to='/weather/today' replace />}
                            />
                        </Routes>
                    </section>
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
                            src = {closeIcon} 
                            alt = 'close' 
                        />
                    </section>
                </>
            }
        </WeatherWrapper>
    )
}