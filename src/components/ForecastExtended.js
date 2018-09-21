import React, { Component } from 'react';
import ForecastItem from './ForecastItem';
import PropTypes from 'prop-types';
import transformForecast from './../services/transformForecast';
import './styles.css';

const api_key = "ffe0ccba31be4e86a7c11258bf18f080";
const url = "http://api.openweathermap.org/data/2.5/forecast";

class ForecastExtended extends Component {

	constructor(){
		super();
		this.state = {forecastData : null}
	}

	componentDidMount() {
		this.updateCity(this.props.city);
	}

	// actualizamos el componente
	// por medio de city
	// componentWillReceiveProps
	// se ejecuta cada vez que hay alguna
	// actualización de las propiedades
	componentWillReceiveProps(nextProps){
		// la city que viene es diferente de la city establecida
		if(nextProps.city !== this.props.city) {
			this.setState({ forecastData: null });
			this.updateCity(nextProps.city);
		}
	}

	updateCity = city => {
		const url_forecast = `${url}?q=${city}&appid=${api_key}`;

		fetch(url_forecast).then( data => {
			return data.json();
		}).then(
			weather_data => {
				//Obtiene la data completa de la respuesta de la api en formato json
				console.log(weather_data);
				// transformamos la informacion que necesitamos
				// filtrando los pronosticos correspondientes a
				// 6 12 y 18 (horas)
				const forecastData = transformForecast(weather_data);
				console.log("datos transformados: ");
				console.log(forecastData);
				this.setState({ forecastData });
			}
		);
	}

	renderForecastItemDays(forecastData) {
		return forecastData.map( forecast => (
			<ForecastItem
				key={`${forecast.weekDay}${forecast.hour}`}
				weekDay={forecast.weekDay}
				hour={forecast.hour}
				data={forecast.data}>
			</ForecastItem>
			)
		);
	}

	renderProgress = () => {
		return <h3>"Cargando pronostico..."</h3>;
	}

	render() {
		const { city } = this.props;
		const {forecastData} = this.state; // tomo del servidor cuando el state lo establezca
		return (
			<div>
				<h1 className="forecast-titulo">Pronóstico Extendido: {city}</h1>
				{forecastData ? // si hay data para el componente
					this.renderForecastItemDays(forecastData) :
					this.renderProgress()
				}
			</div>  );
	}
}

ForecastExtended.propTypes = {
	city: PropTypes.string.isRequired,
}

export default ForecastExtended;
