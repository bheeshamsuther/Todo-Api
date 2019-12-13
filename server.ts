import express from 'express'
import cors from 'cors'
import mongoose from './config/Database/database'
const app = express();

const PORT : any = process.env.PORT || 3002
app.listen(PORT,(req:express.Request,res:express.Response)=>{
    console.log("Server is Connected")
})

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('Database Successfully Connected ')
});

app.get('/' , (req,res)=> {
  res.send({
    message : 'Working'
  })
})
app.use(cors())
app.use(express.json())

app.use('/',require('./Todo'))