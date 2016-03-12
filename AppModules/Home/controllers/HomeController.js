module.exports = function(app, route, express) {

/////////////////////////////////////////////////////////////////

  var view_lib = require('_controller_libs/view_lib');
  var view_path = view_lib.get_my_view_path(__dirname);

  app.get('/', function(req, res){
    view_lib.set_my_view_route(app, view_path);
    view_lib.add_res_file(express, app, view_path, "myApp.js");
    res.render('index.html');
  });

/////////////////////////////////////////////////////////////////
  return function(req, res, next) {
    next();
  };

};
