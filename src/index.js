import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import './style/style.scss';

import { BrowserRouter } from 'react-router-dom';

// import MarvelService from './services/marvelService';
// const marvelService = new MarvelService();

// marvelService.getAllCharacters().then((res) => console.log(res));

//===> Codiac
// marvelService
//   .getCharacter(1011052)
//   .then((res) => console.log(res.data.results));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
