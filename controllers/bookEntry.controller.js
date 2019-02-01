const BookEntry = require("../models/bookEntry.model");

// Display root message ("bookEntries")
exports.nothing = (req, res) =>
  res.send("Greetings From bookEntry Controller Nothing.");

// Display test message ("bookEntries/test")
exports.test = (req, res) =>
  res.send("Greetings From bookEntry Controller Test.");

// Display an entry by id
exports.display_one = (req, res) => {
  BookEntry.findById(req.params.id, (err, bookEntry) => {
    if (err) {
      return next(err);
    }
    res.json(bookEntry);
  });
};

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
    res.json(newEntry);
  });
};

exports.update = (req, res, next) => {
  BookEntry.findOneAndUpdate(
    { _id: req.params.id },
    { $set: req.body },
    (err, bookEntry) => {
      if (err) {
        return next(err);
      }
      res.json(bookEntry);
    }
  );
};

exports.delete = (req, res, next) => {
  BookEntry.findOneAndDelete({ _id: req.params.id }, (err, bookEntry) => {
    if (err) {
      return next(err);
    }
    res.json("Entry Deleted.");
  });
};
