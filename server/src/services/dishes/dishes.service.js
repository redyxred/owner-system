// Initializes the `dishes` service on path `/dishes`
const { Dishes } = require('./dishes.class');
const createModel = require('../../models/dishes.model');
const hooks = require('./dishes.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/dishes', new Dishes(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('dishes');

  service.hooks(hooks);
};
