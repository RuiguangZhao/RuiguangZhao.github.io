// 消除右上边框
$("body").click(function(){
    $(this).css("padding","0")
})

// 其他登录方式
$(".qq1").mouseenter(function(){
    $(this).css("display","none")
    $(".qq2").css("display","block")
})
$(".qq2").mouseleave(function(){
    $(this).css("display","none")
    $(".qq1").css("display","block")
})
$(".qzon1").mouseenter(function(){
    $(this).css("display","none")
    $(".qzon2").css("display","block")
})
$(".qzon2").mouseleave(function(){
    $(this).css("display","none")
    $(".qzon1").css("display","block")
})
$(".sina1").mouseenter(function(){
    $(this).css("display","none")
    $(".sina2").css("display","block")
})
$(".sina2").mouseleave(function(){
    $(this).css("display","none")
    $(".sina1").css("display","block")
})
$(".weixin1").mouseenter(function(){
    $(this).css("display","none")
    $(".weixin2").css("display","block")
})
$(".weixin2").mouseleave(function(){
    $(this).css("display","none")
    $(".weixin1").css("display","block")
})

// // 登录用户名验证
// $(".txt1").click(function(){
//    $("#dengerrName").css("display","none")
// })
// $(".txt1").blur(function(){
//    var val = $(this).val()
//    $.post("/dengName",{"username":val},function(data){
//      if(data){
//        $("#dengerrName").css("display","none")
//      }else{
//        $("#dengerrName").css("display","inline-block")
//      }
//    })
// })

// 注册页面邮箱验证
$(".email").click(function(){
   $("#errEmail").css("display","none")
   $("#haveEmail").css("display","none")
})
$(".email").blur(function(){
    // 前台格式验证
    var reg = /^[a-zA-Z0-9]{3,11}\@qq|163\.cn|com$/
    var val = $(this).val()
    var test = reg.test(val)
    if(test){
      $("#errEmail").css("display","none")
    }else{
      $("#errEmail").css("display","inline-block")
    }
    // // 后台是否被使用验证
    // $.post("/Email",{"email":val},function(data){
    //     if(data){
    //       $("#haveEmail").css("display","none")
    //     }else{
    //       $("#haveEmail").css("display","inline-block")
    //     }
    // })
  })

// 注册页面用户名验证
$(".userName").click(function(){
   $("#false").css("display","none")
   $("#haveName").css("display","none")
})
var reg = /^[0-9a-zA-Z\u4e00-\u9fa5]{4,16}$/ 
// 前台格式验证
$(".userName").blur(function(){
  var val=$(this).val()
  var com=reg.test(val)
  if(com==false){
    $("#false").css("display","inline-block")
  }else{
    $("#false").css("display","none")
  }
// //后台是否重名验证
//   $.post("/Name",{'username':val},function(data){
//     if(data){
//         $("#haveName").css("display","none")
//       }else{
//         $("#haveName").css("display","inline-block")
//       }
//   })
})
//密码验证
$(".password").blur(function(){
    var txt1 = $(".setPass").val()
    var txt2 = $(this).val()
    if(txt1!=txt2){
      $("#butong").css("display","inline-block")
    }else{
      $("#butong").css("display","none")
    }
})