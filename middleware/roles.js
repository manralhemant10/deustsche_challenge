const constants = require('../constants/constants')
const {getRole,checkEndpoint} = require('../database/roles')


function checkEndpointsAllowed(req,res,next){
    getRole(req.username)
    .then(role=>{
        checkEndpoint(role,req.url)
        .then((data)=>next())
        .catch(err=>{
            return res.status(401).send("You are not authorised") 
        })
     })
     .catch(err=>{
        return res.status(400).send("Something went wrong , try again")
    })
    
}
module.exports= checkEndpointsAllowed