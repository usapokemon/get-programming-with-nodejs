'use strict';

const Subscriber = require( '../models/subscriber' );

exports.getAllSubscribers = async (req, res, next) =>  {
  var subscribers = await Subscriber.find({}); 
    if ( subscribers.error ) next( error );
    res.render( 'subscribers', {
      subscribers: subscribers
    } );
  };

exports.getSubscriptionPage = async ( req, res ) => {
  await res.render( 'contact' );
};

exports.saveSubscriber = async ( req, res ) => {
  let newSubscriber = new Subscriber( {
    name: req.body.name,
    email: req.body.email,
    zipCode: req.body.zipCode
  } );
  try{
    var result = await newSubscriber.save();
    res.render( 'thanks' );
  } catch(error) { console.log(error); }
    
};
