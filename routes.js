/*
  This file specifies all routes for the app
  This file is used on both server and client
*/

import AppComponent from './components/app';
import IndexComponent from './components/index';
import AboutComponent from './components/about';

const routes = {
  path: '',
  component: AppComponent,
  childRoutes: [{
    path: '/',
    component: IndexComponent
  },
  {
    path: '/about',
    component: AboutComponent
  }]
};

export {routes};