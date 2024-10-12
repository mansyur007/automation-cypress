import { fa, faker } from '@faker-js/faker';

export const fakeUserData = {
    name: faker.person.fullName(),
    lastname: faker.person.lastName(),
    firstname: faker.person.firstName(),
    email: faker.internet.email(),
    folderName: 'Test Automation ' + faker.lorem.words(1),
    address: faker.location.streetAddress(),
    left_notes: faker.lorem.words(1),
    left_desc: faker.lorem.words(4),
    right_notes: faker.lorem.words(1),
    right_desc: faker.lorem.words(5),
    company_name: faker.lorem.words(2),
    company_name_draft: faker.lorem.words(1)
}
