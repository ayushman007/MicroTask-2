const express=require('express')
const userRouter=require('./routes/user')
const bodyParser=require('body-parser')  //help parse json
const mongoose=require('mongoose')

const app=express()
PORT=5002

mongoose.set("strictQuery", false);
mongoose.connect(
'mongodb+srv://ayushman:' +
  process.env.MONGO_ATLAS_PW +
   '@node-rest-shop.pfyub1r.mongodb.net/?retryWrites=true&w=majority'
)

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());


app.use('/user',userRouter)


app.listen(PORT,()=>console.log(`Server Running on port:http://localhost:${PORT}`));
