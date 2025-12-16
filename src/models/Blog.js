import mongoose from 'mongoose';

const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  excerpt: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true,
    default: 'شهرزاد احمدی'
  },
  category: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  readTime: {
    type: String,
    required: true,
    default: '۵ دقیقه'
  },
  image: {
    type: String,
    default: ''
  },
  views: {
    type: Number,
    default: 0
  },
  published: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

BlogSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

export default mongoose.models.Blog || mongoose.model('Blog', BlogSchema);

