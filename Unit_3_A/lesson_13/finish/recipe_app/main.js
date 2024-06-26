'use strict';

const express = require( 'express' ),
  layouts = require( 'express-ejs-layouts' ),
  app = express(),
  homeController = require( './controllers/homeController' ),
  errorController = require( './controllers/errorController' ),
  bodyParser = require( 'body-parser' );
  
const
  MongoDB = require( 'mongodb' ).MongoClient,
  dbURL = 'mongodb://localhost:27017/',
  dbName = 'usersdb';
   
 
MongoDB.connect( dbURL, 
  { 
    family: 4
  },
  ( error, client ) => {
  if ( error ) throw error;
  let db = client.db( dbName );
  
  db.collection( 'contacts' )
    .find()
    .toArray( ( error, data ) => {
      if ( error ) throw error;
      console.log( data );
    } );
  
  db.collection( 'contacts' )
    .insertOne( {
      name: 'Freddie Mercury',
      email: 'fred@queen.com'
    }, ( error, db ) => {
      if ( error ) throw error;
      console.log( 'insertOne Done!' );
    } );
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

app.get( '/courses', homeController.showCourses );
app.get( '/contact', homeController.showSignUp );
app.post( '/contact', homeController.postedContactForm );


app.use( errorController.pageNotFoundError );
app.use( errorController.internalServerError );

app.listen( app.get( 'port' ), () => {
  console.log( `Server running at http://localhost:${app.get('port')}` );
} );
