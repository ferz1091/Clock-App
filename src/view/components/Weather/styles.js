// Core
import styled from 'styled-components';

// Assets
import Cabin from '../../../assets/fonts/Cabin-Regular.woff2';

export const WeatherWrapper = styled.section`
@font-face {
    font-family: 'Cabin';
    src: url(${Cabin});
}
position: relative;
top: 0; right: 0; bottom: 0; left: 0;
width: 100%;
height: 100%;
background: ${(props) => 
    props.hour >= 21 || props.hour < 4 ? 'linear-gradient(to right, #000428, #004e92);' :
        props.hour >= 4 && props.hour < 9 ? 'linear-gradient(to right, #1a2980, #26d0ce);' :
            props.hour >= 9 && props.hour < 12 ? 'linear-gradient(to right, #ede574, #e1f5c4);' :
                props.hour >= 12 && props.hour < 18 ? 'linear-gradient(355deg, rgba(255,205,0,1) 0%, rgba(0,195,255,1) 80%);' : 
                    props.hour >= 18 && props.hour < 21 ? 'linear-gradient(to right, #0b486b, #f56217);' : 'none'};
.weather-panel {
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
    width: 100%;
    height: 100%;
    color: ${(props) =>
    props.hour >= 21 || props.hour < 4 ? '#c7c7c7' :
            props.hour >= 4 && props.hour < 9 ? 'linear-gradient(to right, #1a2980, #26d0ce);' :
                props.hour >= 9 && props.hour < 12 ? 'linear-gradient(to right, #ede574, #e1f5c4);' :
                    props.hour >= 12 && props.hour < 18 ? 'black' :
                    props.hour >= 18 && props.hour < 21 ? 'white' : 'none'};
    h1 {
        text-align: center;
        margin: 0;
        position: absolute;
        top: 15%;
        left: 50%;
        transform: translate(-50%, -50%);
        white-space: nowrap;
        letter-spacing: 3px;
        font-family: Cabin;
    }
    .country {
        font-weight: 100;
    }
    .city {
        font-weight: 800;
        padding-right: 10px;
    }
}
.hourly-panel, .hourly-panel-hidden {
    position: absolute;
    height: 100%;
    width: 230px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background: ${(props) =>
        props.hour >= 21 || props.hour < 4 ? 'linear-gradient(to left, #000428, #004e92);' :
            props.hour >= 4 && props.hour < 9 ? 'linear-gradient(to left, #1a2980, #26d0ce);' :
            props.hour >= 9 && props.hour < 12 ? 'linear-gradient(to left, #ede574, #e1f5c4);' :
                    props.hour >= 12 && props.hour < 18 ? 'linear-gradient(to bottom, rgba(255,205,0,1) 0%, rgba(0,195,255,1) 80%);' :
                        props.hour >= 18 && props.hour < 21 ? 'linear-gradient(to left, #0b486b, #f56217);' : 'none'};
    border-right-width: 3px;
    border-right-style: solid;
    border-right-color: ${(props) =>
    props.hour >= 21 || props.hour < 4 ? '#004e92' :
        props.hour >= 4 && props.hour < 9 ? '#26d0ce' :
            props.hour >= 9 && props.hour < 12 ? '#e1f5c4' :
                    props.hour >= 12 && props.hour < 18 ? 'green' :
                    props.hour >= 18 && props.hour < 21 ? '#f56217' : 'none'};
    transition-property: all;
    transition-duration: 2s;
    transition-timing-function: cubic-bezier(0.17,0.04,0.03,0.94);
    .closeIcon {
        display: none;
    }
}
.hourly-panel {
    left: 0;
}
.hourly-panel-hidden {
    left: -233px;
}
.open-btn, .hidden-btn {
    width: 20px;
    height: 80px;
    position: absolute;
    color: white;
    border-radius: 0 50% 50% 0;
    border: 0.5px solid rgb(5,5,5);
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    transition-property: all;
    transition-duration: 2s;
    transition-timing-function: cubic-bezier(0.17,0.04,0.03,0.94);
}
.open-btn {
    left: -20px;
}
.hidden-btn {
    left: 100%;
}
@media (max-width: 768px) {
    overflow: hidden;
    .hourly-panel {
        width: 99%;
    }
    .weather-panel {
        h1 {
            font-size: 25px;
        }
    }
    .open-btn {
        display: none;
    }
}
@media (max-height: 400px) {
    overflow-x: hidden;
    overflow-y: ${(props) => props.isOpen ? 'auto' : 'hidden'};
    .hourly-panel {
        height: auto;
        width: 99%;
        .closeIcon {
            display: block;
            position: absolute;
            right: 2%;
            top: 5%;
        }
    }
    h1 {
        font-size: 18px;
    }
    .open-btn {
        display: none;
    }

}
`;