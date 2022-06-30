// Core
import styled from 'styled-components';

export const HourlyWrapper = styled.div`
font-size: 16px;
border-bottom: 1px solid black;
display: flex;
justify-content: space-around;
opacity: ${(props) => props.isHourPast ? '0.3' : '1'};
color: ${(props) =>
    props.hour >= 21 || props.hour < 4 ? '#c7c7c7' :
            props.hour >= 4 && props.hour < 9 ? 'linear-gradient(to right, #1a2980, #26d0ce);' :
                props.hour >= 9 && props.hour < 12 ? 'linear-gradient(to right, #ede574, #e1f5c4);' :
                    props.hour >= 12 && props.hour < 18 ? 'black' :
                        props.hour >= 18 && props.hour < 21 ? '#d3edfc' : 'none'};
img {
        width: 20px;
        height: 20px;
    }
.hour {
    border: 1px solid black;
    border-radius: 10px;
    margin: 2px;
    padding: 0 2px;
}
.temp {
width: 35px;
}
.cloud-cover {
    display: inline-block;
    width: 60px;
}
.precip {
    display: inline-block;
    width: 45px;
}
.wind-speed {
    display: inline-block;
    width: 45px;
}
@media (max-height: 600px) {
    display: flex;
    justify-content: space-around;
    font-size: 13px;
    .hour {
        margin: 0;
        padding: 0;
        border: none;
    }
}
@media (max-height: 400px) {
    font-size: 10px;
}
`;