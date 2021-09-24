const faker = require('faker');
const { User } = require('../models');

const createUser = () => ({
  name: faker.name.findName(),
  email: faker.internet.email(),
});

const insertRandomUsers = async () => {
  const users = Array.from({ length: 10 }, createUser);

  await User.insertMany(users);
};

export default {
  insertRandomUsers,
};
