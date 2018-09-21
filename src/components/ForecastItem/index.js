import React from 'react';
import PropTypes from 'prop-types';
import WeatherData from './../WeatherLocation/WeatherData';
import './styles.css';

const ForecastItem = ({ weekDay, hour, data }) => (
  <div>
    <h3 className="horadiainfo">Día: {weekDay} Hora: {hour} hs</h3>
      <WeatherData data={data}></WeatherData>
  </div>
);

ForecastItem.propTypes = {
  weekDay: PropTypes.string.isRequired,
  hour:PropTypes.number.isRequired,
  temperature: PropTypes.number,
  weatherState: PropTypes.string,
  humidity: PropTypes.number,
  wind:PropTypes.string,
}

export default ForecastItem;
