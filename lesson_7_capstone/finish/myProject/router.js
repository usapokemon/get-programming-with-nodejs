'use strict';

const httpStatus = require( 'http-status-codes' );
console.log('router.js - pass 1');
var contentTypes = require( './contentTypes' );
console.log('router.js- pass 2');
var  utils = require( './utils' );
console.log('router.js - pass 3');

const routes = {
  'GET': {},
  'POST': {}
};

exports.handle = ( req, res ) => {
  try {
    routes[ req.method ][ req.url ]( req, res );
  } catch ( e ) {
    res.writeHead( httpStatus.OK, contentTypes.html );
    utils.getFile( 'views/error.html', res );
  }
};

exports.get = ( url, action ) => {
  routes[ 'GET' ][ url ] = action;
};

exports.post = ( url, action ) => {
  routes[ 'POST' ][ url ] = action;
};
