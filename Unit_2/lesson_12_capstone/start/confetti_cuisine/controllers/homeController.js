'use strict';
var courses = [
    {
        title: "Event Driven Cokes",
        cost: 50
    },
    {
        title: "Asynchronous Artichoke",
        cost: 25
    }
];

exports.showCourses = (req, res) => {
    res.render("courses", {
        offeredCourses: courses, title: "List"
    });
};
exports.showSignUp = (req, res) => {
    res.render("contact");
};
exports.postedSignUpForm = (req, res) => {
    res.render("thanks");
};
exports.postedContactForm = ( req, res ) => {
    res.render( 'thanks' );
  };
  