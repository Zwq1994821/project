/**
 * Created by Administrator on 2017/5/17 0017.
 */
var nowX = 0, nowY = 0, oldX = 0, oldY = 0;
var midleX = $("#page1").width() / 2;
var midleY = $("#page1").height() / 2;

//    var img1_left = $(".img1_before").css("left").match(/[0-9]*!/)[0];
//    var img1_top = $(".img1_before").css("top").match(/[0-9]*!/)[0];
//    var img2_left = $(".img2_before").css("left").match(/[0-9]*!/)[0];
//    var img2_top = $(".img2_before").css("top").match(/[0-9]*/)[0];

$(function () {
  $("#page1").mousemove(function (even) {
    nowX = even.pageX;
    nowY = even.pageY;
    showP(nowX, nowY);
  });
});
function showP(x, y) {
  if (x - oldX >= 10 || y - oldY >= 10 || x - oldX <= -10 || y - oldY <= -10) {
    oldX = x;
    oldY = y;
    var xP = (x - midleX) / midleX;
    var yP = (y - midleY) / midleY;
    $(".img1_before").removeClass("img1").addClass("img_after").css({"left": 464 + xP * 20, "top": 312 + yP * 15});
    $(".img2_before").removeClass("img2").addClass("img_after").css({"left": 464 + xP * 40, "top": 287 + yP * 30});
  }
}
/*page1中图片晃动样式*/
/*
var waggle = {
  nowX:0,
  nowY:0,
  oldX:0,
  oldY:0,
  midleX:$("#page1").width() / 2,
  midleY:$("#page1").height() / 2,
  showP:function(x, y){
    if (x - this.oldX >= 10 || y - this.oldY >= 10 || x - this.oldX <= -10 || y - this.oldY <= -10) {
      this.oldX = x;
      this.oldY = y;
      var xP = (x - this.midleX) / this.midleX;
      var yP = (y - this.midleY) / this.midleY;
      $(".img1_before").removeClass("img1").addClass("img_after").css({"left": 464 + xP * 20, "top": 312 + yP * 15});
      $(".img2_before").removeClass("img2").addClass("img_after").css({"left": 464 + xP * 40, "top": 287 + yP * 30});
    }
  },
  info:function(){
    $("#page1").mousemove(function (even) {
      this.nowX = even.pageX;
      this.nowY = even.pageY;
      this.showP(this.nowX,this.nowY);
    }.bind(this));
  }
};
waggle.info();

*/

//实现第二屏的动画效果 begin
function moveLeft(imgList_left){
  $(".imgList").animate({
    left:imgList_left
  },1000)
}

function scrollImg(){
  var index = 3;
  var imgList_left = -249;
  var imgList = $(".imgList");
  imgList.children().addClass("rotated");
  moveLeft(imgList_left);
  $(".imgList img:eq("+index+")").removeClass("rotated");
  var timer = setInterval(function () {
    imgList_left -= 264;
    index++;
    $(".imgList img:eq("+index+")").removeClass("rotated").siblings().addClass("rotated");
    moveLeft(imgList_left);
    if(imgList_left<=-777){
      imgList_left = 807;
      index = -1;
    }
  },3000);
}
//调用函数启动图片滚动
scrollImg();

//实现第三屏的动画效果 begin
function resizePage3() {
  $(".page3_up_showImg").width($(".page3_down").width());
  $(".page3_up_showImg").height($(".page3_down").height());
}
resizePage3();
var dx = 0;
var ex = 0;      //设置拖动前后的鼠标水平坐标
var edx = undefined;              //记录再次点击时的当前坐标
var onMove = false;

var $scrollButton = $(".scrollButton");
var $scrollButton_widthHalf = $(".scrollButton").width() / 2;


$scrollButton.mousedown(function (event) {
  if ($(event.target).is($scrollButton)) {

    if (!onMove) {
      dx = event.pageX - parseInt($scrollButton.css("left"));
      onMove = true;
      $(this).css("cursor", "move");
    } else {
    }
  } else {
  }
});
$(document).mousemove(function (event) {
  if (onMove) {
    ex = event.pageX;
    if (ex - dx <= $('.page3_main').width() && ex - dx >= -33) {
      $scrollButton.css({
        "left": ex - dx
      });
      $(".page3_up").css({
        'width': ex - dx + $scrollButton_widthHalf
      });
    } else {
    }
  }
});
$(document).mouseup(function () {
  onMove = false;
});


