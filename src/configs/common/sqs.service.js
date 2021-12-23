'use strict'

const AWS = require('aws-sdk')

const sqs = {
  amazon: new AWS.SQS({ region: process.env.REGION }),
  async sendMessage(params) {
    const data = await this.amazon
      .sendMessage(params)
      .promise()
      .catch((error) => {
        throw Error(error.message)
      })

    return data.MessageId
  }
}

module.exports = sqs
