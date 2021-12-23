'use strict'

const handler = require('../src/lambdas/product')

const product = require('./mocks/product.mock')

it('When Lambda Success', async () => {
  const result = await handler.handler(product.getSQSBodyPayload())

  expect(result).toEqual(true)
})

it('When Lambda Fails', async () => {
  // eslint-disable-next-line jest/valid-expect
  expect(async () => {
    await handler.handler(product.getSQSBodyPayloadBroken())
  }).rejects.toThrow()
})
