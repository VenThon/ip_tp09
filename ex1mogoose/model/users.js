var mongoose = require('mongoose')

var userShema = new mongoose.Schema({
    email:{
        type: String,
        unique: true,
        require: true
    },
    username:{
        type: String,
        unique: true,
        require: true
    },
    firstname:{
        type: String,
        unique: true,
        require: true
    },
    lastname:{
        type: String,
        unique: true,
        require: true
    },
    password:{
        type: String,
        unique: true,
        require: true
    }
})

var users= mongoose.model('users',userShema);
module.exports=users;