import express from 'express';
import mongodbConnection from './models';
import bookingRoutes from './routes/v1/booking.route';
import agentRoutes from './routes/v1/agent.route';

const app = express();

app.use(express.json());
app.get('/', (req, res) => {
  res.sendStatus(200);
});

app.use('/api/v1/booking', bookingRoutes);
app.use('/api/v1/agent', agentRoutes);

const PORT = process.env.PORT || 3000;

mongodbConnection().then(() => {
  app.listen(PORT, () => console.log(`server started running at port ${PORT}`));
});
