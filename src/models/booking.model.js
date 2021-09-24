import mongoose from 'mongoose';

const { Schema } = mongoose;

const bookingSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  agent: {
    type: Schema.Types.ObjectId,
    ref: 'Agent',
    required: true,
  },
  startAt: {
    type: Date,
    required: true,
  },
  finishAt: {
    type: Date,
    required: true,
  },
});

export default mongoose.model('Booking', bookingSchema);
