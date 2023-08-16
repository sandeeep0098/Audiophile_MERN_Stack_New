import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mobile_no: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  zip_code: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  cod: {
    type: Boolean,
    default: false,
  },
  emoney: {
    type: Boolean,
    default: false,
  },
  card_no: {
    type: String,
  },
  cvv: {
    type: String,
  },
  cardHolderName: {
    type: String,
  },
});

const User = mongoose.model('User', userSchema);

export default User;
