exports.error_handler1=(req,res,next)=>{
    const error=new Error('Not Found')
    error.status=404;
    next(error);
}

exports.error_handler2=(error,req,res,next)=>{
    res.status(error.status || 500);
    res.json({
        error:{
            message:error.message
        }
    })
    next()
}