const mongoose=require('mongoose')

const UserSchema=mongoose.Schema({
    firstName:String,
    lastName:String,
    email:String,
    password:String,
    role:{
         type:String,
        enum:['user','admin'],
         default:'user'
    },
ofdate :[Date],
adress:String,
gender:{
    type: String,
    enum: ["male", "female"]
},
telephone :Number,
})
module.exports=mongoose.model('user',UserSchema)