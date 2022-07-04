// Core
import styled from 'styled-components';

export const WeeksWrapper = styled.section`
position: relative;
width: 100%;
height: 100%;
overflow: hidden;
.days {
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: flex-start;
    padding-top: 50%;
    .weather-for-day, .active {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        font-size: 15px;
        transition-property: all;
        transition-duration: 0.2s;
        transition-timing-function: linear;
        .day-card {
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin: 10px 0;
            color: ${(props) =>
        props.hour >= 21 || props.hour < 4 ? '#c7c7c7' :
        props.hour >= 4 && props.hour < 9 ? '#c7c7c7' :
            props.hour >= 9 && props.hour < 12 ? 'black' :
                    props.hour >= 12 && props.hour < 18 ? 'black' :
                        props.hour >= 18 && props.hour < 21 ? 'white' : 'none'};
            .hidden-props {
                display: none;
                font-size: 14px;
            }
            .datetime {
                font-size: 25px;
            }
        }
        .conditions {
            img {
                width: 100px;
                height: 100px;
            }
        }
    }
    .active {
        color: black;
        font-size: 25px;
        .day-card {
            padding: 20px 0;
            margin: 0;
            width: 25%;
            box-shadow: 0px 0px 10px black;
            border-radius: 15%;
            background: ${(props) =>
        props.hour >= 21 || props.hour < 4 ? 'linear-gradient(to left, #000428, #004e92);' :
            props.hour >= 4 && props.hour < 9 ? 'linear-gradient(to left, #1a2980, #26d0ce);' :
                props.hour >= 9 && props.hour < 12 ? 'linear-gradient(to left, #ede574, #e1f5c4);' :
                    props.hour >= 12 && props.hour < 18 ? 'linear-gradient(to bottom, rgba(255,205,0,1) 0%, rgba(0,195,255,1) 80%);' :
                        props.hour >= 18 && props.hour < 21 ? 'linear-gradient(to left, #0b486b, #f56217);' : 'none'};
            .hidden-props {
                display: flex;
                flex-direction: column;
                align-items: center;
                text-align: center;
                .description {
                padding: 0 5px;
                }
            }
            .weather-prop {
                width: 65px;
                text-align: left;
                word-break: keep-all;
                sup {
                    font-size: 10px;
                }
            }
            .more-info {
                width: 65px;
                box-sizing: border-box;
                border: 3px solid #9f9f9f;
                border-radius: 15px;
                font-size: 20px;
                padding-bottom: 10px;
                background-color: #9f9f9f;
                color: black;
                transition-duration: 0.9s;
                cursor: pointer;
            }
            .more-info:hover {
                background-color: white;
                border: 3px solid #9f9f9f;
                box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
            }
            .more-info:active {
                transition-duration: 0.2s;
                background-color: black;
                box-shadow: 0 5px #666;
                transform: translateY(4px);
            }
        }
    }
    .weather-for-day:last-child, .active:last-child {
        margin-bottom: 50%;
    }
}
@media (max-width: 768px) {
    .days {
        .active {
            .day-card {
                width: 50%;
            }
        }
    }
}
`;