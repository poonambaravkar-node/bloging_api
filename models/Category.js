const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true }
});
// console.log("categorySchema-", categorySchema);

module.exports = mongoose.model('Category', categorySchema);
