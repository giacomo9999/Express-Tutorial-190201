const mongoose = require("mongoose");
let Schema = mongoose.Schema;

const bookEntrySchema = new Schema({
  guestSignature: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  }
});

const BookEntry = mongoose.model("BookEntry", bookEntrySchema);
module.exports = BookEntry;
