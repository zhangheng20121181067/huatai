/**
 * Created by zh on 2018/2/6.
 */

//一级导航栏
$(".nav").find("li").eq(4).children("a").addClass("act");

//侧边栏
$(".aside ul").find("li").on("click",function(){
    $(this).addClass("act").siblings().removeClass("act");
    var index=$(this).index();
    console.log(index);
    $(".main-common .tuwen-list").find(".tuwen-item").eq(index).removeClass("hide").siblings().addClass("hide");
});

