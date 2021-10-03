import React from 'react';
import ReactDOM from 'react-dom';
import './styles/style.css';
import {RegistroApp} from './RegistroApp';
import {Provider} from 'react-redux';
import {store} from './store/store';
import MapView from './components/MapView';
import { Zoom } from './components/Zoom';


ReactDOM.render(
  // <Provider store={store}>
  //   <RegistroApp />
  // </Provider>,
  <MapView/>,
  document.getElementById('root')
);

