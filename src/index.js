import React from 'react';
import ReactDOM from 'react-dom';
import Home from './views/Home/Home';
import Header from './components/Header/Header';
import './index.css';

import jQuery from 'jquery/dist/jquery.js';
window.jQuery = window.$ = jQuery; //Fuck webpack plugins
require('bootstrap/dist/css/bootstrap.css');
require('bootstrap/dist/js/bootstrap.js');


ReactDOM.render(
	<Header />,
	document.getElementById('header')
);

ReactDOM.render(
  <Home />,
  document.getElementById('root')
);
