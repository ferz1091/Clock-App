// Core
import styled from 'styled-components';

// Assets
import Digital from '../../../assets/fonts/digital-7.woff2';

export const ClockContainer = styled.section`
@font-face {
    font-family: 'Digital';
    src: url(${Digital}) format('woff2');
}
@keyframes moving {
    0% {transform: rotateY(180deg)};
    25% {transform: rotateY(315deg)};
    50% {transform: rotateY(360deg)};
    75% {transform: rotateY(405deg)};
    100% {transform:rotateY(540deg)};
}
@keyframes hideBlock {
    0% {transform: rotateY(0deg)}
    50% {transform: rotateY(45deg)}
    100% {transform: rotateY(180deg);}
}
@keyframes getBlock {
    0% {transform: rotateY(180deg)}
    50% {transform: rotateY(315deg)}
    100% {transform: rotateY(360deg)}
}
@keyframes rollBlock {
    0% {transform: rotateX(0deg)}
    50% {transform: rotateX(45deg)}
    100% {transform: rotateX(180deg)}
}
@keyframes unrollBlock {
    0% {transform: rotateX(180deg)}
    50% {transform: rotateX(315deg)}
    100% {transform: rotateX(360deg)}
}
width: 100%;
height: 100%;
overflow: auto;
margin: auto;
position: absolute;
top: 0; left: 0; bottom: 0; right: 0;
display: grid;
font-family: Digital;
section {
    display: flex;
    justify-content: center;
    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: white;
        text-align: center;
        p {
            width: calc(60px + 60 * (100vw / 1400));
            margin: 0;
            padding: 10px 20px;
            display: flex;
            justify-content: center;
        }
    }
}
.mid-row {
    display: flex;
    align-items: center;
    color: white;
    font-size: calc(20px + 20 * (100vw / 1400));
}
.unit-second {
    display: block;
    backface-visibility: hidden;
    animation-name: moving;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: linear
}
.rotateBlock {
        display: block;
        backface-visibility: hidden;
        animation-name: hideBlock;
        animation-duration: 0.5s;
        animation-delay: 0.5s;
        animation-iteration-count: 1;
        animation-timing-function: linear
    }
.staticBlock {
    display: block;
    backface-visibility: hidden;
    animation-name: getBlock;
    animation-duration: 0.5s;
    animation-iteration-count: 1;
    animation-timing-function: linear;
    }
.rollBlock {
        display: block;
        backface-visibility: hidden;
        animation-name: rollBlock;
        animation-duration: 0.5s;
        animation-delay: 0.5s;
        animation-iteration-count: 1;
        animation-timing-function: linear;
}
.staticRoll {
    display: block;
    backface-visibility: hidden;
    animation-name: unrollBlock;
    animation-duration: 0.5s;
    animation-iteration-count: 1;
    animation-timing-function: linear;
}
.display-right {
    color: white;
    background: linear-gradient(to bottom, rgb(50,50,50) 0%, rgb(10,10,10) 50%, rgb(0,0,0) 100%);
    border-radius: 0 50% 50% 0;
    box-shadow: 1px 10px 1px black;
    border: 0.5px solid rgb(5,5,5);
    border-left: none;
}
.display-center {
    color: white;
    background: linear-gradient(to bottom, rgb(50,50,50) 0%, rgb(10,10,10) 50%, rgb(0,0,0) 100%);
    border-right: none;
    box-shadow: 1px 10px 1px black;
    border: 0.5px solid rgb(5,5,5);
    border-right: none;
    border-left: none;
}
.display-left {
    color: white;
    background: linear-gradient(to bottom, rgb(50,50,50) 0%, rgb(10,10,10) 50%, rgb(0,0,0) 100%);
    border-radius: 50% 0 0 50%;
    box-shadow: 1px 10px 1px black;
    border: 0.5px solid rgb(5,5,5);
    border-right: none;
}
.display-single {
    color: white;
    background: linear-gradient(to bottom, rgb(50,50,50) 0%, rgb(10,10,10) 50%, rgb(0,0,0) 100%);
    border-radius: 45%;
    box-shadow: 1px 10px 1px black;
    border: 0.5px solid rgb(5,5,5);
}
`;