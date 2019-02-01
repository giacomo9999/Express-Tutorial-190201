const express = require("express");
const router = express.Router();

const bookEntry_controller = require("../controllers/bookEntry.controller");

/* GET home page. */
router.get("/", bookEntry_controller.nothing);
router.get("/test", bookEntry_controller.test);
router.get("/:id", bookEntry_controller.display_one);
router.put("/:id/update", bookEntry_controller.update);
router.post("/new", bookEntry_controller.post_new_entry);
router.delete("/:id/delete", bookEntry_controller.delete);

module.exports = router;
