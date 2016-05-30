var express = require("express")
app = express()
var fs = require("fs")
var bodyPar = require("body-parser")

app.use(express.static("public"))
app.use(bodyPar.urlencoded({extended:false}))

// 登录页面
app.post("/sign-up",function(req,res){
	fs.readFile("data/user.json","utf8",function(err,data){
		var arr = JSON.parse(data)
		var obj = req.body
		for(var i in arr){
			if(arr[i].password==obj.password && arr[i].username==obj.username){
				res.redirect("../index.html");
				break;
			}
		}
	})
})
// 登录页用户名验证
app.post("/dengName",function(req,res){
	fs.readFile("data/user.json","utf8",function(err,data){
		var arr = JSON.parse(data)
		var obj = req.body
		var result = ""
		for(var i in arr){
			if(arr[i].username==obj.username || arr[i].email==obj.username || arr[i].phone==obj.username){
				result = true;
				break;
			}else{
				result = false;
			}
		}
		res.send(result);
	})
})
// 登录页密码验证
app.post("/dengPass",function(req,res){
	fs.readFile("data/user.json","utf8",function(err,data){
		var arr = JSON.parse(data)
		var obj = req.body
		var result = ""
		for(var i in arr){
			if(arr[i].username==obj.username && arr[i].password == obj.password){
				result = true;
				break;
			}else{
				result = false;
			}
		}
		res.send(result)
	})
})

// 注册
app.post("/sign-in",function(req,res){
	fs.readFile("data/user.json","utf8",function(err,data){
		var arr = JSON.parse(data)
		var obj = req.body;
		arr.push(obj);
		var newArr = JSON.stringify(arr,null,2)
		fs.writeFile("data/user.json",newArr)
		res.redirect("../index.html")
	})
})
// 注册页面邮箱是否被使用验证
app.post("/Email",function(req,res){
	fs.readFile("data/user.json","utf8",function(err,data){
		var arr = JSON.parse(data)
		var obj = req.body
		var result = ""
		for(var i in arr){
			if(arr[i].email == obj.email){
				result = false
				break
			}else if(arr[i].email != obj.email){
				result = true
			}
		}
		res.send(result)
	})
})
// 注册页面用户名是否重复验证
app.post("/Name",function(req,res){
	fs.readFile("data/user.json","utf8",function(err,data){
		var arr = JSON.parse(data)
		var obj = req.body
		var result = ""
		for(var i in arr){
			if(arr[i].username == obj.username){
				result = false
				break
			}else if(arr[i].username != obj.username){
				result = true
			}
		}
		res.send(result)
	})
})


app.listen(3000)
console.log("服务器已启动！")