// Core
import styled from 'styled-components';

// Assets
import Cabin from '../../../../../assets/fonts/Cabin-Regular.woff2';
import RobotoMono from '../../../../../assets/fonts/RobotoMono-Regular.woff2';


export const TodayWrapper = styled.div`
@font-face {
    font-family: 'Cabin';
    src: url(${Cabin});
}
@font-face {
    font-family: 'Roboto';
    src: url(${RobotoMono});
}
.temp {
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-40%, -250%);
    font-family: Roboto;
    font-size: 70px;
    sup {
        font-size: 30px;
    }
}
.weather-icon {
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
    img {
        max-width: 200px;
    }
}
.parameters {
    position: absolute;
    top: 50%;
    left:50%;
    transform: translate(-50%, 80%);
    display: flex;
    flex-direction: column;
    font-size: 18px;
    font-family: Cabin;
    sup {
        font-size: 14px;
    }
    span {
        padding-top: 3px;
        font-weight: 100;
    }
}
@media (max-width: 768px) {
    .parameters {
        flex-direction: row;
        top: 65%;
        span {
            padding: 0 10px;
        }
    }
    .weather-icon {
        img {
            max-width: 150px;
        }
    }
    .temp {
        font-size: 50px;
    }
}
@media (max-height: 600px) {
    .parameters {
        flex-direction: row;
        top: 65%;
        span {
            padding: 0 10px;
        }
    }
    .weather-icon {
        img {
            max-width: 150px;
        }
    }
    .temp {
        font-size: 50px;
    }
}
@media (max-height: 400px) {
    .temp {
        font-size: 40px;
        transform: translate(-50%, -200%);
    }
    .weather-icon {
        img {
            max-width: 100px;
        }
    }
}
`;