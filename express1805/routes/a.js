var express = require('express');
var router = express.Router();
const userModel = require('../model/usersModel')
/* GET home page. */
router.get('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();

    let dataObj = [
        {
        name:'lxq',
        age:24
        },
        {
            name:'g',
            age:26
        }
    ]
    res.render('a', { title: '中华人民共和国万岁' ,dataObj:dataObj});
});


router.get('/api',(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    // let query = req.query
    // userModel.findpage({},query.p,6,(error,result)=>{
    //     res.json(result)
    // })
  userModel.find({},(error,result)=>{
    res.json(result)
  })
})


router.get("/register",(req,res)=>{
  let url = require("url")
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  let urls = url.parse(req.url,true,true)
  console.log(urls.query)
  // console.log(res)
  userModel.add(
    urls.query,
    (error,result)=>{
      res.jsonp(1)
    }
  )
})


router.get("/login",(req,res)=>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  // console.log(req)
  let url = require("url")
  let urls = url.parse(req.url,true,true)
  userModel.find(urls.query,(error,result)=>{
    console.log(result)
    // console.log(req)
    console.log(urls.query)
    // console.log(result)
      if(result.length==1){
        res.json(1)
      }else{
        res.json(2)
      }



  })
})

module.exports = router;
