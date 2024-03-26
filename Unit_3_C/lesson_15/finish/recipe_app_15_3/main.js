'use strict';

const express = require( 'express' ),
  layouts = require( 'express-ejs-layouts' ),
  app = express(),
  path= require('path'),

  homeController = require( './controllers/homeController' ),
  errorController = require( './controllers/errorController' ),
  subscribersController = require( './controllers/subscribersController' ),

  bodyParser = require( 'body-parser' ),
  mongoose = require( 'mongoose' );
console.log('pass 1');
const  Subscriber = require( './models/subscriber' );
console.log('pass 2');
mongoose.Promise = global.Promise;
console.log('pass 3');
//mongoose.set ('useNewUrlParser', true);
//mongoose.set ('useUnifiedTopology', true);

mongoose.connect( 'mongodb://localhost/recipe_db', 
{ family: 4 } );
mongoose.set('strictQuery', true);
const db = mongoose.connection;
console.log('pass 4');
var myQuery = Subscriber.findOne( {
    name: 'Jon Wexler'
  } )
  .where( 'email', /wexler/ )
  .exec();
/*myQuery.exec( ( error, data ) => {
  if ( data ) console.log( data.name );
} );*/
console.log('pass 5');
db.once( 'open', () => {
  console.log( 'Successfully connected to MongoDB using Mongoose!' );
} );
console.log('pass 6');
app.set( 'port', process.env.PORT || 3000 );

app.set( 'views', path.join(__dirname, 'views'));

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

app.get( '/subscribers', subscribersController.getAllSubscribers );
app.get( '/contact', subscribersController.getSubscriptionPage );
app.post( '/subscribe', subscribersController.saveSubscriber );

app.get( '/courses', homeController.showCourses );

app.use( errorController.pageNotFoundError );
app.use( errorController.internalServerError );

app.listen( app.get( 'port' ), () => {
  console.log( `Server running at http://localhost:${app.get('port')}` );
} );
