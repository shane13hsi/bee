module.exports = function(app) {
  app.get('/enums', function(req, res) {
    res.json(require('./enums/enums.json'));
  });
};
