'use strict'

const handler = require('../src/lambdas/product')

const product = require('./mocks/product.mock')

it('When Lambda Success', async () => {
  const result = await handler.handler(product.getSQSBodyPayload())

  expect(result).toEqual(true)
})
