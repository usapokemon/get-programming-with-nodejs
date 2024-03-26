'use strict';

const express = require( 'express' ),
  layouts = require( 'express-ejs-layouts' ),
  app = express(),
  homeController = require( './controllers/homeController' ),
  errorController = require( './controllers/errorController' ),
  bodyParser = require( 'body-parser' );
console.log('pass 1');
app.set( 'port', process.env.PORT || 3000 );

app.set( 'view engine', 'ejs' );
app.use( layouts );
app.use( express.static( 'public' ) );

app.use( bodyParser.urlencoded( {
  extended: false
} ) );
app.use( bodyParser.json() );
console.log('pass 2');
app.get( '/', ( req, res ) => {
  res.render( 'index' );
} );
console.log('pass 3');
app.get( '/courses', homeController.showCourses );
console.log('pass 4');
app.get( '/contact', homeController.showSignUp );
console.log('pass 5');
app.post( '/contact', homeController.postedContactForm );
console.log('pass 6');
app.use( errorController.pageNotFoundError );
console.log('pass 7');
app.use( errorController.internalServerError );
console.log('pass 8');
app.listen( app.get( 'port' ), () => {
  console.log( `Server running at http://localhost:${app.get('port')}` );
} );
