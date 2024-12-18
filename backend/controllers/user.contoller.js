const userModel = require('../models/user.model')
const userService = require('../services/user.service')
const { validationResult } = require('express-validator')

//registering user
module.exports.registerUser = async(req,res,next)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }
    const { fullname, email,password} = req.body

    const hashedPassword = await userModel.hashedPassword(password);

    const user = await userService.createUser({
        firstname : fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashedPassword
    })

    //genrating user token 
    const token = user.genrateAuthToken();

    res.status(201).json({token, user})
}

//logging in 
module.exports.loginUser = async(req,res,next)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    //it is necessary to select the password here because in model we selected it false 
    const user = await userModel.findOne({email}).select('password');

    if (!user) {
        return res.status(401).json({ message: "Invalide email or password. :( "})
    }

    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
    return res.status(400).json({ message: 'Invalide email or password. :(' });
    }

    const token = user.genrateAuthToken();

    res.status(200).json({token, user})
}