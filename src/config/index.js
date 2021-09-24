import dotenv from 'dotenv';

dotenv.config();

const configData = {
  env: process.env.environment || 'development',
  port: process.env.PORT || 4000,
  mongoose: {
    url: process.env.DB_URL,
    options: {
      useNewUrlParser: true,
    },
  },
};

export default configData;
