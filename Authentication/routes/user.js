const express=require('express')
const router=express.Router()
const checkAuth=require('../middleware/check-auth.js')
const UserController = require('../controllers/user');
//const check-auth=require('../middleware/check-auth')

router.post('/signup',UserController.user_signup)
    
router.delete('/:userId',checkAuth,UserController.user_delete)

router.post('/login',UserController.user_login)

module.exports=router