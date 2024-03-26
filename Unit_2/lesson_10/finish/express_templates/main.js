'use strict';

const express = require( 'express' ),
  layouts = require( 'express-ejs-layouts' ),
  app = express(),
  path= require('path'),
  homeController = require( './controllers/homeController' );

app.set( 'port', process.env.PORT || 3000 );
app.set( 'view engine', 'ejs' );
app.set( 'views', path.join(__dirname, 'views'));


app.use( layouts );
app.use( homeController.logRequestPaths );
app.get('/', (req, res)=> {
  
  console.log("*** In main.js - before rendering index");
  res.render('index', {title: "index", name: "Jon"});
})

app.get( '/items/:vegetable', homeController.sendReqParam );
app.get( '/name/:myName', homeController.respondWithName );

app.listen( app.get( 'port' ), () => {
  console.log( `Server running on port: ${app.get('port')}` );
} );
