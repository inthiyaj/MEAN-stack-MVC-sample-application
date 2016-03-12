module.exports = function(app, route, express) {

/////////////////////////////////////////////////////////////////

  var view_lib = require('_controller_libs/view_lib');
  var view_path = view_lib.get_my_view_path(__dirname);

  app.get('/mov', function(req, res){
    view_lib.set_my_view_route(app, view_path);
    view_lib.add_res_file(express, app, view_path, "myApp.js");

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
