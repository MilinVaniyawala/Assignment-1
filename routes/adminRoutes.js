const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");

router.get("/admin", adminController.getAdmin);
router.get("/add", adminController.getAdd);
router.post("/add/submit", adminController.postAdd);
router.get("/update", adminController.getUpdate);
router.post("/update/submit", adminController.postUpdate);
router.get("/delete", adminController.getDelete);

module.exports = router;
