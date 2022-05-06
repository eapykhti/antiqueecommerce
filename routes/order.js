const router = require('express').Router();

router.get("/usertest", (req,res) => {
    res.end("user test works")
})

module.exports = router