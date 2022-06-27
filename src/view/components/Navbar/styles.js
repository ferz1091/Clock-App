// Core
import styled from 'styled-components';

export const Sidebar = styled.nav`
height: 40px;
width: 210px;
position: absolute;
left: 50%; top: 0;
transform: translate(-50%, 0);
div {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    a {
        width: 70px;
        height: 40px;
        display: flex;
        background: linear-gradient(to bottom, rgb(50,50,50) 0%, rgb(10,10,10) 50%, rgb(0,0,0) 100%);
        img {
            margin: auto;
        }
    }
    .left-btn {
            border-radius: 50% 0 0 50%;
        }
    .right-btn {
            border-radius: 0 50% 50% 0;
        }
}
button {
    background: linear-gradient(to bottom, rgb(50,50,50) 0%, rgb(10,10,10) 50%, rgb(0,0,0) 100%);
    border-radius: 0 0 50% 50%;
    color: white;
    border: 0.5px solid rgb(5,5,5);
}
.hidden-panel {
    position: absolute;
    left: 50%; top: -50px;
    transform: translate(-50%, 0);
    transition-property: all;
    transition-duration: 2s;
    transition-timing-function: cubic-bezier(0.17,0.04,0.03,0.94);
}
.open-panel {
    position: absolute;
    left: 50%; top: 10px;
    transform: translate(-50%, 0);
    transition-property: all;
    transition-duration: 2s;
    transition-timing-function: cubic-bezier(0.17,0.04,0.03,0.94);
}
.open-btn {
    width: 80px;
    height: 20px;
    position: absolute;
    left: 50%; top: 0px;
    transform: translate(-50%, 0);
    transition-property: all;
    transition-duration: 2s;
    transition-timing-function: cubic-bezier(0.17,0.04,0.03,0.94);
}
.hidden-btn {
    width: 80px;
    height: 20px;
    position: absolute;
    left: 50%; top: -30px;
    transform: translate(-50%, 0);
    transition-property: all;
    transition-duration: 2s;
    transition-timing-function: cubic-bezier(0.17,0.04,0.03,0.94);
}
`;
/* .hidden-panel {
    position: absolute;
    left: 50%;
    top: -50px; */
    /* transition-property: all;
    transition-duration: 1s;
    transition-timing-function: cubic-bezier(0.17,0.04,0.03,0.94); */

/* .open-panel {
    transition-property: all;
    transition-duration: 1s;
    transition-timing-function: cubic-bezier(0.17,0.04,0.03,0.94);
    position: absolute;
    top: 0px;
    left: 50%;
} */
/* .open-btn {
    transition-property: all;
    transition-duration: 1s;
    transition-timing-function: cubic-bezier(0.17,0.04,0.03,0.94);
    transform: translate(50px, 0);
}
.hidden-btn {
    transition-property: all;
    transition-duration: 1s;
    transition-timing-function: cubic-bezier(0.17,0.04,0.03,0.94);
} */