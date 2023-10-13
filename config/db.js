const mongoose = require('mongoose')
const config = require('config')
const db = config.get('mongoDevURI')

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    })

    console.log(`Connected to Mongo`.cyan.underline)
  } catch (error) {
    console.error(`Error connecting to Mongo`.red)
    process.exit(1)
  }
}

module.exports = connectDB
