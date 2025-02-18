import currentWeather from './mock-current-weather.json';
import dailyForecast from './mock-daily-forecast.json';
import hourlyForecast from './mock-hourly-forecast.json';

const getCurrentWeather = () => {
    return currentWeather.current;
}

const getDailyForecast = () => {
    return dailyForecast.daily.data;
}

const getHourlyForecast = () => {
    return hourlyForecast.hourly.data;
}

export { getCurrentWeather, getDailyForecast, getHourlyForecast };