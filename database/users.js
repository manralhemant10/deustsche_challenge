const conn = require('./dbconnect')

function getUserid(username){
    return new Promise((resolve,reject)=>{
        const queryUserid = `select userid from users where username='${username}'`

        conn.query(queryUserid,(err,result)=>{
            if(err)reject("Something went wrong")
            else{
                resolve(result[0].userid)
            }
        })
    })
}

module.exports = getUserid