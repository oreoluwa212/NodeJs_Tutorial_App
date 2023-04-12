var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('body-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
const usersRouter = require('./routes');
 const bodyParser = require("body-parser")


const NodeJsTutorialApp = express();
const port = 4000

// //view engine setup
NodeJsTutorialApp.set('views', path.join(__dirname, 'views'));
NodeJsTutorialApp.set('view engine', 'jade');

NodeJsTutorialApp.use(logger('dev'));
NodeJsTutorialApp.use(express.json());
NodeJsTutorialApp.use(express.urlencoded({ extended: false }));
NodeJsTutorialApp.use(cookieParser());
NodeJsTutorialApp.use(express.static(path.join(__dirname, 'public')));

NodeJsTutorialApp.use('/', indexRouter);
// app.use('/users', usersRouter);


// error handler
NodeJsTutorialApp.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.NodeJsTutorialApp.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


NodeJsTutorialApp.get("/", ()=> {
  return res.send("Hey folks")
})

NodeJsTutorialApp.get("/users",(req, res) => {
  return res.json({
    name: "Anne",
    sex: "Female",
    age: 78
  })
})
NodeJsTutorialApp.listen(4000, () =>{
  console.log("The code is logging in the port " + `${port}`)
})
module.exports = NodeJsTutorialApp;
