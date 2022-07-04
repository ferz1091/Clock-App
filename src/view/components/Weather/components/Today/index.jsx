// Core
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

// Hooks
import { useWeatherToday } from '../../../../../tools/useWeatherToday';

// Components
import { Icon } from '../Icon';

// Assets
import cloud_coverIcon from '../../../../../assets/icons/weather/parameters/cloud_cover.png';
import humidityIcon from '../../../../../assets/icons/weather/parameters/humidity.png';
import pressureIcon from '../../../../../assets/icons/weather/parameters/pressure.png';
import windIcon from '../../../../../assets/icons/weather/parameters/wind_speed.png';
import precipIcon from '../../../../../assets/icons/weather/parameters/precip.png';

// Styles
import { TodayWrapper } from './styles';

export const Today = (data) => {
    const [currentData] = useState(data.hours[new Date().getHours()]);
    const { wind_direction, wind_speed, pressure, humidity, temp} = useWeatherToday(currentData);

    return (
        <TodayWrapper className='weather-today'>
            <div className='temp'>
                <span>
                    {temp}
                    <sup>
                        ℃
                    </sup>
                </span>
            </div>
            <div className='weather-icon'>
                <Icon condition={currentData.conditions} />
            </div>
            <div className='parameters'>
                <span>
                    <img 
                        src={cloud_coverIcon} 
                        alt = 'cloud-cover' 
                    /> 
                    {Math.trunc(currentData.cloudcover)}
                    <sup>
                        %
                    </sup>
                </span>
                <span>
                    <img 
                        src={precipIcon} 
                        alt='precip' 
                    />
                    {Math.trunc(currentData.precipprob)}
                    <sup>
                        %
                    </sup>
                </span>
                <span>
                    <img
                        src={humidityIcon}
                        alt = 'humidity' 
                    />
                    {humidity}
                    <sup>
                        %
                    </sup>
                </span>
                <span>
                    <img 
                        src={pressureIcon} 
                        alt = 'pressure' 
                    /> 
                    {pressure} 
                    <sup>
                        mm
                    </sup>
                </span>
                <span>
                    <img 
                        src={windIcon} 
                        alt = 'wind-speed' 
                    /> 
                    {wind_speed}
                    <sup>
                        {wind_direction}
                    </sup>
                    <sub>
                        m/s
                    </sub>
                </span>
            </div>
            <NavLink className='weeks' to='/weather/2weeks'>
                    For 2 weeks
            </NavLink>
        </TodayWrapper>
    )
}