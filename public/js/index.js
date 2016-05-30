// 动画
var mySwiper = new Swiper(".swiper-container",{
	onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
	  swiperAnimateCache(swiper); //隐藏动画元素 
	  swiperAnimate(swiper); //初始化完成开始动画
	}, 
	onSlideChangeEnd: function(swiper){ 
	  swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
	} 
})
// 图片翻转
$(".container1").mouseenter(function(){
	$("#card1").css("transform","rotateY( 230deg )")
})
$(".container1").mouseleave(function(){
	$("#card1").css("transform","rotateY( 0deg )")
})
$(".container2").mouseenter(function(){
	$("#card2").css("transform","rotateY( 230deg )")
})
$(".container2").mouseleave(function(){
	$("#card2").css("transform","rotateY( 0deg )")
})
$(".container3").mouseenter(function(){
	$("#card3").css("transform","rotateY( 230deg )")
})
$(".container3").mouseleave(function(){
	$("#card3").css("transform","rotateY( 0deg )")
})
$(".container4").mouseenter(function(){
	$("#card4").css("transform","rotateY( 230deg )")
})
$(".container4").mouseleave(function(){
	$("#card4").css("transform","rotateY( 0deg )")
})
$(".container5").mouseenter(function(){
	$("#card5").css("transform","rotateY( 230deg )")
})
$(".container5").mouseleave(function(){
	$("#card5").css("transform","rotateY( 0deg )")
})
$(".container6").mouseenter(function(){
	$("#card6").css("transform","rotateY( 230deg )")
})
$(".container6").mouseleave(function(){
	$("#card6").css("transform","rotateY( 0deg )")
})
$(".container7").mouseenter(function(){
	$("#card7").css("transform","rotateY( 230deg )")
})
$(".container7").mouseleave(function(){
	$("#card7").css("transform","rotateY( 0deg )")
})
$(".container8").mouseenter(function(){
	$("#card8").css("transform","rotateY( 230deg )")
})
$(".container8").mouseleave(function(){
	$("#card8").css("transform","rotateY( 0deg )")
})