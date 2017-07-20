$(function(){	
	
	
	
	
	var 
		 index = 0 ;
		Swidth = 1226 ;
		 timer = null ;
		
		function NextPage()
		{	
			if(index>2)
			{
				index = 2 ;
			}
	
			$(".Div1_main").stop(true, false).animate({left: -index*Swidth+"px"},600)		
		}
		
		function PrevPage()
		{	
			if(index<0)
			{
				index = 0;
			}
			
			$(".Div1_main").stop(true, false).animate({left: -index*Swidth+"px"},600)		
		}
		
		
		//下一页
		$(".Div1_next").click(function(){
			 index++ ;
			 NextPage();
		});
		//上一页
		$(".Div1_prev").click(function(){
			 index-- ;
			 PrevPage();
		});
		//自动滚动
		var timer = setInterval(function(){
				index++ ;
				NextPage();
			},4000);
			
		$(".Div1_next, .Div1_main , .Div1_prev").mouseover(function(){
			clearInterval(timer);
		});
		$(".Div1_next img , .Div1_main , .Div1_prev img , .Div1_title span").mouseleave(function(){
			timer = setInterval(function(){
				index++ ;
				NextPage();
			},4000);	
		});
			
})//建站套餐
