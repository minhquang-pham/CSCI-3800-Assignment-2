'use strict';

var SwaggerExpress = require('swagger-express-mw');
var app = require('express')();
module.exports = app;

var config = {
  appRoot: __dirname
};

SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }
  swaggerExpress.register(app);

  var port = process.env.PORT || 10010;
  app.listen(port);

 if (swaggerExpress.runner.swagger.paths['/gets']) {
    console.log('try this:\ncurl http://127.0.0.1:' + port + '/gets');
}
});