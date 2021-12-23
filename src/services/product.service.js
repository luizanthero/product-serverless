'use strict'

const service = {
  post(payload) {
    console.info(`Payload: ${JSON.stringify(payload)}`)
  },
  delete(payload) {
    console.warn(`Payload: ${JSON.stringify(payload)}`)
  }
}

module.exports = service
