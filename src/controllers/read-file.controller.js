'use strict'

const s3Service = require('../configs/common/s3.service')
const sqsService = require('../configs/common/sqs.service')

const csv = require('csvtojson')

const controller = {
  async getS3File(bucketName, objectPath, sqsUrl) {
    try {
      const params = { Bucket: bucketName, Key: objectPath }

      console.info(`Bucket: ${bucketName} Object: ${objectPath}`)

      const s3file = s3Service.getStream(params)
      const json = await csv({ delimiter: ';' }).fromStream(s3file)

      for (let index = 0; index < json.length; index++) {
        await sendMessageSQS(json[index], sqsUrl)
      }

      await s3Service.delete(params)
    } catch (error) {
      throw Error(error.message)
    }
  }
}

const sendMessageSQS = async (payload, sqsUrl) => {
  const params = { MessageBody: JSON.stringify(payload), QueueUrl: sqsUrl }

  await sqsService.sendMessage(params)
}

module.exports = controller
