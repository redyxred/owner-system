const { authenticate } = require('@feathersjs/authentication').hooks
const populate = require('feathers-populate-hook')

module.exports = {
  before: {
    all: [authenticate('jwt')],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [
      populate({
        products: {
          service: 'products',
          f_key: '_id',
          query: {
            $select: ['name', 'vendor']
          }
        }
      })
    ],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
}
