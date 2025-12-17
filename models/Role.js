const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
  name: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  }
});
// console.log(roleSchema);
module.exports = mongoose.model('Role', roleSchema);
