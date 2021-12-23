'use strict'

const AWS = require('aws-sdk')

const s3 = {
  amazon: new AWS.S3({ region: process.env.REGION }),
  getStream(params) {
    return this.amazon.getObject(params).createReadStream()
  },
  async delete(params) {
    await this.amazon
      .deleteObject(params)
      .promise()
      .catch((error) => console.error(error.message))
  }
}

module.exports = s3
