// const { Person } = require('./person')
const dotenv = require('dotenv')
const connectToDatabase = require('./src/database/connect')

dotenv.config()

require('./modules/express')

/*require('./modules/path')
require('./modules/fs')

const person = new Person('Pedro') */

connectToDatabase()
