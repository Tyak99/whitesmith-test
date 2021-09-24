import faker from 'faker';
import { User } from '../models';

const createUser = () => ({
  name: faker.name.findName(),
  email: faker.internet.email(),
});
const insertRandomUsers = () => {
  const users = Array.from({ length: 10 }, createUser);

  User.insertMany(users);
};

export default {
  insertRandomUsers,
};
