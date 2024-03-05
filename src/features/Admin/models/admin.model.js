import mongoose from 'mongoose';
import { isValidPhoneNumber } from 'libphonenumber-js';

const adminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ // Email format validation
  },
  gender: {
    type: String,
    enum: ['Male', 'Female'], // The gender of the admin, allowed values are 'Male', 'Female'
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

export default mongoose.model('Admin', adminSchema);
