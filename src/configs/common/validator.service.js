'use strict'

const lodash = require('lodash')

const validator = {
  validateBodyPayload(payload, mandatoryFields) {
    let result
    lodash.each(mandatoryFields, (field) => {
      if (!lodash.has(payload, field)) {
        const messageWarn = `Payload field '${field}' is mandatory`
        console.warn(messageWarn)

        result = { validateStatus: false, validateMessage: messageWarn }

        console.info(`Removing Payload: ${JSON.stringify(payload)}`)

        return false
      } else {
        result = { validateStatus: true }
      }
    })

    return result
  }
}

module.exports = validator
