// users-model.js - A mongoose model
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = 'users'
  const mongooseClient = app.get('mongooseClient')
  const schema = new mongooseClient.Schema(
    {
      firstname: { type: String },
      lastname: { type: String },
      email: { type: String, unique: true, lowercase: true },
      password: { type: String },
      permissions: { type: String, lowercase: true, default: 'user' },
      phone: { type: String },
      gender: { type: String, enum: ['Мужской', 'Женский'] }
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
