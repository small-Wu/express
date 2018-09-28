var express = require('express');
var router = express.Router();
const hc = require('ykt-http-client');

/* GET users listing. */
/*router.post('/validatePhone', function(req, res, next) {
  let phone = req.body.phone;
  hc.post("127.0.0.1:8080/users/find",{phone}).then(function(data){
        res.send(data);
	}) 
});*/
/*router.post('/login', function(req, res, next) {
  let phone = req.body.phone;
  let pwd = req.body.pwd;
  hc.post("127.0.0.1:3000/users/find",{phone,pwd,findType:"exact"}).then(function(data){
        if(data.length == 0){
        	res.send("no");
        }else{
        	res.send("ok")
        }
	}) 
});*/

module.exports = router;