const express=require('express')
const app=express()
const cors=require('cors')
const mongoose=require('mongoose')
// const DBconnect=require('./helpers/DBconnect')
// DBconnect()
mongoose.connect("mongodb+srv://afef:afef123@afefprojet.v0j0pum.mongodb.net/test?retryWrites=true&w=majority",(err)=>{
        err ? console.log(err) : console.log('database connected')
    })
app.use(cors())
app.use(express.json())
app.use('/api/users',require('./routes/UserRoute'))
app.use('/api/Host',require('./routes/HostRoute'))
  app.use('/api/Activity',require('./routes/ActivityRoute'))
const Port=5000
app.listen(Port,(err)=>{
    err ? console.log(err): console.log(`server is runnig on port ${Port}`)
})