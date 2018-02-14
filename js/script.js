$(function(){
	if(window.console){
		console.info(">>Join us? Email:fkjaldj@163.com");
	};

	// $(".way3").waypoint(function(){$(".way3").addClass("animated");},{triggerOnce:true, offset:"60%"}
	// 	);

	 $(".way3").waypoint(
	 	function(){
	 	$(this).addClass("animated");
	 	},
	    {triggerOnce:true, offset:"60%"}
	 );
	
})