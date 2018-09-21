import convert from 'convert-units';
import {CLOUDY,SUN,RAIN,SNOW,THUNDER,DRIZZLE } from './../constants/weathers';

//Convertir la temperatura de kelvin a grados celsius

const getTemp = kelvin => {
	return convert(kelvin).from('K').to('C').toFixed(1);
}

const getWeatherState = weather => {
	const { id } = weather[0];
	// segùn el id que proprociona la api del clima ntonces ponemos el icono
	if(id < 300)
	{
		return THUNDER;
	} 
	else if (id < 400)
	{
		return DRIZZLE;
	}
	else if (id < 600)
	{
		return RAIN;
	}
	else if (id < 700)
	{
		return SNOW;
	}
	else if (id === 800)
	{
		return SUN;
	}
	else{
		return CLOUDY;
	}
}

const transformWeather = (weather_data) => {
	// Recibimos el json de la API acomodamos a la estructura de datos que necesitamos
	const { weather } = weather_data;
	const { humidity, temp } = weather_data.main;
	const { speed } = weather_data.wind;
	const weatherState = getWeatherState(weather);
	const temperature = getTemp(temp);

	//Organizamos la data 	
	const dataOrganizada = {
		humidity,
		temperature,
		weatherState,
		wind: `${speed} ms`,
	}

	return dataOrganizada;
} 

export default transformWeather;