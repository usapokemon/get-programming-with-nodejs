'use strict';

const fs = require( 'fs' ),
  httpStatus = require( 'http-status-codes' ),
  contentTypes = require( './content-types' );

module.exports = {
  getFile: ( file, res ) => {
    fs.readFile( `./${file}`, ( error, data ) => {
      if ( error ) {
        res.writeHead( httpStatus.INTERNAL_SERVER_ERROR, contentTypes.html );
        res.end( 'There was an error serving content!' );
      }
      res.end( data );
    } );
  }
};


exports.get = ( url, action ) => {
  routes[ 'GET' ][ url ] = action;
};

exports.post = ( url, action ) => {
  routes[ 'POST' ][ url ] = action;
};

