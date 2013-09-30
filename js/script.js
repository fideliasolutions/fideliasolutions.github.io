$(document).ready(function(){
	/*-----------------------------------------------------------------------------------*/
	/*	Parallax Effect
	/*-----------------------------------------------------------------------------------*/
    $('section[data-type="background"]').each(function(){
        var $bgobj = $(this); // assigning the object
     
        $(window).scroll(function() {
            var yPos = -($window.scrollTop() / $bgobj.data('speed'));
             
            // Put together our final background position
            var coords = '50% '+ yPos + 'px';
 
            // Move the background
            $bgobj.css({ backgroundPosition: coords });
        });
    });
	/*-----------------------------------------------------------------------------------*/
	/*	Header Responsive Images & Content
	/*-----------------------------------------------------------------------------------*/
	middleText();

	function middleText()
	{
		$('.hero-container').css({
			position:'absolute'
		});
		$('.hero-container').css({
			left: ($(window).width() - $('.hero-container').outerWidth())/2,
			top: ($(window).height() - $('.hero-container').outerHeight())/2,			
		});
	}
	/* On Resize show menu on desktop if hidden */
	jQuery(window).resize(function() {
		middleText();
	});
	/*-----------------------------------------------------------------------------------*/
	/*	Navigation
	/*-----------------------------------------------------------------------------------*/
	var animate='down';
	
	jQuery(window).bind('scroll', function () {
	
		/* Animation for Top Navigation */
		var scrollTop = jQuery(window).scrollTop();
		
		if (scrollTop > jQuery('#dialogue').offset().top-60 && animate == 'down') {
			animate='up';
			jQuery('#nav-bar').stop().animate({top:'0'}, 300);
		} else if(scrollTop < jQuery('#dialogue').offset().top-60 && animate == 'up'){
			animate='down';
			jQuery('#nav-bar').stop().animate({top:'-75px'}, 300);
		}
		
		/* Update Section on Top-Bar */
		jQuery('section').each(function(){
			if (scrollTop > jQuery(this).offset().top-60){
				var section = jQuery(this).attr('id');
				$("#top-navigation ul li").each(function(){
					if(section == jQuery(this).find('a').attr('href').replace("#","") && jQuery(this).not('.active')){
						$("#top-navigation ul li").removeClass('active');
						jQuery(this).addClass('active');
					}
				});
			}
		});
	});
	/*-----------------------------------------------------------------------------------*/
	/*	Features
	/*-----------------------------------------------------------------------------------*/
	$('.feature-1').waypoint(function(){
			$('.feature-1 .feature-img').addClass('animate');
			$('.feature-1 .feature-content').addClass('animate');
		}, {
			triggerOnce: true,
			offset: function(){
				return $(window).height() - $(this).outerHeight() + 200;
			}
		});
		
	$('.feature-2').waypoint(function(){
			$('.feature-2 .feature-img').addClass('animate');
			$('.feature-2 .feature-content').addClass('animate');
		}, {
			triggerOnce: true,
			offset: function(){
				return $(window).height() - $(this).outerHeight() + 200;
			}
		});
	/*-----------------------------------------------------------------------------------*/
	/*	Swiper
	/*-----------------------------------------------------------------------------------*/	
	/* Initialize Slider */	
	var swiper = jQuery('#swiper').swiper({
		loop:true,
		grabCursor: true,
		autoPlay: 4000
	});
	
	/* On Load swiper height should adjust to img size */
	jQuery('.swiper-slide img').load(function() {
		jQuery('#swiper').height(jQuery('.swiper-slide img').height());
		jQuery('.swiper-wrapper').height(jQuery('.swiper-slide img').height());
	});
	
	/* On Resize swiper height should adjust to img size */
	jQuery(window).resize(function() {
		jQuery('#swiper').height(jQuery('.swiper-slide img').height());
		jQuery('.swiper-wrapper').height(jQuery('.swiper-slide img').height());
	});
	/*-----------------------------------------------------------------------------------*/
	/*	Navmaster
	/*-----------------------------------------------------------------------------------*/	
	$('#top-navigation').onePageNav({
		filter: ':not(.external)',
		scrollOffset: 80
	});

	$('#fixed-top-navigation').onePageNav({
		filter: ':not(.external)',
		scrollOffset: 80
	});
	$('#scroll-button').onePageNav({
		filter: ':not(.external)',
		scrollOffset: 20
	});
}); 