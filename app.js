const express = require('express');
const mongoose = require('mongoose');
const { requireAuth, checkUser } = require('./middleware/authmiddleware');

const app = express();
const authRoute = require('./routes/authRoutes.js');
const cookieParser = require('cookie-parser');

// middleware
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());

// view engine
app.set('view engine', 'ejs');

// database connection
const dbURI = 'mongodb+srv://mern-practice:mern-practice@cluster0.zmkrwap.mongodb.net/node-auth';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));


// routes
app.get('*', checkUser);
app.get('/', (req, res) => res.render('home'));
app.get('/smoothies',requireAuth, (req, res) => res.render('smoothies'));
app.use(authRoute);

