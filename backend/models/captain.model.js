const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const captainSchema = mongoose.Schema({
    fullname:{
        firstname:{
            type: String,
            required: true,
            minLength: [3, "First name should be atleast of 3 character"]
        },
        lastname: {
            type: String,
            minLength: [3, "Last name should be atleast of 3 character"]
        },
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
    socketId: {
        type: String
    },
    status: {
        type: String,
        enum: ['active','inactive'],
        deafult: 'inactive'
    },
    vehicle: {
        color:{
            type: String,
            required: true,
            minLength: [3,"color must be atleast of 3 character long"],
        },
        plate: {
            type: String,
            required: true,
            minLength: [3, "plate must be atleast of 3 character long"]
        },
        capacity: {
            type: Number,
            required: true,
            min: [1, " Capacity must be atleast of 1 "]
        },
        vehicleType:{
            type: String,
            required: true,
            enum: ['car','motorcycle','auto']
        }
    },
    location:{
        lat:{
            type: Number
        },
        lon:{
            type: Number
        }
    }
})

captainSchema.methods.genrateAuthToken = ()=>{
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, { expires: '24h' })
    return token;
}

captainSchema.methods.comparePassword = async (password)=>{
    return await bcrypt.compare(password, this.password);
}

captainSchema.statics.hashpasswords = async (password) => {
    return await bcrypt.hash(password, 10)
}

const captainModel = mongoose.model('captain', captainSchema)

module.exports = captainModel;