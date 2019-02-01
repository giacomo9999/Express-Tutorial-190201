const express = require("express");
const router = express.Router();

const bookEntry_controller = require("../controllers/bookEntry.controller");

/* GET home page. */
router.get("/", bookEntry_controller.nothing);
router.get("/test", bookEntry_controller.test);
router.get("/all", bookEntry_controller.display_all);
router.post("/new", bookEntry_controller.post_new_entry);

module.exports = router;
