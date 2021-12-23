'use strict'

const controller = require('../controllers/send-message.controller')

const product = require('../configs/utils/product-factory.util')

const handler = async (event) => {
  try {
    for (let index = 0; index < 200; index++) {
      Math.random() < 0.5
        ? await controller.sendSQS(product.factory(), process.env.PRODUCT_QUEUE_URL)
        : await controller.sendSQS(product.factoryError(), process.env.PRODUCT_QUEUE_URL)
    }

    return true
  } catch (error) {
    throw Error(error.message)
  }
}

module.exports = { handler }
