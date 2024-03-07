import mongoose from 'mongoose';
import { isValidPhoneNumber } from 'libphonenumber-js';
import bcrypt from 'bcryptjs';

const adminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    validate: {
      validator: function(value) {
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(value);
      },
      message: 'Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, and one number.'
    }
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please enter a valid email address'] // Email format validation
  },
  gender: {
    type: String,
    enum: ['Male', 'Female'], // The gender values
    required: true
  },
  phone: {
    type: String,
    required: false, // Optional
    validate: {
      validator: function(value) {
        return value ? isValidPhoneNumber(value, 'EG') : true;
      },
      message: props => `${props.value} is not a valid phone number!`
    }
  }
});

// Hash the password before saving to database
adminSchema.pre('save', function(next) {
  if (!this.isModified('password')) return next();
  bcrypt.hash(this.password, 10, (err, hash) => {
    if (err) return next(err);
    this.password = hash;
    next();
  });
});

export default mongoose.model('Admin', adminSchema);
