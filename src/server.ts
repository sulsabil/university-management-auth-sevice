import mongoose from 'mongoose'
import app from './app'
import config from './config/index'

async function databaseConnecting() {
  try {
    await mongoose.connect(config.database_url as string)
    console.log('database is connected')

    app.listen(config.port, () => {
      console.log(`Application listening on port ${config.port}`)
    })
  } catch (error) {
    console.log('failed to connected', error)
  }
}

databaseConnecting()
