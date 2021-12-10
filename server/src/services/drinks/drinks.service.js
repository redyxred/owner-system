// Initializes the `drinks` service on path `/drinks`
const { Drinks } = require('./drinks.class');
const createModel = require('../../models/drinks.model');
const hooks = require('./drinks.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/drinks', new Drinks(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('drinks');

  service.hooks(hooks);
};
