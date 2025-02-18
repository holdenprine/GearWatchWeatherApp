import { useState, useEffect } from "react";
import WeatherIcon from "./WeatherIcon";
import { CiTempHigh } from "react-icons/ci";
import { WiDirectionUp } from "react-icons/wi";

const HourlyForecast = ({data}) => {

    const TempIcon = CiTempHigh as unknown as React.FC;
    const DirectionIcon = WiDirectionUp as unknown as React.FC;

    const {date, icon, summary, temperature, precipitation, wind} = data;

    // date formatting -> needs an update because component is running server side -> navigator is not defined so must handle a default case
    // temp solution whilst working without a backend
    const [nowTime, setNowTime] = useState({day:'', time:''});
    const [weatherDate, setWeatherDate] = useState({day:'', time:''});

    useEffect(() => {
        if(typeof window !== 'undefined' && typeof navigator !== 'undefined') {
            const language = navigator.language || 'en.US'

            const nowDate = {
                day: new Intl.DateTimeFormat(language, {
                    weekday: "short",
                    day: "2-digit",
                    month: "2-digit"
                }).format(new Date()),
                time: new Intl.DateTimeFormat(language, {
                    hour: "2-digit",
                    minute: "2-digit",
                }).format(new Date().setMinutes(0)),
            };

            setNowTime(nowDate);
        } else {
            setNowTime({day: 'Unknown', time: 'Unknown'});
        }
    }, []);

    useEffect(() => {
        if(typeof window !== 'undefined' && typeof navigator !== 'undefined') {
            const language = navigator.language || 'en.US'

            const weatherDay = {
                day: new Intl.DateTimeFormat(language, {
                    weekday: "short",
                    day: "2-digit",
                    month: "2-digit"
                }).format(new Date(date)),
                time: new Intl.DateTimeFormat(language, {
                    hour: "2-digit",
                    minute: "2-digit",
                }).format(new Date(date).setMinutes(0)),
            };

            setWeatherDate(weatherDay);
        } else {
            setWeatherDate({day: 'Unknown', time: 'Unknown'});
        }
    }, []);


    // const nowTime = {
    //     day: new Intl.DateTimeFormat(typeof navigator !== undefined ? navigator.language : 'en-US', {
    //         weekday: "short",
    //         day: "2-digit",
    //         month: "2-digit"
    //     }).format(new Date()),
    //     time:new Intl.DateTimeFormat(typeof navigator !== undefined ? navigator.language : 'en-US', {
    //         hour: "2-digit",
    //         minute: "2-digit",
    //     }).format(new Date()),
    // };
    // console.log(nowTime);
    

  return (
    <div className='widget'>
        <div className="day">{weatherDate.day}</div>
        <div className="time">{weatherDate.time}</div>
        <div className="icon-temp">
            <div className="icon">
                <WeatherIcon iconNumber={icon} summary={summary}/>
            </div>
            <div className="temperature">{Math.round(temperature)} °F</div>
            <div className="precipitation">{Math.round(precipitation.total)} mm/h</div>
            <div className="wind">
                <div className="speed">{Math.round(wind.speed)} mph</div>
                <div className="direction" style={{transform: `rotate(${wind.angle}deg)`}}><DirectionIcon /></div>
            </div>
        </div>
    </div>
  )
}

export default HourlyForecast