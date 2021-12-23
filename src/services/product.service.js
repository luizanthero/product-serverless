'use strict'

const service = {
  post(payload) {
    console.info(`Payload: ${JSON.stringify(payload)}`)
  },
  delete(payload) {
    throw Error(`Payload Error: ${JSON.stringify(payload)}`)
  }
}

module.exports = service
