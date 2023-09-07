import * as express from 'express'
const tableRoute = express.Router()
const { getTableController } = require('../controller/controller')

tableRoute.route('/api/:serie').get(getTableController)

module.exports = tableRoute
