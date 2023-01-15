const express=require('express')
const bodyparser=require('body-parser')
const counterRouter=require('./routes/counter.js')
const app=express()
PORT=5000



app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json());


app.use('/counter',counterRouter)
app.listen(PORT,()=>console.log(`Server Running on port:http://localhost:${PORT}`));
