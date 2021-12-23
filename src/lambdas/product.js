'use strict'

const controller = require('../controllers/product.controller')

const handler = async (event) => {
  try {
    const { body } = event.Records[0]

    controller.post(JSON.parse(body))

    return true
  } catch (error) {
    throw Error(error)
  }
}

module.exports = { handler }
