import mongoose from 'mongoose';

const HomePageSettingsSchema = new mongoose.Schema({
  aboutTitle: {
    type: String,
    default: 'درباره گالری هنری شهرزاد'
  },
  aboutContent: {
    type: String,
    default: ''
  },
  statistics: {
    happyCustomers: {
      type: Number,
      default: 500
    },
    products: {
      type: Number,
      default: 1000
    },
    yearsExperience: {
      type: Number,
      default: 15
    },
    satisfactionRate: {
      type: Number,
      default: 4.9
    }
  },
  featuredProductsTitle: {
    type: String,
    default: 'محصولات پرفروش'
  },
  featuredProductsDescription: {
    type: String,
    default: ''
  },
  testimonialsTitle: {
    type: String,
    default: 'نظرات مشتریان'
  },
  testimonialsDescription: {
    type: String,
    default: ''
  },
  blogTitle: {
    type: String,
    default: 'آخرین مقالات و اخبار'
  },
  blogDescription: {
    type: String,
    default: ''
  },
  ctaTitle: {
    type: String,
    default: 'آماده‌اید یه چیز خفن براتون بسازیم؟'
  },
  ctaDescription: {
    type: String,
    default: ''
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

HomePageSettingsSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

export default mongoose.models.HomePageSettings || mongoose.model('HomePageSettings', HomePageSettingsSchema);



