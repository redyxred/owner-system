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
        vendor: {
          service: 'vendors',
          f_key: '_id',
          one: true,
          query: {
            $select: ['name']
          }
        },
        storage: {
          service: 'storages',
          f_key: '_id',
          one: true,
          query: {
            $select: ['name']
          }
        }
      })
    ],
    get: [
      populate({
        vendor: {
          service: 'vendors',
          f_key: '_id',
          one: true,
          query: {
            $select: ['name']
          },
          storage: {
            service: 'storages',
            f_key: '_id',
            one: true,
            query: {
              $select: ['name']
            }
          }
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
