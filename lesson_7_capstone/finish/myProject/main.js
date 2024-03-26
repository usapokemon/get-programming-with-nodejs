const port = 3000;
var  http = require("http");
var  httpStatus = require("http-status-codes");
console.log('pass 1');
var  router = require("./router");
console.log('pass 2');
var  contentTypes = require("./contentTypes");
console.log('pass 3');
var  utils = require("./utils");
console.log('pass 4');
//var homeController = require("./controllers/homeController");
//const app = express();
//app.set( 'view engine', 'ejs' );
router.get( '/', ( req, res ) => {
    res.writeHead( httpStatus.OK, contentTypes.html );
    utils.getFile( 'views/index.html', res );
  } );
  
router.get( '/courses.html', ( req, res ) => {
    res.writeHead( httpStatus.OK, contentTypes.html );
    utils.getFile( 'views/courses.html', res );
  } );
router.get('/courses.html', ( req, res ) => {
    res.writeHead( httpStatus.OK, contentTypes.html );
    utils.getFile( 'views/courses.html', res );
  } );
//router.post ('/courses/submit', homeController.showCourses);
  
router.get( '/contact.html', ( req, res ) => {
    res.writeHead( httpStatus.OK, contentTypes.html );
    utils.getFile( 'views/contact.html', res );
  } );
  
router.get( '/about.html', ( req, res ) => {
    res.writeHead( httpStatus.OK, contentTypes.html );
    utils.getFile( 'views/about.html', res );
  } );
  
router.post( '/', ( req, res ) => {
    res.writeHead( httpStatus.OK, contentTypes.html );
    utils.getFile( 'views/thanks.html', res );
  } );
  
router.get( '/graph.png', ( req, res ) => {
    res.writeHead( httpStatus.OK, contentTypes.png );
    utils.getFile( 'public/images/graph.png', res );
  } );
router.get( '/people.jpg', ( req, res ) => {
    res.writeHead( httpStatus.OK, contentTypes.jpg );
    utils.getFile( 'public/images/people.jpg', res );
  } );
router.get( '/product.jpg', ( req, res ) => {
    res.writeHead( httpStatus.OK, contentTypes.jpg );
    utils.getFile( 'public/images/product.jpg', res );
  } );
router.get( '/confetti_cuisine.css', ( req, res ) => {
    res.writeHead( httpStatus.OK, contentTypes.css );
    utils.getFile( 'public/css/confetti_cuisine.css', res );
  } );
router.get( '/bootstrap.css', ( req, res ) => {
    res.writeHead( httpStatus.OK, contentTypes.css );
    utils.getFile( 'public/css/bootstrap.css', res );
  } );
router.get( '/confetti_Cuisine.js', ( req, res ) => {
    res.writeHead( httpStatus.OK, contentTypes.js );
    utils.getFile( 'public/js/confettiCuisine.js', res );
  } );

http.createServer( router.handle )
    .listen( port );
console.log( `The server has started and is listening on port number: ${port}` );
   