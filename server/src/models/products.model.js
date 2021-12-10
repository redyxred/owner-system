// products-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = 'products'
  const mongooseClient = app.get('mongooseClient')
  const { Schema } = mongooseClient
  const schema = new Schema(
    {
      name: { type: String, required: true },
      unit: { type: String, required: true },
      amount: { type: Number, default: 1 },
      weight: { type: Number, default: 0 },
      vendor: { type: Schema.Types.ObjectId, ref: 'vendors', required: true },
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
