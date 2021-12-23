'use strict'

const controller = require('../controllers/product.controller')

const handler = async (event) => {
  const { body } = event.Records[0]

  controller.post(JSON.parse(body))

  return true
}

module.exports = { handler }
