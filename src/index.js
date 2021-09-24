import express from 'express';
import mongodbConnection from './models';

const app = express();

app.get('/', (req, res) => {
  res.sendStatus(200);
});

const PORT = process.env.PORT || 3000;

mongodbConnection().then(() => {
  app.listen(PORT, () => console.log(`server started running at port ${PORT}`));
});
