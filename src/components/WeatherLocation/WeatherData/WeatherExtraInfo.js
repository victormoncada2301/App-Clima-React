import React from 'react';
import PropTypes from "prop-types";

const WeatherExtraInfo = ({ humidity, wind }) => (
  <div className="weatherExtraInfoCont">
    <span className="info">{`Humedad: ${humidity} %`}</span>
    <span className="info">{`Vientos: ${wind}`}</span>
  </div>
);


WeatherExtraInfo.propTypes = {
  humidity: PropTypes.number.isRequired,
  wind : PropTypes.string.isRequired,
};

export default WeatherExtraInfo;
