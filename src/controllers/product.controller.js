'use strict'

const service = require('../services/product.service')

const validator = require('../configs/common/validator.service')
const mandatoryFields = require('../configs/utils/mandatory-fields.util')

const productFields = mandatoryFields.product

const controller = {
  post(payload) {
    try {
      const { validateStatus, validateMessage } = validator.validateBodyPayload(payload, productFields)

      validateStatus ? service.post(payload) : service.delete({ ...payload, errorMessage: validateMessage })
    } catch (error) {
      throw Error(error.message)
    }
  }
}

module.exports = controller
