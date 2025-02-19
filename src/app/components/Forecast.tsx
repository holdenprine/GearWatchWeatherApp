import DailyForecast from "./DailyForecast";
import HourlyForecast from "./HourlyForecast";
import HorizontalScroll from "./HorizontalScroll";

const Forecast = ({ type, title, data }) => {
  return (
    <div className='Forecast'>
      <div className='forecast-container'>
        <h2>{title}</h2>
        <HorizontalScroll className="widget-container">
          {data.map((singleData, index) => (
            <div key={index}>
              {type === 'hourly' ? (
                <HourlyForecast data={singleData} />
              ) : (
                <DailyForecast data={singleData} />
              )}
            </div>
          ))}
        </HorizontalScroll>
      </div>
    </div>
  );
};

export default Forecast;