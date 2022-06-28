// Hooks
import { useWeather } from '../../../tools';

export const Weather = () => {
    const { weatherData } = useWeather();
    console.log(weatherData);
    return (
        <section>
            Weather
        </section>
    )
}