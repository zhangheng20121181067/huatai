/**
 * Created by zh on 2018/2/6.
 */
    //初始状态下所有 详情页面 隐藏
$(".productdetail").find(".prodetailItem").addClass("hide");

//一级导航栏
$(".nav").find("li").eq(2).children("a").addClass("act");

//侧边栏
$(".aside ul").find("li").on("click",function(){
    //点击侧边栏任一项右边的所有 详情页面 隐藏
    $(".productdetail").find(".prodetailItem").addClass("hide");

    $(this).addClass("act").siblings().removeClass("act");
    var index=$(this).index();
    //console.log(index);
    $(".main-common .tuwen-list").find(".tuwen-item").eq(index).removeClass("hide").siblings().addClass("hide");
});

/*
//二级导航栏
$(".content .subnav").find("li").on("click",function(){
    $(this).addClass("act").siblings().removeClass("act");
    var index=$(this).index();
    $(".main-common .tuwen-item-list").find(".item-list-item").eq(index).removeClass("hide").siblings().addClass("hide");
});*/

//点击图片显示详情
$(".tuwen-list").find(".pic-item").on("click",function(){
   //点击任一图片 右边所有的 图片展示列表都隐藏
    $(".main-common .tuwen-list").find(".tuwen-item").addClass("hide");

    var dataIndex=$(this).attr("data-index");
    console.log(dataIndex);
    $(".productdetail").find(".prodetailItem").eq(dataIndex-1).removeClass("hide").siblings().addClass("hide");
});
