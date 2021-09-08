const express = require('express');
const pageRoute = require('./routes/pageRoute');
const courseRoute = require('./routes/courseRoute');
const categoryRoute = require('./routes/categoryRoute');

const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 80;


// CONNECT DB
mongoose.connect('mongodb://localhost/smartEdu-db').then(()=>{
  console.log("DB CONNECTED SUCCESFUL !");
});

//TEMPLATE ENGINE
app.set('view engine', 'ejs');

//MIDDLEWARES
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true })); // bodyparser yerine kullanılıyor -> urldeki datayı okuyor
app.use(express.json()); //urldeki datayı json a çeviriyor

// Routes
app.use('/',pageRoute); 
app.use('/courses',courseRoute); 
app.use('/categories',categoryRoute); 

app.listen(port, () => {
  console.log(`App started on port ${port}`);
});


