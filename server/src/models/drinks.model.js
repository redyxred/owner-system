// drinks-model.js - A mongoose model
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = 'drinks'
  const mongooseClient = app.get('mongooseClient')
  const { Schema } = mongooseClient
  const schema = new Schema(
    {
      name: { type: String, required: true },
      price: { type: Number, required: true },
      amount: { type: Number, default: 1 },
      unit: { type: String, required: true },
      weight: { type: Number, default: 0 },
      vendor: { type: Schema.Types.ObjectId, ref: 'vendors' },
      storage: { type: Schema.Types.ObjectId, ref: 'storages', required: true }
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
