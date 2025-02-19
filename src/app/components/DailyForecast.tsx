import { useState, useEffect } from 'react';
import WeatherIcon from "./WeatherIcon";

const DailyForecast = ({data}) => {

    const {day, icon, temperature_max, temperature_min, precipitation, summary} = data;

      const [nowTime, setNowTime] = useState({ day: ''});
      let [weatherDate, setWeatherDate] = useState({ day: ''});
      const [isClient, setIsClient] = useState(false);
    
      useEffect(() => {
        setIsClient(true);
      }, []);
    
    //   if(!isClient) return null;
    
      useEffect(() => {
        if (typeof window !== 'undefined' && typeof navigator !== 'undefined') {
          const language = navigator.language || 'en.US';
    
          const nowDate = {
            day: new Intl.DateTimeFormat(language, {
              weekday: 'short',
              day: '2-digit',
              month: '2-digit',
            }).format(new Date())
          };
    
          setNowTime(nowDate);
        } else {
          setNowTime({ day: 'Unknown'});
        }
      }, [isClient]);
    
      useEffect(() => {
        if (typeof window !== 'undefined' && typeof navigator !== 'undefined') {
          const language = navigator.language || 'en.US';
    
          const weatherDay = {
            day: new Intl.DateTimeFormat(language, {
              weekday: 'short',
              day: '2-digit',
              month: '2-digit',
            }).format(new Date(day))
          };
    
          setWeatherDate(weatherDay);
        } else {
          setWeatherDate({ day: 'Unknown'});
        }
      }, [isClient, day]);

      weatherDate.day = nowTime.day === weatherDate.day ? 'Today' : weatherDate.day;
    
  return (
    <div className="widget">
    <div className="day">{weatherDate.day}</div>
    <div className="icon-temp">
      <div className="icon">
        <WeatherIcon iconNumber={icon} summary={summary} />
      </div>
      <div className="temperature">
        <div className="max">{Math.round(temperature_max)} °F</div>
        <div className="min">{Math.round(temperature_min)} °F</div>
        </div>
      <div className="precipitation">
        {Math.round(precipitation.total)} mm/h
      </div>
      </div>
    </div>
  )
}

export default DailyForecast