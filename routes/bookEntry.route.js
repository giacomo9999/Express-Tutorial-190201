const express = require("express");
const router = express.Router();

const bookEntry_controller = require("../controllers/bookEntry.controller");

/* GET home page. */
router.get("/", bookEntry_controller.nothing);
router.get("/test", bookEntry_controller.test);

module.exports = router;
