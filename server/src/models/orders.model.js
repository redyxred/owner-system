// orders-model.js - A mongoose model
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = 'orders'
  const mongooseClient = app.get('mongooseClient')
  const { Schema } = mongooseClient
  const schema = new Schema(
    {
      user: { type: Schema.Types.ObjectId, ref: 'users', required: true },
      dishes: [{ type: Schema.Types.ObjectId, ref: 'dishes' }],
      drinks: [{ type: Schema.Types.ObjectId, ref: 'drinks' }],
      status: { type: String, default: 'created' },
      description: { type: String }
    },
    {
      timestamps: true
    }
  )

  // This is necessary to avoid model compilation errors in watch mode
  // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName)
  }
  return mongooseClient.model(modelName, schema)
}
