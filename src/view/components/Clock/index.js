// Hooks
import { useDate, useRotate} from '../../../tools';

// Styles
import { ClockContainer } from './styles';

export const Clock = () => {
    const { seconds, minutes, hours, day, date, month, monthName, year } = useDate();
    const { secondsRotationEnable,
        minutesRotationEnable,
        hoursRotationEnable,
        dayRotationEnable,
        monthRotationEnable,
        yearRotationEnable } = useRotate();

    return (
        <ClockContainer className='Clock'>
            <section className='top-row'>
                <div className='date'>
                    <p>Day</p>
                    <p className='display-left'>
                        <span className={dayRotationEnable ? 'rotateBlock' : 'staticBlock'}>
                            {date}
                        </span>
                    </p>
                </div>
                <div className='dayOfWeek'>
                    <p>Today</p>
                    <p className='display-center'>
                        <span className={dayRotationEnable ? 'rollBlock' : 'staticRoll'}>
                            {day}
                        </span>
                    </p>
                </div>
                <div className='month'>
                    <p>Month</p>
                    <p className='display-right'>
                        <span className={monthRotationEnable ? 'rotateBlock' : 'staticBlock'}>
                            {month}
                        </span>
                        <span
                            className={monthRotationEnable ? 'rollBlock' : 'staticRoll'}
                            style={{ paddingLeft: '10px' }}
                        >
                            {`${monthName}`}
                        </span>
                    </p>
                </div>
            </section>
            <section className='mid-row'>
                <div className='hours'>
                    <p>Hours</p>
                    <p className='display-left'>
                        <span className={hoursRotationEnable.block ? 'rotateBlock' : 'staticBlock'}>
                            {hours < 10 ? 0 : hours < 20 ? 1 : 2}
                        </span>
                        <span className={hoursRotationEnable.unit ? 'rotateBlock' : 'staticBlock'}>
                            {hours < 10 ? hours : hours < 20 ? hours - 10 : hours - 20}
                        </span>
                    </p>
                </div>
                <div className='minutes'>
                    <p>Minutes</p>
                    <p className='display-center'>
                        <span className={minutesRotationEnable.block ? 'rotateBlock' : 'staticBlock'}>
                            {Math.trunc(minutes / 10)}
                        </span>
                        <span className={minutesRotationEnable.unit ? 'rotateBlock' : 'staticBlock'}>
                            {minutes - Math.floor((minutes / 10)) * 10}
                        </span>
                    </p>
                </div>
                <div className='seconds'>
                    <p>Seconds</p>
                    <p className='display-right'>
                        <span className={secondsRotationEnable ? 'rotateBlock' : 'staticBlock'}>
                            {Math.trunc(seconds / 10)}
                        </span>
                        <span className='unit-second'>
                            {seconds - Math.floor((seconds / 10)) * 10}
                        </span>
                    </p>
                </div>
            </section>
            <section className='bot-row'>
                <div className='year'>
                    <p className='year-label'>Year</p>
                    <p className='display-single'>
                        <span className={yearRotationEnable ? 'rollBlock' : 'staticRoll'}>
                            {year}
                        </span>
                    </p>
                </div>
            </section>
        </ClockContainer>
    )
}