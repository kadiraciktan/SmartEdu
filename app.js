const express = require('express');
const pageRoute = require('./routes/pageRoute');
const app = express();
const port = process.env.PORT || 80;
const pageController = require('./controllers/pageController');

//TEMPLATE ENGINE
app.set('view engine', 'ejs');

//MIDDLEWARES
app.use(express.static('public'));

// Routes
app.use('/',pageRoute); 

app.listen(port, () => {
  console.log(`App started on port ${port}`);
});


