const express = require('express')
const router = express.Router();

//Temp test to be sure its working 
router.get('/', (req, res) => {
    res.json({ message: 'Users route working!' })
})

module.exports = router;