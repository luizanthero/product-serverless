'use strict'

const service = require('../configs/common/sqs.service')

const controller = {
  async sendSQS(payload, sqsUrl) {
    try {
      const params = { MessageBody: JSON.stringify(payload), QueueUrl: sqsUrl }

      const messageId = await service.sendMessage(params)

      console.info(`SQS Message ID: ${messageId}`)
    } catch (error) {
      throw Error(error.message)
    }
  }
}

module.exports = controller
