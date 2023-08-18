import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  enteredName: String,
  enteredEmail: String,
  enteredPhoneNumber: Number,
  enteredAddress: String,
  enteredCity: String,
  enteredZipCode: String,
  enteredCountry: String,
  enteredCardNo: String,
  enteredCvv: String,
  enteredCardHolderName: String,
  paymentMethod: String,
});

const User = mongoose.models.User || mongoose.model('User', UserSchema);

export default User;
