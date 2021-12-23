'use strict'

const service = {
  post(payload) {
    console.info(`Payload: ${JSON.stringify(payload)}`)
  }
}

module.exports = service
