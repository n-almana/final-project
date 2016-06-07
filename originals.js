$(document).ready(function() {
	$(".poem").mouseenter(function() {
		$(this).css("opacity", "0.6");
	});

	$(".poem").mouseleave(function() {
	$(this).css("opacity", "1");
	});	

});