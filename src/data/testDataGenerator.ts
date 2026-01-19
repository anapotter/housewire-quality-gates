/**
 * Test data generation utilities using Faker.js
 */

import { faker } from '@faker-js/faker';

export class TestDataGenerator {
  /**
   * Generate a random user profile
   */
  static generateUser() {
    return {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
      phone: faker.phone.number(),
      address: {
        street: faker.location.streetAddress(),
        city: faker.location.city(),
        state: faker.location.state(),
        zipCode: faker.location.zipCode(),
        country: faker.location.country(),
      },
    };
  }

  /**
   * Generate property/real estate data
   */
  static generateProperty() {
    return {
      address: faker.location.streetAddress(),
      city: faker.location.city(),
      state: faker.location.state(),
      zipCode: faker.location.zipCode(),
      price: faker.number.int({ min: 100000, max: 5000000 }),
      bedrooms: faker.number.int({ min: 1, max: 6 }),
      bathrooms: faker.number.float({ min: 1, max: 5, multipleOf: 0.5 }),
      squareFeet: faker.number.int({ min: 500, max: 5000 }),
      yearBuilt: faker.number.int({ min: 1950, max: 2024 }),
    };
  }

  /**
   * Generate real estate article content
   */
  static generateArticle() {
    return {
      title: faker.lorem.sentence(),
      author: faker.person.fullName(),
      date: faker.date.recent(),
      content: faker.lorem.paragraphs(3),
      tags: Array.from({ length: faker.number.int({ min: 2, max: 5 }) }, () => faker.word.noun()),
    };
  }

  /**
   * Generate search query
   */
  static generateSearchQuery() {
    const queryTypes = [
      () => faker.location.city() + ' real estate',
      () => 'homes for sale in ' + faker.location.state(),
      () => faker.number.int({ min: 1, max: 6 }) + ' bedroom house',
      () => 'real estate news ' + faker.date.month(),
    ];
    return faker.helpers.arrayElement(queryTypes)();
  }
}
