
$(document).ready(function(){
	/*Script for binding the progress bar with the page.*/
	$("#spinner").bind("ajaxSend", function() {
		$(this).show();
	}).bind("ajaxStop", function() {
		$(this).hide();
	}).bind("ajaxError", function() {
		$(this).hide();
	});	
	
	/* activate sidebar */
	$('#sidebar').affix({
		offset: {
			top: 102,
			bottom: 102
		}
	});

	/* activate scrollspy menu */
	var $body   = $(document.body);
	var navHeight = $('.navbar').outerHeight(true) + 10;

	$body.scrollspy({
		target: '#leftCol',
		offset: navHeight
	});

	/* smooth scrolling sections */
	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) 
		{
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) 
			{
				$('html,body').animate({
					scrollTop: target.offset().top - 50
				}, 1000);
				return false;
			}
		}
	});
});
