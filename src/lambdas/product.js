'use strict'

const controller = require('../controllers/product.controller')

const handler = async (event) => {
  try {
    const { body } = event.Records[0]

    console.info('Starting Execution...')

    controller.post(JSON.parse(body))

    console.info('Execution finished!!!')

    return true
  } catch (error) {
    throw Error(error.message)
  }
}

module.exports = { handler }
