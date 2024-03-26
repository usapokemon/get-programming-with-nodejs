'use strict';

const fs = require( 'fs' );
//console.log('utils - pass 1');
var  httpStatus = require( 'http-status-codes' );
//console.log('utils - pass 2');
var  contentTypes = require( './contentTypes' );

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
