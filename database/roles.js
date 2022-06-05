const conn = require('./dbconnect')

function getRole(username){

    const querygetRole = `select role from user_roles where role_id in (
        select role_id from users where username='${username}')`

    return new Promise((resolve,reject)=>{
        conn.query(querygetRole,(err,result)=>{
            if(err)reject("Something went wrong")
            else{
                resolve(result[0].role)
            }
            
        })
    })

}

function checkEndpoint(role,endpoint){
    const query = `select * from endpoints_allowed where role_id in (select role_id 
        from user_roles where role='${role}') and endpoint ='${endpoint}' `
    
    return new Promise((resolve,reject)=>{
        conn.query(query,(err,result)=>{
            if(err)reject("Something went wrong");
            else{
                if(result.length>0)
                    resolve("Authorised")
                
                else reject("Not authroised")
            }
        })
    })

}
module.exports = {getRole, checkEndpoint}