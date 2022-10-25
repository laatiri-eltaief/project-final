const mongoose=require('mongoose')

const DBconnect=()=>{
    mongoose.connect("mongodb+srv://afef:afef123@afefprojet.v0j0pum.mongodb.net/?retryWrites=true&w=majority",(err)=>{
        err ? console.log(err) : console.log('database connected')
    })
}
module.exports=DBconnect