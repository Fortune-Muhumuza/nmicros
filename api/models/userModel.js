const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = mongoose.Schema({
    accountName: {
      type: String,
      // required: true,
      unique: true
    },
    accountBalance: {
      type: Number,
    },
    moneySaved:{
      type: Number,
    },
    groupName: {
        type: String
      },
  });

module.exports = mongoose.model('User', UserSchema);