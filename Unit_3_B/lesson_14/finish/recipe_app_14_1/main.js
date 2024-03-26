'use strict';

const express = require( 'express' ),
  layouts = require( 'express-ejs-layouts' ),
  app = express(),
  homeController = require( './controllers/homeController' ),
  errorController = require( './controllers/errorController' ),
  bodyParser = require( 'body-parser' ),
  mongoose = require( 'mongoose' );

mongoose.connect( 'mongodb://localhost/recipe_db',
{ 
  family:4
} );
mongoose.set('strictQuery', true);
const db = mongoose.connection;

db.on( 'open', () => {
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
//console.log("Pass 1")

app.get( '/', ( req, res ) => {
  console.log("Pass /")
  res.render( 'index' );
} ) ;

app.get( '/courses', homeController.showCourses );
app.get( '/contact', homeController.showSignUp );
app.post( '/contact', homeController.postedContactForm );
//console.log("Pass 2")
app.use( errorController.pageNotFoundError );
app.use( errorController.internalServerError );

app.listen( app.get( 'port' ), () => {
  console.log( `Server running at http://localhost:${app.get('port')}` );
} );
//console.log("Pass 3")
