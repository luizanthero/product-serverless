'use strict'

const faker = require('faker')

const product = {
  factory(status) {
    return {
      id: faker.datatype.number(10000),
      name: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      price: faker.commerce.price(),
      status: status || faker.datatype.boolean(),
      image: faker.image,
      amount: faker.datatype.number(100)
    }
  },
  factoryError(status) {
    return {
      id: faker.datatype.number(10000),
      name: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      price: faker.commerce.price(),
      status: status || faker.datatype.boolean(),
      amount: faker.datatype.number(100)
    }
  }
}

module.exports = product
