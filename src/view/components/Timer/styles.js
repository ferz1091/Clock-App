// Core
import styled from 'styled-components';

// Assets
import Digital from '../../../assets/fonts/digital-7.woff2';
import deleteIcon from '../../../assets/icons/delete.png';
import deleteActiveIcon from '../../../assets/icons/delete_active.png';
import editIcon from '../../../assets/icons/edit.png';
import editActiveIcon from '../../../assets/icons/edit_active.png';

export const TimerContainer = styled.section`
@font-face {
    font-family: 'Digital';
    src: url(${Digital}) format('woff2');
}
position: absolute;
top: 0; right: 0; bottom: 0; left: 0;
height: 100%;
width: 100%;
overflow: hidden;
margin: auto;
box-sizing: border-box;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
.btn-down, .btn-up {
    position: absolute;
    left: 50%; bottom: 0px;
    transform: translate(-50%, 0);
    width: 80px;
    height: 20px;
    background: linear-gradient(to bottom, rgb(50,50,50) 0%, rgb(10,10,10) 50%, rgb(0,0,0) 100%);
    border-radius: 50% 50% 0 0;
    color: white;
    border: 0.5px solid rgb(5,5,5);
    transition-property: all;
    transition-duration: 2s;
    transition-timing-function: cubic-bezier(0.17,0.04,0.03,0.94);
}
.btn-up {
    bottom: 100px;
}
.saved-points, .saved-points-hidden {
    position: absolute;
    bottom: 10px;
    left: 50%;
    height: 90px;
    box-sizing: border-box;
    overflow-y: auto;
    overflow-x: hidden;
    transform: translate(-50%, 0);
    background: linear-gradient(to top, rgb(85, 85, 85) 0%,  rgb(100, 100, 100) 50%,  rgb(85, 85, 85) 100%);
    border: 1px solid black;
    border-radius: 5px;
    box-shadow: 0px 5px 5px black;
    color: white;
    transition-property: all;
    transition-duration: 2s;
    transition-timing-function: cubic-bezier(0.17,0.04,0.03,0.94);
    input {
        outline: none;
        background-color: rgba(180,180,180, 0.6);
        border: 3px solid rgba(180,180,180, 0.8);
        border-radius: 5px;
        position: absolute;
            left: 20%;
            width: 50px;
            display: inline;
    }
    ul {
        font-style: italic;
        width: 250px;
        display: flex;
        flex-direction: column;
        align-items: center;
        list-style-type: none;
        margin: 0;
    }
    li {
        height: 25px;
        padding-top: 5px;
        text-align: center;
        font-size: 14px;
        .deleteIcon {
            position: relative;
            left: 55px;
            display: inline-block;
            width: 14px;
            height: 14px;
            background-image: url(${deleteIcon});
            background-repeat:no-repeat;
        }
        .deleteIcon:hover {
            background-image: url(${deleteActiveIcon});
        }
        .index {
            position: relative;
            right: 90px;
        }
        .editIcon {
            position: relative;
            right: 80px;
            display: inline-block;
            width: 14px;
            height: 14px;
            background-image: url(${editIcon});
            background-repeat:no-repeat;
        }
        .editIcon:hover{
            background-image: url(${editActiveIcon});
        }
        .name {
            overflow: hidden;
            white-space: nowrap;
            position: absolute;
            left: 20%;
            width: 50px;
        }
    }
}
.saved-points-hidden {
    bottom: -90px;
}
.saved-points::-webkit-scrollbar, .saved-points-hidden::-webkit-scrollbar {
    width: 2px;
    background-color: white;
}
.saved-points::-webkit-scrollbar-thumb, .saved-points-hidden::-webkit-scrollbar-thumb {
    background-color: grey;
}
.board {
    position: absolute;
    top: 35%;
    display: flex;
    justify-content: center;
    width: 100%;
    font-size: calc(40px + 15 * (100vw / 1400));
    color: black;
    font-family: Digital;
    span {
        background-color: white;
        padding: 0 5px;
        border: 1px solid black;
        border-radius: 3px;
    }
    .colon {
        margin-left: 5px;
    }
    .dial-ms-100 {
        margin-left: 5px;
    }
    .dial-sec-10 {
        margin-left: 5px;
    }
}
.control {
    position: absolute;
    top: 55%;
    width: 100px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 10px;
    button {
        border: none;
        box-sizing: border-box;
        display: flex;
        height: 50px;
        width: 50px;
        img {
            margin: auto;
        }
    }
    button:hover {
        background: radial-gradient(circle, rgb(0,0,0) 15%, rgb(45,45,45) 50%, rgb(50,50,50) 85%);

    }
    .start {
        cursor: pointer;
        background: linear-gradient(to top left, rgb(50,50,50) 0%, rgb(10,10,10) 50%, rgb(0,0,0) 100%);
        border-radius: 50% 0 0 0;
        border-left: 1px solid rgb(0,0,0);
        border-top: 1px solid rgb(0,0,0);
        }
    .start:disabled {
        background: linear-gradient(to top left, rgb(50,50,50) 0%, rgb(10,10,10) 50%, rgb(0,0,0) 100%);
    }
    .start:hover {
        border-left: 1px solid rgb(20,20,20);
        border-top: 1px solid rgb(20,20,20);
    }
    .pause {
            cursor: pointer;
            background: linear-gradient(to top right, rgb(50,50,50) 0%, rgb(10,10,10) 50%, rgb(0,0,0) 100%);
            border-radius: 0 50% 0 0;
            border-right: 1px solid rgb(0,0,0);
            border-top: 1px solid rgb(0,0,0);
        }
    .pause:disabled {
        background: linear-gradient(to top right, rgb(50,50,50) 0%, rgb(10,10,10) 50%, rgb(0,0,0) 100%);
    }
    .pause:hover {
        border-right: 1px solid rgb(20,20,20);
        border-top: 1px solid rgb(20,20,20);
    }
    .reset {
            cursor: pointer;
            background: linear-gradient(to bottom left, rgb(50,50,50) 0%, rgb(10,10,10) 50%, rgb(0,0,0) 100%);
            border-radius: 0 0 0 50%;
            border-left: 1px solid rgb(0,0,0);
            border-bottom: 1px solid rgb(0,0,0);
        }
    .reset:disabled {
        background: linear-gradient(to bottom left, rgb(50,50,50) 0%, rgb(10,10,10) 50%, rgb(0,0,0) 100%);
    }
    .reset:hover {
        border-left: 1px solid rgb(20,20,20);
        border-bottom: 1px solid rgb(20,20,20);
    }
    .save {
            cursor: pointer;
            background: linear-gradient(to bottom right, rgb(50,50,50) 0%, rgb(10,10,10) 50%, rgb(0,0,0) 100%);
            border-radius: 0 0 50% 0;
            border-right: 1px solid rgb(0,0,0);
            border-bottom: 1px solid rgb(0,0,0);
        }
    .save:disabled {
        background: linear-gradient(to bottom right, rgb(50,50,50) 0%, rgb(10,10,10) 50%, rgb(0,0,0) 100%);
    }
    .save:hover {
        border-right: 1px solid rgb(20,20,20);
        border-bottom: 1px solid rgb(20,20,20);
    }
    button:disabled {
        img {
            opacity: 0.3;
        }
    }
}
`;