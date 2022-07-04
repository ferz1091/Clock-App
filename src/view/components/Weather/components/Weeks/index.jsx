// Hooks
import { useActiveDay } from '../../../../../tools';

// Components
import { Icon } from '../Icon';

// Assets
import tempIcon from '../../../../../assets/icons/weather/parameters/temp.png';
import precipIcon from '../../../../../assets/icons/weather/parameters/precip.png';
import cloudIcon from '../../../../../assets/icons/weather/parameters/cloud_cover.png';
import humidityIcon from '../../../../../assets/icons/weather/parameters/humidity.png';
import pressureIcon from '../../../../../assets/icons/weather/parameters/pressure.png';
import windIcon from '../../../../../assets/icons/weather/parameters/wind_speed.png';

// Styles
import { WeeksWrapper } from './styles';

export const Weeks = (data) => {
    const { refArr, activeDay } = useActiveDay();

    return (
        <WeeksWrapper 
            className='weeks' 
            hour={new Date().getHours()}
        >
            <section className='days'>
                {
                    data.days.map((day, index) =>
                        <div 
                            className={activeDay === refArr[index].current ? 'active' : 'weather-for-day'} key={index}
                            ref={refArr[index]} 
                        >
                            <div className='day-card'>
                                <span className='datetime'>
                                    <span className='value'>
                                        {day.datetime.slice(5).replace('-', '.')}
                                    </span>
                                </span>
                                <span className='conditions'>
                                    <Icon 
                                        condition={day.conditions} 
                                        alt = 'condition' 
                                    />
                                </span>
                                <span className='temp'>
                                    <img 
                                        src={tempIcon} 
                                        alt='temp' 
                                    />
                                    <sub>
                                        min:
                                    </sub>
                                    <span>
                                        {Math.trunc((day.tempmin - 32) * 5 / 9)}
                                    </span>
                                    <sub>
                                        max:
                                    </sub>
                                    <span>
                                        {Math.trunc((day.tempmax - 32) * 5 / 9)}
                                    </span>
                                </span>
                                <div className='hidden-props'>
                                    <span className='description'>
                                        {day.description}
                                    </span>
                                    <span className='weather-prop'>
                                        <img 
                                            src={cloudIcon} 
                                            alt='cloud-cover' 
                                        />
                                        {Math.trunc(day.cloudcover)}
                                        <sup>
                                            %
                                        </sup>
                                    </span>
                                    <span className='weather-prop'>
                                        <img 
                                            src={precipIcon} 
                                            alt='precip' 
                                        />
                                        {Math.trunc(day.precipprob)}
                                        <sup>
                                            %
                                        </sup>
                                    </span>
                                    <span className='weather-prop'>
                                        <img 
                                            src={humidityIcon} 
                                            alt='humidity'
                                        />
                                        {Math.trunc(day.humidity)}
                                        <sup>
                                            %
                                        </sup>
                                    </span>
                                    <span className='weather-prop'>
                                        <img 
                                            src={pressureIcon} 
                                            alt='pressure' 
                                        />
                                        {Math.trunc(day.pressure / 1.33)}
                                        <sup>
                                            mm
                                        </sup>
                                    </span>
                                    <span className='weather-prop'>
                                        <img 
                                            src={windIcon} 
                                            alt='wind-speed' 
                                        />
                                        {(day.windspeed / 3.6).toFixed(1)}
                                        <sup>
                                            m/s
                                        </sup>
                                    </span>
                                </div>
                            </div>
                        </div>)
                }
            </section>
        </WeeksWrapper>
    )
}