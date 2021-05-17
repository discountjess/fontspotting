	var section_position = new Array();

	$('#about').waypoint(function(direction) {
		$('.redcard').addClass('cardrotate');
		$('.navycard').addClass('cardrotate');
		$('.backcard').addClass('cardrotate');
	},{offset: 500});
		
	$(document).ready(function() {
		 $('#gallery').carouFredSel({
			responsive: true,
			width: '100%',		
			auto: true,
			scroll: 1, 					
			prev: '#prev',
			next: '#next',
			swipe: {
				onMouse: false,
				onTouch: false
			},
			items: {
				width: 500,
				height: '50%',	//	optionally resize item-height
				visible: {
					min: 1,
					max: 3
				},
				start: 1
			}
		});
		
		if (navigator.userAgent.match(/(iPad|iPhone|iPod|Android|BlackBerry)/)) {
			//alert("TEST");
			$('section#intro').removeClass('nonmobile').addClass('mobile');
		}
		
		fullScreenSlide();

		/*
		$('.nav a').click(function(){
			$.scrollTo( this.hash, 400, { easing:'swing' });
			return false;
		});
		
		$('nav a').click(function(){
			$.scrollTo( this.hash, 400, { easing:'swing' });
			return false;
		});
		
		$('.footernav a').click(function(){
			$.scrollTo( this.hash, 400, { easing:'swing' });
			return false;
		});
		*/
	
	$('.enlarge').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		}
	});
	
	  $(window).scroll(function() {
		 int = $(window).scrollTop();
		section_register();
		if($('body').attr('id') == 'home'){
			if(int > 0){
				$('body').addClass('stick');
			} else {
				$('body').removeClass('stick');
			};
		};
		   $("section").each(function(index) {
			 if (int >= section_position[index]) {
				 $('nav li').removeClass('active');
				 $('.'+$(this).attr('id')).addClass('active');
				 }
			 });
		  });

		  function section_register() {
			$("section").each(function(index) {
				this_offset = $(this).offset();
				section_position[index] = this_offset.top - ($(window).height()*0.4);
			});
		  
		  }
	});

	$(window).resize(function() {
		fullScreenSlide();
	});
	
	function fullScreenSlide() {
		var browserheight = $(window).height();
		var browserWidth = $(window).width();	
		$('#intro').height(browserheight);
		$('#intro').css('width', browserWidth );
	}	
	