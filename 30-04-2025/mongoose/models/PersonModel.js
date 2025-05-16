const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PersonSchema = new Schema({
  firstName: {
    type: String,
    required: [true, 'a person must have a first name'],
    minlength: [3, 'first name should have at least 3 characters'],
  },
  lastName: {
    type: String,
    required: [true, 'a person must have a last name'],
    minlength: [3, 'last name should have at least 3 characters'],
  },
  age: {
    type: Number,
    min: [0, 'age must be greater than zero'],
  },
  interest: [String],
  isStudent: {
    type: Boolean,
  },
  password: {
    type: String,
  }
});

PersonSchema.pre('save', function (next) {
  // console.log('PersonSchema Pre Save', this);
  next();
});

PersonSchema.post('save', function (doc, next) {
  // console.log('PersonSchema Post Save', doc);
  next();
});

PersonSchema.pre('find', function () {
  // console.log('PersonSchema Pre find', this);
  // this.find({ age: { $gt: 50 } })
});

PersonSchema.pre('validate', function () {
  console.log('PersonSchema Post validate', this);
});

module.exports = mongoose.model('Person', PersonSchema, 'person');
