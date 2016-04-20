// 点赞
$(".dianzan").click(function(){
   var txt = Number($(this).parent().next().text())
   var num = txt+1
   $(this).parent().next().text(num)
   $(this).css("display","none")
   $(this).next().css("display","block")
})
$(".xiaozan").click(function(){
   var txt = Number($(this).parent().next().text())
   var num = txt-1
   $(this).parent().next().text(num)
   $(this).css("display","none")
   $(this).prev().css("display","block")
})

// 注册页面用户名验证
  var reg = /^[0-9a-zA-Z\u4e00-\u9fa5]{4,16}$/ 
  $(".userName").blur(function(){
    var val=$(".userName").val()
    var com=reg.test(val)
    if(com==false){
      $("#false").css("display","inline-block")
    }else{
      $("#false").css("display","none")
    }
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



  // 消除右上边框
  $("body").click(function(){
      $(this).css("padding","0")
  })




