'use strict';
const Subscriber = require( '../models/subscriber' );

exports.getAllSubscribers = ( req, res, next ) => {
  Subscriber.find( {}, ( error, subscribers ) => {
    if ( error ) next( error );
    //req.data = subscribers;
    res.render( 'subscribers', {
      subscribers: subscribers
    } );
    //next();
  } );
};