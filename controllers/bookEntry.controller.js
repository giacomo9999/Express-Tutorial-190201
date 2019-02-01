const BookEntry = require("../models/bookEntry.model");

// Display root message ("bookEntries")
exports.nothing = (req, res) =>
  res.send("Greetings From bookEntry Controller Nothing.");

// Display test message ("bookEntries/test")
exports.test = (req, res) =>
  res.send("Greetings From bookEntry Controller Test.");

// Display list of all entries
exports.display_all = (req, res) =>
  res.send("NOT IMPLEMENTED: List of all entries");

// Post new entry
exports.post_new_entry = (req, res, next) => {
  let newEntry = new BookEntry({
    guestSignature: req.body.signature,
    message: req.body.message
  });
  newEntry.save(err => {
    if (err) {
      return next(err);
    }
    res.send("Entry added successfully.");
  });
};
