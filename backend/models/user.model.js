const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userSchema = mongoose.Schema({
    fullname:{
        firstname:{
            type: String,
            required: true,
            minlength:[3, 'First name must be at least 3 character']
        },
        lastname:{
            type: String,
            minlength:[3, 'Last name must be at least 3 character']
        }
    },
    email: {
    type: String,
    required: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'Invalid email format']
    },
    password:{
        type: String,
        select: false,
        required: true
    },
    socketId:{
        type: String
    }
})

userSchema.methods.genrateAuthToken = ()=>{
    const token = jwt.sign({ _id: this._id}, process.env.JWT_SECRET, {expiresIn: '24h'})
    return token;
}

userSchema.methods.comparePassword = async (password)=>{
    return await bcrypt.compare(password, this.password)
}

userSchema.statics.hashPassword = async ()=>{
    return await bcrypt.hash(password,10)
}

const userModel = mongoose.model('user',userSchema)

module.exports = userModel