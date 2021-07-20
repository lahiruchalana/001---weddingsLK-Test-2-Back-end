import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    contactFirst:{
        type: Number,
        default: 0
    },
    contactSecond:{
        type: Number,
        default: 0
    },
    role: {
        type: Number,
        default: 0
    },
    cart: {
        type: Array,
        default: []
    },
    confirmed_vendors: {
        type: Array,
        default: []
    },
    wish_to_buy: {
        type: Array,
        default: []
    }
}, {
    timestamps: true
})

export default mongoose.model('Users', userSchema)