//隐藏导航
$(document).ready(function(){
	$(".btn").click(function(){
		$(".menu").slideToggle();
	})
//banner
 var flag=true;
    var a=setInterval(move,2000);
    var aw;
    if ($(window).width()<1150) {
        aw=800;
    }
    if ($(window).width<850) {
        aw=500;
    }
    
    if ($(window).width()<550) {
        aw=260;
    }

    $(".slide").hover(function(){clearInterval(a)},function(){a=setInterval(move,2000)});
    function move(){
    	$(".slide .slides").animate({marginLeft:-aw},function(){
                $(".slide .slides").append($(".slide .slides li:first-child")).css("marginLeft",0);
                flag1=true;
               
    	})
    }
    function moveL(){
        $(".slide .slides li:last-child").insertBefore(".slide .slides li:first-child");
        $(".slide .slides").css("marginLeft",-aw).animate({marginLeft:0},function(){flag1=true});
    }
    $(".zuo").click(function(){
         if (flag) {
         	moveL();
         	flag=false;
         }
    })
    $(".you").click(function(){
         if (flag){
         	move();
         	flag=false;
         }
    })
   

   $(".causes").hover(function(){
      $(".drop").css("display","block");
   },function(){
      $(".drop").css("display","none");
   })
   


})