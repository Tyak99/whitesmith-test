import express from 'express';
import mongodbConnection from './models';
import bookingRoutes from './routes/v1/booking.route';
import agentRoutes from './routes/v1/agent.route';
import businessRoutes from './routes/v1/business';

const app = express();

app.use(express.json());
app.get('/', (req, res) => {
  res.sendStatus(200);
});

app.use('/api/v1/booking', bookingRoutes);
app.use('/api/v1/agents', agentRoutes);
app.use('/api/v1/business', businessRoutes);

const PORT = process.env.PORT || 3000;

mongodbConnection().then(() => {
  app.listen(PORT, () => console.log(`server started running at port ${PORT}`));
});
