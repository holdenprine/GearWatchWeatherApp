

const WeatherIcon = ({iconNumber, summary}) => {
  return (
    <div className='weather-icon'>
          <img src={`/weather_icons/set04/big/${iconNumber}.png`} alt={summary} />
        </div>
  )
}

export default WeatherIcon