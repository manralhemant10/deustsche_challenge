const express = require('express')
const router = express.Router()
const { doLogin,doRegsiter, check2fa,verifySecondAuth, regSecondAuth} = require('../database/auth')
const checkToken = require('../middleware/auth')
const bodyParser = require('body-parser');


router.use(bodyParser.json())

router.post('/login', (req, res) => {

  doLogin(req.body).then((data)=>{
    res.status(200).json({"token":data})
  }).catch(err=>{
    res.status(400).json({"error":err})
  })
  
})

router.post('/register', (req, res) => {
  doRegsiter(req.body).then((data)=>{
    res.status(200).json({"msg":data})
  }).catch(err=>{
    res.status(400).json({"error":err})
  })
 
  
})

router.post('/secondfactor',checkToken,async(req,res)=>{
  try{
    const password_database = await verifySecondAuth(req.username)

    if(password_database==req.body.password)res.status(200).json({"message":"Success"})
    else res.status(401).json({"message":"Password is incorrect"})
  }catch{
    res.status(400).json({"error":"Something went Wrong"})
  }
})
router.post('/secondauthcheck',checkToken,async(req,res)=>{
  try{
    
    const check = await check2fa(req.username)

    if(check)res.status(200).json({"data":true})
    else res.status(200).json({"data":false})
  }catch{
    res.status(400).json({"error":"Something went Wrong"})
  }
})
router.post('/secondfactorreg',checkToken,async(req,res)=>{
  try{
    const msg = await regSecondAuth(req.username,req.body.password)
    res.status(200).json({"message":msg})
  }catch{
    res.status(400).json({"error":"Something went Wrong"})
  }
})

module.exports = router