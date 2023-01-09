const express = require('express')
const router = express.Router()
const checkEndpointsAllowed = require('../middleware/roles')
const checkToken = require('../middleware/auth')
const getUserid = require('../database/users')
const {getBlogs,getBlog,searchBlog, saveDraft, articleApporve, updatedArticleApporve, getBlogundereview} = require('../database/blogs')
const bodyParser = require('body-parser');

router.use(bodyParser.json()) 

router.get('/read/:underreview?',checkToken, async (req, res) => {
  let data
    try{ 
      if(typeof(req.query.id) == "undefined"){
        if(typeof(req.params.underreview)=="undefined")
        data = await getBlogs(req.username,req.query.page,req.query.sort)
        else
        data=await getBlogundereview(req.username,req.query.page,req.query.sort)

      }
      else{
        if(typeof(req.params.underreview)=="undefined")
        data = await getBlog(req.query.id)
        else return  res.status(400).json({
          "error":"Something went wrong"})
      
      }

      res.status(200).json({"data":data})
    }catch(err){
      res.status(400).json({
        "error":"Something went wrong"})
    }
      
    })

router.get('/search',checkToken,async(req,res)=>{
  try{
      const data = await searchBlog(req.query.name)
      res.status(200).json({"data":data})
  }catch(err){
    res.status(400).json({
      "error":"Something went wrong"})
  }
    
})
router.post('/save',checkToken,checkEndpointsAllowed,async (req,res) => {
  try{

    const userid = await getUserid(req.username)
    const {title,contentBody} = req.body
    const data = await saveDraft(userid,title,contentBody)
    res.status(200).json({"message":data})

  }
  catch(err){
    res.status(400).json({
      "error":"Something went wrong"})
  }
})

router.post('/publish',checkToken,checkEndpointsAllowed,async(req,res) => {
  try{
    const data = await articleApporve(req.body.blogid)
    res.status(200).json({"message":data})

  }catch(err){
    res.status(400).json({
      "error":"Something went wrong"})
  }
   
  })

  router.post('/updateArticle',checkToken,checkEndpointsAllowed,async(req,res) => {
    try{
      const {new_content, new_title}=req.body
      const data = await updatedArticleApporve(req.body.blogid,new_content,new_title)
      res.status(200).json({"message":data})
  
    }catch(err){
      res.status(400).json({
        "error":"Something went wrong"})
    }
     
    })
  
    
module.exports = router