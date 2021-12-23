'use strict'

const handler = require('../src/lambdas/product')

const product = require('./mocks/product.mock')

jest.mock('axios')

it('When Lambda Success activating reseller', async () => {
  const result = await handler.handler({
    Records: [{ body: JSON.stringify(product.getPayload()) }]
  })

  expect(result).toEqual(true)
})
