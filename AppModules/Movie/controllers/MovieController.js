module.exports = function(app, route, express) {

/////////////////////////////////////////////////////////////////

  var path = __dirname.split('/');
  path.pop();
  path = path.join('/') + "/views/";

  app.get('/mov', function(req, res){
    app.set('views', path);
    app.use("/Movie/myApp", express.static(path + "myApp.js"));
    res.render('index.html');
  });


  app.get('/movies', function(req, res){
    app.models.movie.find({}, function(err, movies) {
      res.json(movies);
    });
  });

  app.post('/movies', function(req, res){
    var movieTitle = req.body.title;

    var newMovie = new app.models.movie({
      title: movieTitle
    });
    newMovie.save(function(err) {
      if (err) throw err;
    });
    res.sendStatus(200);
  });

  app.put('/movies', function(req, res){

  });

  app.delete('/movies', function(req, res){
    app.models.movie.remove({ _id: req.body.movieID }, function (err) {
        if(!err)
        {
          res.sendStatus(200);
        }
    });
  });


////////////////////////////////////////////////////////
  return function(req, res, next) {
    next();
  };

};
