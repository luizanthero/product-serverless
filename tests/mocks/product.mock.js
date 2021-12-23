'use strict'

const factory = require('../../src/configs/utils/product-factory.util')

const product = {
  getSQSBodyPayload(status) {
    const product = factory.factory(status)

    return { Records: [{ body: JSON.stringify(product) }] }
  },
  getSQSBodyPayloadBroken(status) {
    const product = factory.factoryError(status)

    return { Records: [{ body: JSON.stringify(product) }] }
  }
}

module.exports = product
