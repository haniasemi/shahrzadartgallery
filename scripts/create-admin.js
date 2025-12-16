const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('dotenv').config({ path: '.env.local' });

const AdminSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['admin', 'superadmin'],
    default: 'admin'
  },
  lastLogin: {
    type: Date
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

AdminSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

const Admin = mongoose.models.Admin || mongoose.model('Admin', AdminSchema);

async function createAdmin() {
  try {
    // Connect to MongoDB
    if (!process.env.MONGODB_URI) {
      console.error('❌ MONGODB_URI is not set in .env.local');
      console.log('⚠️  Please make sure .env.local exists and contains MONGODB_URI');
      process.exit(1);
    }

    console.log('🔄 Connecting to MongoDB...');
    await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 5000
    });
    console.log('✅ Connected to MongoDB');

    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ 
      $or: [
        { username: 'shahrzadyousefi' },
        { email: 'shahrzadyousefi.id@gmail.com' }
      ]
    });

    if (existingAdmin) {
      console.log('⚠️  Admin already exists with this username or email');
      process.exit(0);
    }

    // Create new admin
    const admin = new Admin({
      username: 'shahrzadyousefi',
      email: 'shahrzadyousefi.id@gmail.com',
      password: 'shd@Y@1369',
      role: 'superadmin'
    });

    await admin.save();
    console.log('✅ Admin created successfully!');
    console.log('Username: shahrzadyousefi');
    console.log('Email: shahrzadyousefi.id@gmail.com');
    console.log('Role: superadmin');

  } catch (error) {
    console.error('❌ Error creating admin:', error.message);
    if (error.name === 'MongoServerSelectionError') {
      console.log('\n⚠️  Cannot connect to MongoDB!');
      console.log('Please make sure:');
      console.log('1. MongoDB is installed and running locally, OR');
      console.log('2. Update MONGODB_URI in .env.local to use MongoDB Atlas');
      console.log('\nTo use MongoDB Atlas:');
      console.log('1. Go to https://www.mongodb.com/cloud/atlas');
      console.log('2. Create a free cluster');
      console.log('3. Get connection string and update .env.local');
    } else if (error.code === 11000) {
      console.log('⚠️  Admin with this username or email already exists');
    }
  } finally {
    if (mongoose.connection.readyState === 1) {
      await mongoose.connection.close();
    }
    process.exit(0);
  }
}

createAdmin();

