const mongoose = require('mongoose')

module.exports = async() =>{
    try{

        await mongoose.connect('mongodb://localhost:27017/tp9',{
            autoIndex:true,
            serverSelectionTimeoutMS:30000
        })
        console.log("Mongo connected")
    }catch(error){
        console.log("Mongoose: ",error)
    }
}