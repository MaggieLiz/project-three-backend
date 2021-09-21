import mongoose  from 'mongoose'
import { dbURI } from '../config/environment.js'

export const connectToDatabase = () => {
  const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  }
  return mongoose.connect(dbURI, options)
}

export const truncateDatabase = () => {
  if (mongoose.connection.readyState !== 0) {
    const { collections } = mongoose.connection

    const promises = Object.keys(collections).map(collection => 
      mongoose.connection.collection(collection).deleteMany({})
    )

    return Promise.all(promises)
  }
}

export const disconnectDatabase = () => {
  if (mongoose.connection.readyState !== 0) {
    return mongoose.disconnect()
  }
}