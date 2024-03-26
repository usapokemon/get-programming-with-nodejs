'use strict';

const express = require( 'express' ),
  layouts = require( 'express-ejs-layouts' ),
  app = express(),

  homeController = require( './Controllers/homeController' ),
  errorController = require( './Controllers/errorController' ),
  subscribersController = require( './Controllers/subscribersController' ),

  bodyParser = require( 'body-parser' ),
  mongoose = require( 'mongoose' );

mongoose.connect( 'mongodb://localhost/recipe_db', 
    {
      useNewUrlParser: true, 
      useUnifiedTopology: true,
      family: 4
    } );
 
const db = mongoose.connection;

db.once( 'open', () => {
  console.log( 'Successfully connected to MongoDB using Mongoose!' );
} );

app.set( 'port', process.env.PORT || 3000 );

app.set( 'view engine', 'ejs' );
app.use( layouts );
app.use( express.static( 'public' ) );

app.use( bodyParser.urlencoded( {
  extended: false
} ) );
app.use( bodyParser.json() );

app.get( '/', ( req, res ) => {
  res.render( 'index' );
} );

app.get( '/subscribers', subscribersController.getAllSubscribers, ( req, res, next ) => {
  console.log( req.data );
  res.send( req.data );
} );

app.get( '/courses', homeController.showCourses );
app.get( '/contact', homeController.showSignUp );
app.post( '/contact', homeController.postedContactForm );

app.use( errorController.pageNotFoundError );
app.use( errorController.internalServerError );

app.listen( app.get( 'port' ), () => {
  console.log( `Server running at http://localhost:${app.get('port')}` );
} );
