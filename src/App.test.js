//Archivo que importa los componentes internos de la libreria de react
//A su vez importa la aplicacion y la renderiza en el DOM 

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
