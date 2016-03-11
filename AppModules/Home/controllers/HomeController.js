module.exports = function(app, route, express) {

/////////////////////////////////////////////////////////////////

  var path = __dirname.split('/');
  path.pop();
  path = path.join('/') + "/views/";

  app.get('/', function(req, res){
    app.set('views', path);
    app.use("/Home/myApp", express.static(path + "myApp.js"));
    res.render('index.html');
  });

/////////////////////////////////////////////////////////////////
  return function(req, res, next) {
    next();
  };

};
