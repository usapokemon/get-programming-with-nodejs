'use strict';

const express = require('express'),
  layouts = require('express-ejs-layouts'),
  app = express(),
  homeController = require('./controllers/homeController'),
  errorController = require('./controllers/errorController'),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose'),
  Subscriber = require('./models/subscriber');

async function Run_Mongoose() {
  mongoose.connect('mongodb://localhost/recipe_db',
    { family: 4 });
  mongoose.set('strictQuery', false); 
  const db = mongoose.connection;
  db.on('open', () => console.log('open successful'));

  var subscriber1 = new Subscriber({
    name: 'Jim Gardner1',
    email: 'jim@abc.com'
  });

  var saveDocument = await subscriber1.save();
  console.log("Pass await")
  //if (error) console.log(error);
  console.log(saveDocument);

  var myQuery = Subscriber.findOne({
    name: 'Jim Gardener1'
  })
    .where('email', /abc/);
  console.log("pass here");
  var data = await myQuery.exec();
  if (data) console.log(data.name);

};

Run_Mongoose();

console.log("pass next here");
app.set('port', process.env.PORT || 3000);

app.set('view engine', 'ejs');
app.use(layouts);
app.use(express.static('public'));

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

console.log("Pass 1")
app.get('/', (req, res) => {
  res.render('index');
});
console.log("Pass 2")
app.get('/courses', homeController.showCourses);
app.get('/contact', homeController.showSignUp);
app.post('/contact', homeController.postedContactForm);
console.log("Pass 3")
app.use(errorController.pageNotFoundError);
app.use(errorController.internalServerError);

app.listen(app.get('port'), () => {
  console.log(`Server running at http://localhost:${app.get('port')}`);
});
