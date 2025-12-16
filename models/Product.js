import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  subCategory: {
    type: String,
    default: ''
  },
  price: {
    type: String,
    required: true
  },
  images: [{
    type: String,
    required: true
  }],
  size: {
    type: String,
    default: ''
  },
  material: {
    type: String,
    default: ''
  },
  style: {
    type: String,
    default: ''
  },
  inStock: {
    type: Boolean,
    default: true
  },
  slug: {
    type: String,
    unique: true,
    sparse: true
  },
  views: {
    type: Number,
    default: 0
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

ProductSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

export default mongoose.models.Product || mongoose.model('Product', ProductSchema);



