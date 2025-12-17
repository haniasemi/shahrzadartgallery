import mongoose from 'mongoose';

const MessageSchema = new mongoose.Schema({
  from: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  to: {
    type: String, // 'admin' for messages to admin, or user ID for admin replies
    required: true
  },
  content: {
    type: String,
    required: true
  },
  isFromAdmin: {
    type: Boolean,
    default: false
  },
  read: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.models.Message || mongoose.model('Message', MessageSchema);

