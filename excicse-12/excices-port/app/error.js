const notFoundHandler = (_req,_res,next)=>{
    const error = new Error({message:"Reashors is not found"});
    error.status = 404;
    next(error)
}

const errorHandler = (error, _req, res, _next)=>{
    if(error.status){
        res.status(error.status).json({message: error.message})
    }
    else{
        res.status(500).json({message: "Internal Server Error"})
    }
}

module.exports = {notFoundHandler, errorHandler};