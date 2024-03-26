'use strict';

const port = 3000,
  express = require( 'express' ),
  app = express();

app.get( '/items/:vegetable', ( req, res ) => {
  let veg = req.params.vegetable;
  res.send( `This is the page for ${veg}` );
} );

app.get( '/items1/:animals', ( req, res ) => {
  let animal = req.params.animals;
  res.send( `This is the page for ${animal}` );
} );

app.get( '/items2/:autos', ( req, res ) => {
  let animal = req.params.autos;
  res.send( `This is the page for ${animal}` );
} );



app.listen( port, () => {
  console.log( `Server running on port: ${port}` );
} );
