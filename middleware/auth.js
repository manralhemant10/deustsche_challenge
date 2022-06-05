const { validateToken,decodeToken } = require("../service/jwtToken");

function checkToken(req,res,next){
    const vald = validateToken(req.headers.token)
    if(vald){
        const username = decodeToken(req.headers.token)
        req.username=username
        next()
    }
    else return res.status(401).json({
        "error":"You are not authorised"})
    
}

module.exports = checkToken