import { faker } from '@faker-js/faker';

export function fakeLead() {
  return {
    name: faker.person.fullName(),
    email: faker.internet.email(),
    message: faker.lorem.sentences(2),
  };
}
