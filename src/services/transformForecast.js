//Este archivo es la transformacion de las horas en los distintos periodos del dia
import moment from 'moment';
import transformWeather from './transformWeather';

const transformForecast = data => (
  
  data.list.filter(item => (
  	// filtramos los datos por las horas
  	// acá hay que acomodar las horas para que salgan a las 6 am a las 12 am/pm y a las 6 pm
  	// osea 6, 12, y 18

    //utilizaremos la libreria moment
    moment.unix(item.dt).utc().hours() === 6 ||
    moment.unix(item.dt).utc().hour() === 12 ||
    moment.unix(item.dt).utc().hour() === 18
  )).map( item => ( // esperamos una función (objeto) para transformar
  	 {
  	 	weekDay: moment.unix(item.dt).format('ddd'), // el día las tres primeras letras
  	 	hour: moment.unix(item.dt).hour(), //
  	 	data: transformWeather(item)

	 }
  ))
);

export default transformForecast;