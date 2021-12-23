'use strict'

const service = require('../configs/common/sqs.service')

const controller = {
  async sendSQS(payload, sqsUrl) {
    const params = { MessageBody: JSON.stringify(payload), QueueUrl: sqsUrl }

    const messageId = await service.sendMessage(params)

    console.info(`SQS Message ID: ${messageId}`)
  }
}

module.exports = controller
