// This is our web server
// Using NodeJS with ExpressJS

// This is modules for basic web server
import express from 'express';
import http from 'http';

// This is for React and the magic isomorphic rendering
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RoutingContext } from 'react-router';
import { routes } from './routes';

// Now create a basic web server and tell it to serve files
const app = express();
app.use(express.static('public'));
app.set('view engine', 'ejs');

// Now setup routing system that enable isomorphic rendering.
app.get('*', (req, res) => {
  // routes is our object of React routes defined above
  match({ routes, location: req.url }, (err, redirectLocation, props) => {
    if (err) {
      // something went badly wrong, so 500 with a message
      res.status(500).send(err.message);
    } else if (redirectLocation) {
      // we matched a ReactRouter redirect, so redirect from the server
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (props) {
      // if we got props, that means we found a valid component to render
      // for the given route
      const markup = renderToString(<RoutingContext {...props} />);

      // render `index.ejs`, but pass in the markup we want it to display
      res.render('index', { markup })

    } else {
      // no route match, so 404. In a real app you might render a custom
      // 404 view here
      res.sendStatus(404);
    }
  });
});

// Get our server online and listen to requests
const server = http.createServer(app);

server.listen(3003);
server.on('listening', () => {
    console.log('Listening on 3003');
});
