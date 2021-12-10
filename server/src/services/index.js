const users = require('./users/users.service.js')
const orders = require('./orders/orders.service.js')
const products = require('./products/products.service.js')
const dishes = require('./dishes/dishes.service.js')
const storages = require('./storages/storages.service.js')
const drinks = require('./drinks/drinks.service.js')
const vendors = require('./vendors/vendors.service.js')
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users)
  app.configure(orders)
  app.configure(products)
  app.configure(dishes)
  app.configure(storages)
  app.configure(drinks)
  app.configure(vendors)
}
