const express = require('express');
const router = express.Router();

//Temp test route to be sure its working
router.get('/', (req, res) => {
    res.json({ message: 'Posts route working!' })
})

module.exports = router;