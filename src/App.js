//Importar todos los componentes para renderizar en la vista jsx 

import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';
import Paper from 'material-ui/Paper';
import './App.css';

//Declaracion de todas las constantes de las ciudades que consumira la API 

const cities = [
  'Caracas,Ve',
  'Buenos Aires,Ar',
  'Florida,Us',
  'Madrid,Es',
  'Bogotá,Col'
  ];

class App extends Component {

  //En la clase constructor seteo que el valor de la ciudad es null

  constructor(){
    super();
    this.state = { city: null};
  }

  // cuando hago click
  handleSelectedLocation = city => {
    this.setState({ city });
    console.log("Hice click en una ciudad");
  }

  render() {

    const { city } = this.state;

    return (

      <MuiThemeProvider>

        <Grid className='fondo'>
          <Row>
            <Col xs={12} md={12}>
              <div className='menu-app'>
                <h1>Aplicacion del Clima</h1>
                <h1>Victor Moncada</h1>
              </div>
            </Col>
          </Row>

          <Row>  
            <Col xs={12} md={6}>
              <LocationList
                cities={cities} // lista de ciudades
                onSelectedLocation = {this.handleSelectedLocation}>
              </LocationList>
            </Col>
            <Col xs={12} md={6}>
              <Paper zDepth={4}>
                <div className="detail">
                  {
                    city ?
                    <ForecastExtended city={city}></ForecastExtended> :
                    null
                  }
                </div>
              </Paper>
            </Col>
          </Row>
        </Grid>
        
      </MuiThemeProvider>
    );
  }
}

export default App;