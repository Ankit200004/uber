const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const userModel = require('../models/user.model');
const blacklistTokenModel = require('../models/blacklistToken.model')
const captainModel = require('../models/captain.model')

module.exports.authUser = async(req, res, next)=>{
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    //for clearing token in localstorage for the logout
    const isBlackListed = await blacklistTokenModel.findOne({ token: token })
    if (!isBlackListed) {
        return res.status(401).json({message: "unauthorised"})
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const user = await userModel.findById(decoded._id)

        req.user = user;
        return next()
    } catch (err) {
        return res.status(401).json({message: 'Unathorized'})
    }
}

module.exports.authCaptain = async (req, res, next) => {
    // Get the token from cookies or Authorization header
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        // Check if the token is blacklisted
        const isBlackListed = await blacklistTokenModel.findOne({ token });
        if (!isBlackListed) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        // Verify the token and decode payload
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Find the captain by ID from the token payload
        const captain = await captainModel.findById(decoded.id);

        if (!captain) {
            return res.status(401).json({ message: 'Captain not found' });
        }

        // Attach the captain object to the request for further use
        req.captain = captain;

        // Proceed to the next middleware or route handler
        next();
    } catch (err) {
        console.error('Error in authCaptain:', err.message);
        return res.status(401).json({ message: 'Unauthorized' });
    }
};
