'use strict'

const service = require('../services/product.service')

const validator = require('../configs/common/validator.service')
const mandatoryFields = require('../configs/utils/mandatoryFields.util')

const productFields = mandatoryFields.product

const controller = {
  post(payload) {
    const { validateStatus, validateMessage } = validator.validateBodyPayload(payload, productFields)

    validateStatus ? service.post(payload) : service.delete({ ...payload, errorMessage: validateMessage })
  }
}

module.exports = controller
