const express = require('express')
const router = express.Router()
const {body} = require("express-validator")
const userController = require('../controllers/user.contoller')
const authMiddleware = require('../middlewares/auth.midleware')

//for validating user
router.post('/',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min: 3}).withMessage("First name must be at least 3 characters long"),
    body('password').isLength({min: 6}).withMessage("Password must be at least 6 characters long")
],
    //to perform action the basis of above we create that action registerUser
    userController.registerUser
)

//login the user
router.post('/login',[
    body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({ min:6 }).withMessage("Password must be atleast 6 character")
],
    userController.loginUser
)

//for profile
router.get('/profile',authMiddleware.authUser, userController.getUserProfile)
router.get('/logout', authMiddleware.authUser, userController.logoutUser)


module.exports = router