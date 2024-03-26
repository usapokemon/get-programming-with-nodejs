'use strict';

const express = require('express'),
  layouts = require('express-ejs-layouts'),
  app = express(),
  homeController = require('./controllers/homeController'),
  errorController = require('./controllers/errorController'),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose');
//console.log('pass 1');

async function run() {
  await mongoose.connect('mongodb://localhost/recipe_db',
    { family: 4 });
  mongoose.set('strictQuery', true);
  var db = mongoose.connection;
  db.on('open', () => console.log('open successful'));
  var subscriberSchema = mongoose.Schema({
      name: { type: String, index: false },
      email: { type: String, index: false },
      zipCode: { type: Number, index: false }
    }),
    Subscriber = mongoose.model('Subscriber', subscriberSchema);
  console.log('pass 2');
  var subscriber1 = new Subscriber({
    name: "Cheer Yang",
    //email: 'yang@gmail.com',
    zipCode: '19383'
  });
  //console.log('pass 3');
  var savedDocument =
    await
      subscriber1.save()
        .catch(error => console.log(error));

  console.log('Document:' + savedDocument);
  //console.log("Connection to Mongoose is successful!")
  
  mongoose.connection.on('open', () => {
    console.log('Successfully connected to MongoDB using Mongoose!');
  });
}

run();

//subscriber1.deleteOne({ name: "Cheer Yang" }, function (err) {});
//console.log('pass 4');

app.set('port', process.env.PORT || 3000);

app.set('view engine', 'ejs');
app.use(layouts);
app.use(express.static('public'));

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
//console.log('pass 5 ');
app.get('/', (req, res) => {
  res.render('index');
});
//console.log('pass 6');
app.get('/courses', homeController.showCourses);
//console.log('pass 7');
app.get('/contact', homeController.showSignUp);
//console.log('pass 8');
app.post('/contact', homeController.postedContactForm);
//console.log('pass 9');
app.use(errorController.pageNotFoundError);
//console.log('pass 10');
app.use(errorController.internalServerError);
//console.log('pass 11');
app.listen(app.get('port'), () => {
  console.log(`Server running at http://localhost:${app.get('port')}`);
});
