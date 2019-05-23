const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Tasks
let Tasks = new Schema({
  personName: {
    type: String
  },
  volume: {
    type: Number
  },
  type: {
    type: String
  }
},{
  collection: 'Tasks'
});

module.exports = mongoose.model('Tasks', Tasks);
