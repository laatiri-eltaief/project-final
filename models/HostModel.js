const mongoose=require('mongoose')

const HostSchema=mongoose.Schema({
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true,
    },
    age:number,
    Specialty:{
        type:String,
        required:true,
    },
})
module.exports=mongoose.model('Host',HostSchema)