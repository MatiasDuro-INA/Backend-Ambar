import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    nombre:{
        type: String,
        required: true,
        trim: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },
    admin:{
        type: Boolean,
        required: false,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
})

const User = mongoose.model('User', userSchema)

export default User