$(window).scroll(function(){

	if ( $(document).scrollTop() > 550 ) {			
		$('header').addClass('fixednav');
		$('.logo').css("display","none");
	}

	else {
		$('header').removeClass('fixednav').css('opacity', '1');
		$('.logo').css("display","block");
	}
})


$("#work").click(function(e) {
	e.preventDefault();
	console.log("click!")
    $('html, body').animate({
        scrollTop: $("#worksection").offset().top -150
    }, 800);
});

