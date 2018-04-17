const express = require("express");
const router = express.Router();
const main = require('../controller/main');
const auth = require("../config/auth");

router.get("/", (req, res) => {
    res.status(200).json({
      message: "Good to go"
    });
});

router.post("/postMessages", main.thePost)
router.get('/getMessages', auth, main.theGet)
module.exports = router;