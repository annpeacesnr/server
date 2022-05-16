const authenticate = async (req, res, next)=>{
    try {
        //get cookies
        const token = req.cookies.jwt;
        if(!token){
            res.status(401).send("No token")
        }else{
            const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
            const rootUser = await Users.findOne({_id : verifyToken._id, "tokens.token" : token});