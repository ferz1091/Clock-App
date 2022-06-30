// Assets
import type_1 from '../../../../../assets/icons/weather/type_1.png';
import type_2 from '../../../../../assets/icons/weather/type_2.png';
import type_3 from '../../../../../assets/icons/weather/type_3.png';
import type_4 from '../../../../../assets/icons/weather/type_4.png';
import type_5 from '../../../../../assets/icons/weather/type_5.png';
import type_6 from '../../../../../assets/icons/weather/type_6.png';
import type_7 from '../../../../../assets/icons/weather/type_7.png';
import type_8 from '../../../../../assets/icons/weather/type_8.png';
import type_9 from '../../../../../assets/icons/weather/type_9.png';
import type_10 from '../../../../../assets/icons/weather/type_10.png';
import type_11 from '../../../../../assets/icons/weather/type_11.png';
import type_12 from '../../../../../assets/icons/weather/type_12.png';
import type_13 from '../../../../../assets/icons/weather/type_13.png';
import type_14 from '../../../../../assets/icons/weather/type_14.png';
import type_15 from '../../../../../assets/icons/weather/type_15.png';
import type_16 from '../../../../../assets/icons/weather/type_16.png';
import type_17 from '../../../../../assets/icons/weather/type_17.png';
import type_18 from '../../../../../assets/icons/weather/type_18.png';
import type_19 from '../../../../../assets/icons/weather/type_19.png';
import type_20 from '../../../../../assets/icons/weather/type_20.png';
import type_21 from '../../../../../assets/icons/weather/type_21.png';
import type_22 from '../../../../../assets/icons/weather/type_22.png';
import type_23 from '../../../../../assets/icons/weather/type_23.png';
import type_24 from '../../../../../assets/icons/weather/type_24.png';
import type_25 from '../../../../../assets/icons/weather/type_25.png';
import type_26 from '../../../../../assets/icons/weather/type_26.png';
import type_27 from '../../../../../assets/icons/weather/type_27.png';
import type_28 from '../../../../../assets/icons/weather/type_28.png';
import type_29 from '../../../../../assets/icons/weather/type_29.png';
import type_29n from '../../../../../assets/icons/weather/type_29n.png';
import type_30 from '../../../../../assets/icons/weather/type_30.png';
import type_31 from '../../../../../assets/icons/weather/type_31.png';
import type_32 from '../../../../../assets/icons/weather/type_32.png';
import type_33 from '../../../../../assets/icons/weather/type_33.png';
import type_34 from '../../../../../assets/icons/weather/type_34.png';
import type_35 from '../../../../../assets/icons/weather/type_35.png';
import type_36 from '../../../../../assets/icons/weather/type_36.png';
import type_37 from '../../../../../assets/icons/weather/type_37.png';
import type_38 from '../../../../../assets/icons/weather/type_38.png';
import type_39 from '../../../../../assets/icons/weather/type_39.png';
import type_40 from '../../../../../assets/icons/weather/type_40.png';
import type_41 from '../../../../../assets/icons/weather/type_41.png';
import type_42 from '../../../../../assets/icons/weather/type_42.png';
import type_42n from '../../../../../assets/icons/weather/type_42n.png';
import type_43 from '../../../../../assets/icons/weather/type_43.png';
import type_43n from '../../../../../assets/icons/weather/type_43n.png';

export const Icon = (props) => {
    function getIcon() {
        switch(props.condition) {
            case 'Blowing Or Drifting Snow': return type_1;
            case 'Drizzle': return type_2;
            case 'Heavy Drizzle': return type_3;
            case 'Light Drizzle': return type_4;
            case 'Heavy Drizzle/Rain': return type_5;
            case 'Light Drizzle/Rain': return type_6;
            case 'Duststorm': return type_7;
            case 'Fog': return type_8;
            case 'Freezing Drizzle/Freezing Rain': return type_9;
            case 'Heavy Freezing Drizzle/Freezing Rain': return type_10;
            case 'Light Freezing Drizzle/Freezing Rain': return type_11;
            case 'Freezing Fog': return type_12;
            case 'Heavy Freezing Rain': return type_13;
            case 'Light Freezing Rain': return type_14;
            case 'Funnel Cloud/Tornado': return type_15;
            case 'Hail Showers': return type_16;
            case 'Ice': return type_17;
            case 'Lightning Without Thunder': return type_18;
            case 'Mist': return type_19;
            case 'Precipitation In Vicinity': return type_20;
            case 'Rain': return type_21;
            case 'Heavy Rain And Snow': return type_22;
            case 'Light Rain And Snow': return type_23;
            case 'Rain Showers': return type_24;
            case 'Heavy Rain': return type_25;
            case 'Light Rain': return type_26;
            case 'Sky Coverage Decreasing': return type_27;
            case 'Sky Coverage Increasing': return type_28;
            case 'Sky Unchanged': if (props.datetime) {
                if (props.datetime >= 21 || props.datetime < 5) {
                    return type_29n;
                } else {
                    return type_29;
                }
            } else if (new Date().getHours() >= 21 || new Date().getHours() < 5) {
                return type_29n;
            } else {
                return type_29;
            }
            case 'Smoke Or Haze': return type_30;
            case 'Snow': return type_31;
            case 'Snow And Rain Showers': return type_32;
            case 'Snow Showers': return type_33;
            case 'Heavy Snow': return type_34;
            case 'Light Snow': return type_35;
            case 'Squalls': return type_36;
            case 'Thunderstorm': return type_37;
            case 'Thunderstorm Without Precipitation': return type_38;
            case 'Diamond Dust': return type_39;
            case 'Hail': return type_40;
            case 'Overcast': return type_41;
            case 'Partially cloudy': if (props.datetime) {
                if (props.datetime >= 21 || props.datetime < 5) {
                    return type_42n;
                } else {
                    return type_42;
                } 
            } else if (new Date().getHours() >= 21 || new Date().getHours() < 5) {
                return type_42n;
            } else {
                return type_42;
            };
            case 'Clear': if (props.datetime) {
                if (props.datetime >= 21 || props.datetime < 5) {
                    return type_43n;
                } else {
                    return type_43;
                }
            } else if (new Date().getHours() >= 21 || new Date().getHours() < 5) {
                return type_43n;
            } else {
                return type_43;
            };
            default: return 'Error';
        }
    }
    const IconRef = getIcon();

    return (
        <>
        <img 
            src = {IconRef} 
            alt = 'current-weather-icon'/>
        </>
    )
}