'use strict';

exports.logRequestPaths = ( req, res, next ) => {
  console.log( `request made to: ${req.url}` );
  console.log('Inside homeController logRequestPaths')
  next();
};

exports.sendReqParam = ( req, res ) => {
  let veg = req.params.vegetable;
  res.send( `This is the page for ${veg}` );
};
