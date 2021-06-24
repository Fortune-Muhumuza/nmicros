const mongoose = require('mongoose');

const groupSchema = mongoose.Schema({
    groupName: {
      type: String,
      required: true,
      unique: true
    },
    totalMoney: {
      type: Number,
    },
    member:{
      type: String,
    }
  });

module.exports = mongoose.model('Group', groupSchema);