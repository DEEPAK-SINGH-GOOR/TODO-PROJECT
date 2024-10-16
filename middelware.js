const isValid = (req,res,next)=>{
    let {taskName , description , status} = req.body
    if(!taskName || ! description || ! status)
    {
        return res.status(400).send("Invalid data");
    }
    else{
        next();
    }
};
module.exports = isValid;