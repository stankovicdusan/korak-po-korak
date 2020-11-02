$(document).ready(function() {
	$(function(){
	    $('.link_text').click(function(){
	        $(this).parent().find('.link_text .active').removeClass('active');
	        $(this).addClass('active');
	    })
	})
})