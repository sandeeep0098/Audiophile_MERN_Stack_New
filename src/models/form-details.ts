import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema({
  username: {
    type: String,
  },
  email: {
    type: String,
  },
  mobile_no: {
    type: Number,
  },
  address: {
    type: String,
  },
  city: {
    type: String,
  },
  zip_code: {
    type: String,
  },
  country: {
    type: String,
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

const User = mongoose.models.User || mongoose.model('User', UserSchema);

export default User;
