const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true,
        minlength: 3,
        maxlength: 10
    },
    email:{
        type: String,
        require:true,
        validate:{
            validator: (v)=>{
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return emailRegex.test(v)
            },
            message:(prop) => `Invalid email ${prop.value}` 
        }
    },
    password:{
        type:String,
        minlength: [6, 'password is to short'],
        require: true
    },
    roles: {
        type:[String],
        require:true,
        default: ['STUDENT'],
    },
    accountStatus: {
        type: String,
        enum: ['PENDING','ACTIVE','REJECTED'],
        default:'PENDING',
        require: true
    }
})

const User = mongoose.model('User',userSchema);

module.exports = User;