const express=require('express')

const errorRouter=require('./routes/error.js')
const errorHandler=require('./middleware/errorHandler.js')
const app=express()
PORT=5001


//handling cors error
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
    'Origin,X-Requested-With,Content-Type,Accept,Authorization');

    if(req.method==='OPTIONS'){
        res.header('Access-Control-Allow-Methods','PUT,POST,PATCH,DELETE,GET')
        return res.status(200).json({}); 
    }
    next();
  });

app.use('/error',errorRouter)
app.use(errorHandler.error_handler1)
app.use(errorHandler.error_handler2)

app.listen(PORT,()=>console.log(`Server Running on port:http://localhost:${PORT}`));