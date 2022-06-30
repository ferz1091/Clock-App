export const useWeatherToday = (data) => {

    const wind_direction = data.winddir >= 340 || data.winddir < 20 ? 'North' :
        data.winddir >= 20 || data.winddir < 70 ? 'NE' :
            data.winddir >= 70 || data.winddir < 110 ? 'E' :
                data.winddir >= 110 || data.winddir < 160 ? 'SE' :
                    data.winddir >= 160 || data.winddir < 200 ? 'S' :
                        data.winddir >= 200 || data.winddir < 250 ? 'SW' :
                            data.winddir >= 250 || data.winddir < 290 ? 'W' :
                                data.winddir >= 290 || data.winddir < 340 ? 'NW' : '';
    const wind_speed = (data.windspeed / 3.6).toFixed(1);
    const pressure = Math.trunc(data.pressure / 1.33);
    const humidity = Math.trunc(data.humidity);
    const temp = Math.trunc((data.temp - 32) * 5 / 9);

    return {
        wind_direction,
        wind_speed,
        pressure,
        humidity,
        temp,
    }
}