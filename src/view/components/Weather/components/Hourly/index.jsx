// Components
import { Icon } from '../Icon';

// Assets
import cloud_coverIcon from '../../../../../assets/icons/weather/parameters/cloud_cover.png';
import precipIcon from '../../../../../assets/icons/weather/parameters/precip.png';
import windIcon from '../../../../../assets/icons/weather/parameters/wind_speed.png';

// Styles
import { HourlyWrapper } from './styles';

export const Hourly = (data) => {
    return (
        <HourlyWrapper 
            className='hourly-weather' 
            isHourPast ={new Date().getHours() > Number(data.datetime.slice(0, 2))}
            hour = {new Date().getHours()}
        >
            <span className='hour'>
                {data.datetime.slice(0, 2)}
            </span>
            <span className='icon'>
                <Icon 
                    condition={data.conditions} 
                    datetime={Number(data.datetime.slice(0, 2))}
                />
            </span>
            <span className='temp'>
                {Math.trunc((data.temp - 32) * 5 / 9)}
                <sup>
                    ℃
                </sup>
            </span>
            <span className='cloud-cover'>
                <img 
                    src={cloud_coverIcon} 
                    alt= 'cloud-cover' 
                />
                {Math.trunc(data.cloudcover)}
                <sup>
                    %
                </sup>
            </span>
            <span className='precip'>
                <img
                    src = {precipIcon} 
                    alt = 'precip' 
                />
                {Math.trunc(data.precipprob)}
            </span>
            <span className='wind-speed'>
                <img 
                    src = {windIcon} 
                    alt = 'wind-speed' 
                />
                {(data.windspeed / 3.6).toFixed(1)}
            </span>
        </HourlyWrapper>
    )
}