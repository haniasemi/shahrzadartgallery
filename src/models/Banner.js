import mongoose from 'mongoose';

const BannerSchema = new mongoose.Schema({
  title: {
    type: String,
    default: ''
  },
  subtitle: {
    type: String,
    default: ''
  },
  image: {
    type: String,
    required: true
  },
  cta: {
    type: String,
    default: ''
  },
  ctaLink: {
    type: String,
    default: ''
  },
  showContent: {
    type: Boolean,
    default: true
  },
  order: {
    type: Number,
    default: 0
  },
  active: {
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

BannerSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

export default mongoose.models.Banner || mongoose.model('Banner', BannerSchema);

