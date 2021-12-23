'use strict'

const controller = require('../controllers/read-file.controller')

const handler = async (event) => {
  try {
    const { bucket, object } = event.Records[0].s3

    console.info('Starting Execution...')

    await controller.getS3File(bucket.name, object.key, process.env.PRODUCT_QUEUE_URL)

    console.info('Execution finished!!!')

    return true
  } catch (error) {
    throw Error(error.message)
  }
}

module.exports = { handler }
