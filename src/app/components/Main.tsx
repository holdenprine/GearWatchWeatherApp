"use client";
import React from 'react'
import CurrentWeather from './CurrentWeather';
import Forecast from './Forecast';
import { getHourlyForecast, getDailyForecast  } from '../api';

const Main = () => {
  return (
    <div className='Main'>
      <CurrentWeather />
      <Forecast type='hourly' title='Hourly Forecast' data={getHourlyForecast()}/>
      <Forecast type='daily' title='21 Day Forecast' data={getDailyForecast()}/>
    </div>
  )
}

export default Main