$(document).ready(function(){


	if ($('.location__timer').length) {
		var countDownDate = new Date("March 26, 2023 23:00").getTime();
		// Update the count down every 1 second
		var x = setInterval(function() {

		  // Get today's date and time
		  var now = new Date().getTime();

		  // Find the distance between now and the count down date
		  var distance = countDownDate - now;

		  // Time calculations for days, hours, minutes and seconds
		  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		  // var hours = Math.floor((distance ) / (1000 * 60 * 60));
		  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

		  // Display the result in the element with id="demo"
		  $("#seconds").text(seconds);
		  $("#minutes").text(minutes);
		  $("#hours").text(hours);
		  if (distance < 0) {
		    clearInterval(x);
		    // WHAT HAPPENS WHEN TIMER ENDS?
		  }
		}, 1000);
	}

	$(window).on('mousemove', function(e) {
        var w = $(window).width();
        var h = $(window).height();
        var offsetX = 0.5 - e.pageX / w;
        var offsetY = 0.5 - e.pageY / h;

        $(".parallax").each(function(i, el) {
        	console.log(el);
            var offset = parseInt($(el).data('offset'));
            var translate = "translate3d(" + Math.round(offsetX * offset) + "px," + Math.round(offsetY * offset) + "px, 0px)";
            $(el).css({
                '-webkit-transform': translate,
                'transform': translate,
                'moz-transform': translate
            });
        });
    });
	if ($('.outer__gallery').length) {
		galleryResize();
		$(window).on('resize' ,function(){
			galleryResize();
		});
		function galleryResize(){
			$('.gallery__elem').each(function(index,elem){
				$(elem).find("img").css("height" , $(elem).width());
			});
		}
	}


	$('.header__menu>a').on('click' ,function(e){
		e.preventDefault();
		if ($(this).hasClass("active")) {
			$(this).removeClass("active");
			$('.float__menu').css('top' ,"-100%");
			$("body,html").css("overflow-y" ,"initial");
			setTimeout(function(){
				$('header').removeClass('active');
			}, 200);
		} else{
			$(this).addClass("active");
			$('.float__menu').css('top' ,"0px");
			$("body,html").css("overflow-y" ,"hidden");
			$('header').addClass('active');
		}

	});

	if ($('.full__slider').length) {
		$(window).scrollTop(0);
	}

	$('.quantity__field>input').on("input", function() {
	    this.value = this.value.replace(/\D/g,'');
	});
	$('.quantity__cart>input').on("input", function() {
	    this.value = this.value.replace(/\D/g,'');
	});
	$('.quantity__field .plus').on("click" ,function(e){
		e.preventDefault();
		$(this).closest('.quantity__field').find("input").val(+$(this).closest('.quantity__field').find("input").val() + 1);
	});
	$('.quantity__field .minus').on("click" ,function(e){
		e.preventDefault();
		if ($(this).closest('.quantity__field').find('input').val() > 1) {
			$(this).closest('.quantity__field').find("input").val(+$(this).closest('.quantity__field').find("input").val() - 1);			
		}
	});

	$('.quantity__cart .plus').on("click" ,function(e){
		e.preventDefault();
		$(this).closest('.quantity__cart').find("input").val(+$(this).closest('.quantity__cart').find("input").val() + 1);
	});
	$('.quantity__cart .minus').on("click" ,function(e){
		e.preventDefault();
		if ($(this).closest('.quantity__cart').find('input').val() > 1) {
			$(this).closest('.quantity__cart').find("input").val(+$(this).closest('.quantity__cart').find("input").val() - 1);			
		}
	});

	if ($(".product__marquee").length) {
		$('.product__marquee ul').webTicker({
			startEmpty:false,
			hoverpause:false,
			speed:120,
			duplicate:true
		});
	}

	if ($(".default__marquee").length) {
		$('.default__marquee ul').webTicker({
			startEmpty:false,
			hoverpause:false,
			speed:120,
			duplicate:true
		});
	}

	if ($(".marquee__wrapper").length) {
		$('.marquee__wrapper ul').webTicker({
			startEmpty:false,
			hoverpause:false,
			speed:120,
			duplicate:true
		});
	}


	function resizeGallery(){
		if ($(".full__slider").length) {
			let fullWidth = 0;
			let fullHeight = 0;
			$('.full__slider .elem__full').each(function(index,elem){
				$(elem).css('width' ,$(window).width());
				$(elem).css('height' ,$(window).height());
				fullWidth+= $(window).width();
				fullHeight+= $(window).width();
			});
			$('.full__slider').css("height" , fullHeight - $(window).width());
			$('.full__slider .grid__full').css("width" , fullWidth);
		}
	}
	resizeGallery();
	$(window).on("resize" ,function(){
		resizeGallery();
	});
	if (!$(".full__slider").length) {
		if ($(window).scrollTop() > 1) {
			$('header').css("background-color" ,"#F0C71E");
		} else{
	   		$('header').css("background-color" ,"rgba(255,255,255,0)");
		}
	}
	$(window).on("scroll" ,function(){
		if (!$(".full__slider").length) {
			if ($(window).scrollTop() > 1) {
				$('header').css("background-color" ,"#F0C71E");
			} else{
		   		$('header').css("background-color" ,"rgba(255,255,255,0)");
			}
		}
	});
	if ($('.full__slider').length) {
		let allow = true;
		var lastScrollTop = 0;
		var horizontalScroll = 0;
		var start = $(".full__slider").offset().top;
		var end = $('.full__slider').height() +  $('.full__slider').offset().top;
		var heightNew = $('.full__slider').height();
		let timer;
		$('.full__slider').css('opacity'  , "1");
		$(window).on("resize" ,function(){
		allow = true;
		lastScrollTop = 0;
		horizontalScroll = 0;
		start = $(".full__slider").offset().top;
		end = $('.full__slider').height() +  $('.full__slider').offset().top;
		heightNew = $(".full__slider").height();

	});
	$(window).on("scroll" ,function(){
		
		if ($(window).scrollTop() >= $('.full__slider').offset().top) {
			var st = $(this).scrollTop();
			   if (st > lastScrollTop){
			   	// down scroll
			   	let diapasone = $(window).scrollTop() - start;
			   	let percent = (diapasone)/(end - start - $(window).height()) ;
			   	let newpercent = (end - start)*percent;
			   	if (newpercent > heightNew) {
			   		newpercent = heightNew;
			   		$(".full__slider .grid__full").css("position" , "static");
			   		$('header').css("background-color" ,"#F0C71E");
			   	} else{
			   		$(".full__slider .grid__full").css("position" , "fixed");
			   		$('header').css("background-color" ,"rgba(255,255,255,0)");
			   	}
			   	$('.grid__full').css("transform" , "translateX(-"+ newpercent +"px)");
			   	if (timer) {
			   		clearTimeout(timer);
			   		$('.grid__full>img').css('transform' ,"translateY(-50%) skew(12deg)");
			   		$('.element__info').css('transform' , "skew(6deg)");
			   		timer = setTimeout(function(){
				   		$('.grid__full>img').css('transform' ,"translateY(-50%) skew(0deg)");
			   		$('.element__info').css('transform' , "skew(0deg");
			   		} , 200);
			   	} else {
			   		$('.grid__full>img').css('transform' ,"translateY(-50%) skew(12deg)");
			   		$('.element__info').css('transform' , "skew(6deg)");

			   		timer = setTimeout(function(){
				   		$('.grid__full>img').css('transform' ,"translateY(-50%) skew(0deg)");
			   		$('.element__info').css('transform' , "skew(0deg)");
			   		} , 200);
			   	}
			   } else {
			   		let diapasone = $(window).scrollTop() - start;
				   	let percent = (diapasone)/(end - start - $(window).height()) ;
				   	let newpercent = (end - start)*percent;
				   if (newpercent > heightNew) {
				   		newpercent = heightNew;
				   		$(".full__slider .grid__full").css("position" , "static");
				   		$('header').css("background-color" ,"#F0C71E");
				   	} else{
				   		$(".full__slider .grid__full").css("position" , "fixed");
				   		$('header').css("background-color" ,"rgba(255,255,255,0)");
				   	}
				   	$('.grid__full').css("transform" , "translateX(-"+ newpercent +"px)")
				      // upscroll code
					    if (timer) {
				   		clearTimeout(timer);
				   		$('.grid__full>img').css('transform' ,"translateY(-50%) skew(-12deg)");
					   		$('.element__info').css('transform' , "skew(-6deg)");
				   		timer = setTimeout(function(){
					   		$('.grid__full>img').css('transform' ,"translateY(-50%) skew(0deg)");
					   		$('.element__info').css('transform' , "skew(0deg)");
				   		} , 200);
				   	} else {
				   		$('.grid__full>img').css('transform' ,"translateY(-50%) skew(-12deg)");
				   		$('.element__info').css('transform' , "skew(-6deg)");
				   		timer = setTimeout(function(){
					   		$('.grid__full>img').css('transform' ,"translateY(-50%) skew(0deg)");
					   		$('.element__info').css('transform' , "skew(0deg)");
				   		} , 200);
				   	}
			   }
			   lastScrollTop = st;
		}
	});
	}
});