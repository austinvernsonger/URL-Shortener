'use strict';

module.exports = function(app, db) {
  app.route('/')
    .get(function(req, res) {
      res.sendFile(process.cwd() + '/public/index.html');
    });
  app.route('/new')
    .get(function(req, res) {
      res.send("You need to add an url first.");
    });
};