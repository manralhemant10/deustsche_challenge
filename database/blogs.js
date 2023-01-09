const conn = require('./dbconnect')
const constants = require('../constants/constants')

function saveDraft(userid, title, contentBody){
   
    const querysaveDraft = `insert into blog_data (title, content, status, userid) values
    ('${title}','${contentBody}','${constants.draft}','${userid}')`
    return new Promise((resolve,reject)=>{
        conn.query(querysaveDraft,(err,result)=>{
            if(err)reject("Something went wrong")
            else{
                resolve("saved in drafts")
            }
        })
    })
}

function getBlogs(username,page,sort='desc'){
    const getRolenUserid = `select b.role from users a,user_roles b
     where a.username='${username}' and a.role_id=b.role_id; `

        return new Promise((resolve,reject)=>{
        conn.query(getRolenUserid,(err,rolenuseridobj)=>{
            if(err)reject(err)
            else{
                const role = rolenuseridobj[0].role
                const querygetBlogs = `select a.*,b.username from blog_data a
                ,users b where a.status='ACTIVE' and a.userid=b.userid order by 
                updated_date ${sort} limit ${page},10`
                
                const querysize = `select count(*) as count from blog_data where status='ACTIVE'`
                let blogSize = 0
                conn.query(querysize,(err,blogsize)=>{
                    if(err)reject("Something went wrong")
                    blogSize+=blogsize[0].count
                })


                conn.query(querygetBlogs,(err,blogdata)=>{
                    if(err)reject("Something went wrong")
                    else{
                        resolve({
                            role: role,
                            count: blogSize,
                            data: blogdata
                        })
                    }
                    
                })
                
            }
        })
   })

}


function getBlogundereview(username,page,sort='desc'){

    const getRolenUserid = `select b.role from users a,user_roles b
    where a.username='${username}' and a.role_id=b.role_id; `

       return new Promise((resolve,reject)=>{
       conn.query(getRolenUserid,(err,rolenuseridobj)=>{
           if(err)reject(err)
           else{
               
               const role = rolenuseridobj[0].role
               let querygetBlogs
                if(role=="ADMIN")
                 querygetBlogs = `select a.blog_id,a.title,a.content,b.new_title,
                 b.new_data,a.status,a.updated_date from blog_data a
                  left join update_blog b on  a.blog_id=b.blog_id where 
                  a.status<>'ACTIVE' and 
                  a.userid=(select userid from users where username='${username}')  
                  order by  a.updated_date ${sort} limit ${page},10

                 `
                else
                querygetBlogs=`select a.blog_id,a.title,a.content,b.new_title,
                b.new_data,a.status,a.updated_date from blog_data a left join
                update_blog b on  a.blog_id=b.blog_id where a.status<>'ACTIVE' 
                order by  a.updated_date ${sort} limit 0,${page}`

                const querysize = `select count(*) as count from blog_data where status<>'ACTIVE'`
                let blogSize = 0
                conn.query(querysize,(err,blogsize)=>{
                    if(err)reject("Something went wrong")
                    blogSize+=blogsize[0].count
                })

                conn.query(querygetBlogs,(err,blogdata)=>{
                    if(err)reject("Something went wrong")
                    else{
                        resolve({
                            role: role,
                            count: blogSize,
                            data: blogdata
                        })
                    }
                    
                })
           } 
            })
       })
        
    }

function getBlog(id){

    const querygetblog = `select * from blog_data where blog_id=${id}  `

        return new Promise((resolve,reject)=>{
        conn.query(querygetblog,(err,result)=>{
            if(err)reject("Something went wrong")
            else{
                const status = result[0].status
                if(status=="UPDATED")
                {
                    const queryupdatedblog= `select new_title, new_data from update_blog where blog_id=${id}  `
                    conn.query(queryupdatedblog,(err,res)=>{
                        if(err)reject("Something went wrong")
                        else{
                            resolve({
                                title:res[0].new_title,
                                content:res[0].new_data
                            })
                        }
                       
                    })
                
                }else{
                    resolve({
                        title:result[0].title,
                        content:result[0].content
                    })
                }
                
                
            }
        })
   })

}

function searchBlog(name,sort='desc'){
    const querygetblog = `select * from blog_data where lower(title) like'%${name}%' 
    and status='ACTIVE'  order by  updated_date ${sort} `

        return new Promise((resolve,reject)=>{
        conn.query(querygetblog,(err,result)=>{
            if(err)reject(err)
            else{
                resolve(result)
                
            }
        })
   })

}

function articleApporve(blogid){
    const queryChangestatus = `update blog_data set status='${constants.active}'
     where blog_id=${blogid}`
    const querygetStatus = `select status from blog_data where blog_id=${blogid}`
    return new Promise((resolve,reject)=>{
        conn.query(querygetStatus,(err,resultStatus)=>{
            if(err)reject("Something went wrong")
            else{
                if(resultStatus[0].status==constants.updated){
                    const querytitlencontent = `
                    select new_title ,new_data from update_blog where blog_id=${blogid}`
                    conn.query(querytitlencontent,(err,result)=>{
                        if(err)reject("Something went wrong")
                        else{
                            const queryshiftdata = `update blog_data set content='${result[0].new_data}',
                            title='${result[0].new_title}' where blog_id=${blogid}`   
                            conn.query(queryshiftdata,(err,resultAftershiftdata)=>{
                                if(err)reject("Something went wrong")
                                else{   
                                    const querydelete = `delete from update_blog where blog_id=${blogid}`
                                    conn.query(querydelete,(err,res)=>{
                                        if(err)reject("Something went wrong")
                                        else{
                                           
                                        }
                                    })
                                }
                            })
                        }

                        
                    })
                }
                conn.query(queryChangestatus,(err,result)=>{
                    if(err)reject("Something went wrong")
                    else{
                        resolve("Blog published successfully")
                    }
                })    
                
                
            }
        })
            
    })
}

function updatedArticleApporve(blogid, new_data,new_title){

    const checkifexist = `select * from update_blog where blog_id=${blogid}`
 

    const queryChangestatus = `update blog_data set status='${constants.updated}'
     , updated_date=CURRENT_TIMESTAMP where blog_id=${blogid}`

    return new Promise((resolve,reject)=>{
            conn.query(checkifexist,(err,check)=>{
                if(err)reject("something went wrong")
                else{

                    let queryupdateArticle
                    if(check.length>0){
                        queryupdateArticle=`update update_blog set new_data='${new_data}', new_title='${new_title}'
                        where blog_id=${blogid}`
                    }else
                    {
                         
                        queryupdateArticle= `insert into update_blog(blog_id, new_data,new_title) values
                        (${blogid},'${new_data}','${new_title}') `
                    }
                    conn.query(queryupdateArticle,(err,result)=>{
                        if(err)reject("Something went wrong")
                        else{

                            conn.query(queryChangestatus,(err,result)=>{

                                if(err)reject("Something went wrong")
                                else{
                                    resolve("Blog Updated successfully, waiting for approval")
                                }
                            })
                            
                        }
                    })
                }
            })
            
    })
}
module.exports ={getBlogs,getBlog,getBlogundereview,searchBlog, saveDraft, articleApporve,updatedArticleApporve}