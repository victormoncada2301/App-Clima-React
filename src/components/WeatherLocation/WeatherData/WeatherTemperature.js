import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';

// importo el weathers.js donde estan almacendas constantes del clima
import {CLOUD,CLOUDY,SUN,RAIN,SNOW,WINDY,THUNDER,DRIZZLE } from './../../../constants/weathers';

// Desacoplamos el estado del prop para segun los datos para cambiar el icono
const stateToIconName = weatherState => {
  switch (weatherState) {
    case CLOUD:
      return "cloud";
    case CLOUDY:
      return "cloudy";
    case SUN:
      return "day-sunny";
    case RAIN:
      return "rain";
    case SNOW:
      return "snow";
    case WINDY:
      return "day-sunny";
    case THUNDER:
      return "day-thunderstorm";
    case DRIZZLE:
      return "day-showers";
    default:
      return "day-sunny";
  }
};

// función para tomar el estado del clima y asignar el icono
const getWeatherIcon = weatherState => {
  return (<WeatherIcons className="icon" name={stateToIconName(weatherState)} size="2x" />);
};

// El componente WeatherTemperature solo suministra props de entrada temperature,
// por lo tanto weatherState se convierte en un parametro de salida fabricandose
// en el mismo componente
const WeatherTemperature = ({temperature, weatherState}) => (
  <div className="weatherTemperatureCont">
    {getWeatherIcon(weatherState)} {/* Esta función pone aquí el componente WeatherIcons */}
    <span className="infoTemperature">{`${temperature}`}</span>
    <span className="letterCtemperature">Cº</span>
  </div>
);

// validamos propiedades de entrada del componente
// segun el monster esto no es necesario

WeatherTemperature.propTypes = {
  temperature: PropTypes.string.isRequired,
  weatherState: PropTypes.string,
};


export default WeatherTemperature;
