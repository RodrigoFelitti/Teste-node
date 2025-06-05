const express = require("express");
const router = express.Router();

router.get("/tasks/new", (req, res) =>  {
    res.send("User List")
});

module.exports = router;