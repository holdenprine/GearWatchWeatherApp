import WeatherIcon from "./WeatherIcon";
import { getCurrentWeather } from "../api";
import { CiDroplet } from "react-icons/ci";
import { TbWind } from "react-icons/tb";
import { BsMoisture } from "react-icons/bs";
import { TbSunglassesFilled } from "react-icons/tb";
import { CiCloud } from "react-icons/ci";
import { MdOutlineVisibility } from "react-icons/md";

const CurrentWeather = () => {

  const DropletIcon = CiDroplet as unknown as React.FC;
  const WindIcon = TbWind as unknown as React.FC;
  const MoistureIcon = BsMoisture as unknown as React.FC;
  const UVIcon = TbSunglassesFilled as unknown as React.FC;
  const CloudCoverIcon = CiCloud as unknown as React.FC;
  const VisibilityIcon = MdOutlineVisibility as unknown as React.FC;

  const data = getCurrentWeather();
  const {
    cloud_cover, feels_like, humidity, icon_num, precipitation, summary, temperature, uv_index, visibility, wind,
  } = data;
  
  const otherInfoWidgets = [
    {
      id: 0,
      icon: <DropletIcon />,
      name: 'Precipitation',
      value: Math.round(precipitation.total),
      // unit: units.precipitation,
      unit: 'in/h',
    },
    {
      id: 1,
      icon: <WindIcon />,
      name: 'Wind',
      value: Math.round(wind.speed),
      // unit: units.wind_speed,
      unit: 'mph',
    },
    {
      id: 2,
      icon: <MoistureIcon />,
      name: 'Humidity',
      value: Math.round(humidity),
      // unit: units.humidity,
      unit: '%',
    },
    {
      id: 3,
      icon: <UVIcon />,
      name: 'UV index',
      value: Math.round(uv_index),
      // unit: units.uv_index,
      unit: '',
    },
    {
      id: 4,
      icon: <CloudCoverIcon />,
      name: 'Cloud cover',
      value: Math.round(cloud_cover),
      // unit: units.cloud_cover,
      unit: '%',
    },
    {
      id: 5,
      icon: <VisibilityIcon />,
      name: 'Visibility',
      value: Math.round(visibility),
      // unit: units.visibility,
      unit: 'mi',
    },
  ];

  return (
    <div className='CurrentWeather'>
      <div className='temperature'>
        <div className="weather-icon">
          <WeatherIcon iconNumber={icon_num} summary={summary}/>
        </div>
        <div className='value'>
          {/* hard coded for now */}
          <div className='real'>{temperature} °F</div>
          <div className='feels_like'>feels like {feels_like} °F</div>
        </div>
        <div className='summary'>{summary}</div>
      </div>
      <div className='other-infos'>
        {otherInfoWidgets.map(({id, icon, name, value, unit}) => {
          return (
          <div className='widget' key={id}>
            <div className='widget-container'>
              <div className='info'>
                <div className='icon'>
                  {icon}
                </div>
                <div className='value'>{value} {unit}</div>
              </div>
              <div className='name'>{name}</div>
            </div>
          </div>
        )
        })}
      </div>
    </div>
  )
}

export default CurrentWeather