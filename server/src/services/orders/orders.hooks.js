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
        dishes: {
          service: 'dishes',
          f_key: '_id'
        },
        drinks: {
          service: 'drinks',
          f_key: '_id'
        }
      })
    ],
    get: [
      populate({
        dishes: {
          service: 'dishes',
          f_key: '_id'
        },
        drinks: {
          service: 'drinks',
          f_key: '_id'
        }
      })
    ],
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
