'use strict';

var courses = [
  {
    title: 'Event Driven Cakes',
    cost: 50
  },
  {
    title: 'Asynchronous Artichoke',
    cost: 25
  }, {
    title: 'Object Oriented Orange Juice',
    cost: 10
  }
];

exports.showCourses = ( req, res ) => {
  console.log("homeController - showCourses");
  res.render( 'courses', {
    offeredCourses: courses
  } );
};

exports.showSignUp = ( req, res ) => {
  console.log("homeController - showSignUp");
  res.render( 'contact' );
};

exports.postedContactForm = ( req, res ) => {
  console.log("homeController - postedContactForm");
  res.render( 'thanks' );
};
