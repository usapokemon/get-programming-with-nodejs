'use strict';

const Subscriber = require( '../Models/subscriber' );

exports.getAllSubscribers = ( req, res, next ) => {
  Subscriber.find( {}, ( error, subscribers ) => {
    if ( error ) next( error );
    res.render( 'subscribers', {
      subscribers: subscribers
    } );
  } );
};
