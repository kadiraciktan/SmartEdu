const express = require('express');
const pageRoute = require('./routes/pageRoute');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 80;
const pageController = require('./controllers/pageController');

// CONNECT DB
mongoose.connect('mongodb://localhost/smartEdu-db').then(()=>{
  console.log("DB CONNECTED SUCCESFUL !");
});

//TEMPLATE ENGINE
app.set('view engine', 'ejs');

//MIDDLEWARES
app.use(express.static('public'));

// Routes
app.use('/',pageRoute); 

app.listen(port, () => {
  console.log(`App started on port ${port}`);
});


