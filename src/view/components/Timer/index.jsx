// Core
import { useState } from 'react';

// Bus
import { usePoints } from '../../../bus/timer';

// Hooks
import { useTimer } from '../../../tools';

// Assets
import startIcon from '../../../assets/icons/start.png';
import pauseIcon from '../../../assets/icons/pause.png';
import resetIcon from '../../../assets/icons/reset.png';
import saveIcon from '../../../assets/icons/save.png';
import upPanelIcon from '../../../assets/icons/drop-reverse.png';
import downPanelIcon from '../../../assets/icons/drop.png';

// Styles
import { TimerContainer } from './styles';

export const Timer = () => {
    const [isOpen, toggleIsOpen] = useState(false);
    const { points } = usePoints();
    const { dial_ms,
        dial_ms_10,
        dial_ms_100,
        dial_sec,
        dial_sec_10,
        dial_min,
        dial_min_10,
        startTimer,
        stopTimer,
        resetTimer,
        saveTimer,
        pointToBoard,
        toggleEdit,
        date,
        isWasOn,
        name,
        setName,
        editPointName,
        deletePoint,
        isOn,
    } = useTimer();
    if (isOn && !date) {
        startTimer();
    }

    return (
        <TimerContainer className='Timer'>
            <section className='board'>
                <span className='dial-min-10'>{dial_min_10}</span>
                <span className='dial-min'>{dial_min}</span>
                <span className='colon'>:</span>
                <span className='dial-sec-10'>{dial_sec_10}</span>
                <span className='dial-sec'>{dial_sec}</span>
                <span className='colon'>:</span>
                <span className='dial-ms-100'>{dial_ms_100}</span>
                <span className='dial-ms-10'>{dial_ms_10}</span>
                <span className='dial-ms'>{dial_ms}</span>
            </section>
            <section className='control'>
                <button 
                    className='start' 
                    disabled={date ? true : false} 
                    onClick={() => startTimer()}
                >
                    <img
                        src={startIcon}
                        alt='start'
                    />
                </button>
                <button 
                    className='pause' 
                    disabled={date ? false : true} 
                    onClick={() => stopTimer()}
                >
                    <img
                        src={pauseIcon}
                        alt='pause'
                    />
                </button>
                <button 
                    className='reset' 
                    disabled={date || !isWasOn ? true : false} 
                    onClick={() => resetTimer()}
                >
                    <img
                        src={resetIcon}
                        alt='reset'
                    />
                </button>
                <button 
                    className='save' 
                    disabled={isWasOn ? false : true} 
                    onClick={() => saveTimer()}
                >
                    <img
                        src={saveIcon}
                        alt='save'
                    />
                </button>
            </section>
            <div className = {isOpen ? 'saved-points' : 'saved-points-hidden'}>
                <ul>
                    {points.map((point, index) => <li
                        key={index}>
                        <span className='index'>
                            {index + 1}.
                        </span>
                        <span
                            className='editIcon'
                            onClick={() => { 
                                if (point.name) {
                                    setName(point.name);
                                }
                                toggleEdit(index); }}
                        ></span>
                        {point.isEdited ? 
                            <input 
                                autoFocus 
                                onBlur={() => {
                                    if (name) {
                                    editPointName({index: index, name: name})
                                    setName('');
                                } else {
                                    editPointName({ index: index, name: '' })
                                }
                                }} 
                                type='text' 
                                value = {name} 
                                onChange={(e) => setName(e.target.value)} 
                            /> 
                            : 
                            <span className='name'>
                                {point.name}
                            </span>
                        }
                        {pointToBoard(point.value)}
                        <span 
                            className='deleteIcon' 
                            onClick={() => deletePoint(index)}>
                        </span>
                    </li>)}
                </ul>
            </div>
            <button 
                className = {isOpen ? 'btn-up' : 'btn-down'}
                onClick = {() => toggleIsOpen(!isOpen)}
            >
                <img
                    src = {isOpen ? downPanelIcon : upPanelIcon}
                    alt = 'drop'
                />
            </button>
        </TimerContainer>
    )
}