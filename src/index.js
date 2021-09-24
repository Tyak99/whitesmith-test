import express from 'express';
import mongodbConnection from './models';
import bookingRoutes from './routes/v1/booking.route';

const app = express();

app.get('/', (req, res) => {
  res.sendStatus(200);
});

app.use('/booking', bookingRoutes);

const PORT = process.env.PORT || 3000;

mongodbConnection().then(() => {
  app.listen(PORT, () => console.log(`server started running at port ${PORT}`));
});
