const conn = require('./dbconnect')
const {generateToken} = require('../service/jwtToken')

function doLogin(body){
    const {username, password} = body
  
    const query = `select * from users where username ='${username}' and 
    password='${password}'`

    return new Promise((resolve,reject)=>{
        conn.query(query,(err,result)=>{           
 
            if(err)reject("please try again")
            else if(result.length>0){
                generateToken(username).then((token)=>{
                    resolve(token)
                   }).catch((err)=>reject("Please try again"))      
            }
            else{
                reject("Either username or password is incorrect")
            }
    })

    })
    
        
}

function doRegsiter(body){
    const {username,password,role} = body 
    const checkUsername = `select * from users where username='${username}'`
    const getRoleid = `select role_id from user_roles where role='${role}'`
    return new Promise((resolve,reject)=>{
        conn.query(checkUsername,(err,usernameresult)=>{
            if(err){
                reject("something went wrong")
            }else{
                    if(usernameresult.length>0)reject("User already exist")
                    else{

                        conn.query(getRoleid,(err,roleidresult)=>{
                            if(err)reject("Something went wrong")
                            else{
                                const insertData = `INSERT INTO users (username, password,role_id)
     VALUES ('${username}', '${password}',${roleidresult[0].role_id})`

                                conn.query(insertData,(err,result)=>{
                                    if(err){
                                        reject("Something went wrong")
                                    }else{
                                        resolve("Successfully registered")
                                    }
                                        
                                })
                            }

                        })
                        
                }
            }
        })
    })
    
         

}

function verifySecondAuth(username){
    const querySecondauth = `select password_sec_auth from second_auth where 
    userid=(select  userid from users where username='${username}')`

    return new Promise((resolve,reject)=>{
        conn.query(querySecondauth,(err,password)=>{
            if(err)reject("Something went wrong")
            else{
                resolve(password[0].password_sec_auth)
            }
        })
    })
    
}
function check2fa(username){
    const getauth = `select * from second_auth where userid=(select
        userid from users where username='${username}')`

    return new Promise((resolve,reject)=>{
        conn.query(getauth,(err,res)=>{
            if(err)reject("Something went wrong")
            else{
            if(err)reject("something went wrong")
              if(res.length>0)resolve(true)
              else resolve(false)
            }
        })
    })
}
function regSecondAuth(username,password){
    const getUserid = `select userid from users where username='${username}'`

    return new Promise((resolve,reject)=>{
        conn.query(getUserid,(err,userid)=>{
            if(err)reject("Something went wrong")
            else{
                const querystoreSecondpwd=`insert into second_auth(userid,password_sec_auth)
                values(${userid[0].userid},'${password}')`
                conn.query(querystoreSecondpwd,(err,res)=>{

                    
                    if(err)reject("Something went wrong")
                    else{
                        resolve("Success")
                    }
                })
            }
        })
    })
    
}
module.exports={
    check2fa,
    doLogin,
    doRegsiter,
    verifySecondAuth,
    regSecondAuth
}