'use strict'

const service = require('../services/product.service')

const controller = {
  post(payload) {
    service.post(payload)
  }
}

module.exports = controller
