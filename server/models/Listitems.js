const mongoose = require('mongoose');

const ListitemsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: false,
  },
  notes: {
    type: String,
    required: false,
  },
  completed: {
    type: Boolean,
    default: false,
  }
})

const ListModel = mongoose.model("list_items", ListitemsSchema)
module.exports = ListModel;