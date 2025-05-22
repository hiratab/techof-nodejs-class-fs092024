const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const FlatSchema = require('./FlatModel');

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, 'Please provide email'],
    required: true,
    lowercase: true
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    minlength: 6
  },
  firstName: String,
  lastName: String,
  photo: String,
  createdAt: Number,
  updatedAt: Number,
  isActive: Boolean,
  permissions: Array,
  resetPasswordToken: String,
  flats: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Flat'
    }
  ]
});

// A encriptação da senha esta sendo feita no userService
// UserSchema.pre('save', function() {
//   if (!this.isModified('password')) {
//     return;
//   }

//   const salt = bcrypt.genSaltSync(12);
//   this.password = bcrypt.hashSync(this.password, salt);
// })

UserSchema.pre('save', function () {

})

module.exports = mongoose.model('User', UserSchema, 'user-reference-data');
