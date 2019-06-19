const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const session = require('express-session')
const path = require('path')
require('dotenv').config();


require('./db/db')


const apiRouter = require('./routes/api');
const usersRouter = require('./routes/users');
const User = require('./models/User')


const app = express();

app.use(express.static(__dirname))
app.use(express.static(path.join(__dirname, 'build')))
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  session({
    secret: "random string",
    resave: false,
    saveUninitialized: false
  })
);

app.use('/api/v1', apiRouter);
app.use('/users', usersRouter);
app.post('/locations', async (req, res) => {
  const foundUser = await User.findById
  (req.body.currentUser._id)
  const location = {
    id: req.body.id,
    name: req.body.name,
    url: req.body.url
  }
  foundUser.locations.push(location)
  await foundUser.save()
  res.json({
  user: foundUser
  })
})

app.post('/locations/crawl', async (req, res) => {
  const foundUser = await User.findById
  (req.body.currentUser._id)
  const crawlLocations = req.body.randomCrawl
  for (let i = 0; i < crawlLocations.length; i++) {
    const location = {
      id: crawlLocations[i].id,
      name: crawlLocations[i].name,
      url: crawlLocations[i].url
    } 
    foundUser.locations.push(location)
  }  
  await foundUser.save()
  res.json({
  user: foundUser
  })
})

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.use((req, res, next) => {
  next(createError(404));
});

module.exports = app;
