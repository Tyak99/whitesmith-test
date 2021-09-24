import mongoose from 'mongoose';
import { roles } from '../config/roles';

const { Schema } = mongoose;

const agentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  role: {
    type: String,
    enum: roles,
    default: 'agent',
  },
});

export default mongoose.model('Agent', agentSchema);
