import DailyForecast from "./DailyForecast";
import HourlyForecast from "./HourlyForecast";

const Forecast = ({ type, title, data }) => {
  return (
    <div className='Forecast'>
      <div className='forecast-container'>
        <h2>{title}</h2>
        <div className="widget-container">
          {data.map((singleData, index) => (
            <div key={index}>
              {type === 'hourly' ? (
                <HourlyForecast data={singleData} />
              ) : (
                <DailyForecast data={singleData} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Forecast;