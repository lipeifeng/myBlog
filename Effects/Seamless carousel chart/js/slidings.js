// 无缝轮播图： 滑动的是改变move的left，而非moveChild；
// 页面布局样式：
// (1)一开始布局时，第一图前有最后一图，最后一图后有第一图
// (2)style{
// 
//    move --> position: absolute 
//         --> left: -client.outerWidth()
//         
// }
//3区域： 
 //client 可视区域
 //move   滑动区域
 //moveChild 滑动区域的每一个子块
 //2按钮：
 // scrollBtn 滚动（点击）按钮
 // scrollBtnColor 滚动（点击）按钮添加类名改变当前按钮颜色 
 // nextBtn/prevBtn 左右按钮
 //初始值
 //  i=1 代表下标0是最后图，下标1是第一图
 // // 注：i=1的原因是，一开始布局时，第一图前有最后一图，最后一图后有第一图，
 // //     为了第一眼看到的是第一图，要做move.style.left=moveChild.width，且初始时第一图下标是1而非0
 //  timer 定时器名称（自动轮播）
 //  times 动画时间
 // var params={
 //  client:$('.container'),
 //  move:$('.list'),
 //  moveChild:$('.list li'),
 //  scrollBtn:$('.nav span'),
 //  scrollBtnColor:'.selected'
 //  nextBtn:$('.next'),
 //  prevBtn:$('.pre'),
 //  i:1,
 //  timer:null,
 //  times:2000,
 // }

 // slidings(params);



 function slidings(params){
        params.timer=setInterval(function(){
          params.i++;  
          moveImg(params.i)
        },params.times);

        $(params.client).hover(function(){
          clearInterval(params.timer)
        },function(){
           params.timer=setInterval(function(){
            params.i++;  
            moveImg(params.i)
          },params.times);
        })

        $(params.nextBtn).click(function(){
          params.i++;
          moveImg(params.i);
        });

        $(params.prevBtn).click(function(){
          params.i--;
          moveImg(params.i);
        });

        $(params.scrollBtn).click(function(){
          var _index=$(this).index()+1;
          params.i=_index;
          moveImg(params.i);
        });

        function moveImg(){
          if (params.i == params.moveChild.length-1) {
            console.log(params.i);
            params.i=1;
            $(params.move).css({'left':'0'});
          }

          if(params.i == 0){
            params.i=params.moveChild.length-2;
            $(params.move).css({left:((params.moveChild.length-1)*-params.client.outerWidth())});
          }


          $(params.move).stop().animate({'left':-params.client.outerWidth()*params.i+'px'},params.times,function(){
            
          });

          if (params.i == params.moveChild.length-1) {
            $(params.scrollBtn).eq(0).addClass(params.scrollBtnColor).siblings().removeClass(params.scrollBtnColor);
          }else{
            $(params.scrollBtn).eq(params.i-1).addClass(params.scrollBtnColor).siblings().removeClass(params.scrollBtnColor);
          }
            
        }

 }