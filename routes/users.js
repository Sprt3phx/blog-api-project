const express = require('express')
const router = express.Router();
const usersController = require('../controllers/usersController')


router.get('/', usersController.getAllUsers)
router.get('/', usersController.getUserById)
router.post('/', usersController.createUser)
router.put('/', usersController.updateUser)
router.delete('/', usersController.deleteUser
)

module.exports = router;