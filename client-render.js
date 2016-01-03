/*
  This file will import stuff needed for rendering React
  at client-side, continuing from the first server-side rendering.
  Thus enable isomorphic rendering.
*/

// Client side will need the React and React DOM itself
import React from 'react';
import ReactDOM from 'react-dom';

// Also need the React Router and info about routes from server
import {Router} from 'react-router';
import {routes} from './routes';

// And need this to use HTML5 style URL (without the ugly #)
import createBrowserHistory from 'history/lib/createBrowserHistory';

// Then tell React to render things to the specific DOM element,
//  using the routes info and HTML5 url history mode
ReactDOM.render(
  <Router routes={routes} history={createBrowserHistory()} />,
  document.getElementById('app')
)