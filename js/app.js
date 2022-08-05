console.log('hello world');


$(document).ready(function(){
	// console.log('hay i am working!!');

	// start header section

	// start banner section
	$('.carousel').carousel();
	// end banner section

	// end header section


	// start info section
	$(window).scroll(function(){
		var getscrolltop = $(this).scrollTop();
		// console.log(getscrolltop);

		if(getscrolltop >= 220){
			$('.infotexts').addClass('formlefts');
			$('.infoimgs').addClass('formrights');
		}else{
			$('.infotexts').removeClass('formlefts');
			$('.infoimgs').removeClass('formrights');
		};
	});
	// end info section

	// start adv section
	$('#videos').click(function(){
		var getmodal = $(this).data('bs-target');
		var getvideosrc = $(this).data('video');

		console.log(getmodal);
		var videourlwithauto = getvideosrc + '?autoplay=1';

		$(getmodal + ' iframe').attr('src',videourlwithauto);

		$(getmodal + 'button.btn-close').click(function(){
			$(getmodal+ 'iframe').attr('src',getvideosrc);
		});

		$(getmodal).click('hidden.bs.modal',function(){
			$(getmodal + ' iframe').attr('src',getvideosrc);
		});

	});
	// end adv section


	// start premises section
	$('#lightslider').lightSlider({
		item:4,
		loop:true,
		auto:true,
		sliderMove:1,
		speed:1000,
		responsive:[
		{
			breakpoint:800,
			settings:{
				item:3,
				sliderMove:1,
				slideMargin:6
			}
		},
		{
			breakpoint:680,
			settings:{
				item:1,
				sliderMove:1
			}
		}
		]
	});
	// end premises section


	// start pricing section
	$(window).scroll(function(){
		var getscroll = $(this).scrollTop();

		if(getscroll >= 2475){
			$('.cardones').addClass('movelefts');
			$('.cardtwos').addClass('movebottoms');
			$('.cardthrees').addClass('moverights');
		}else{
			$('.cardones').removeClass('movelefts');
			$('.cardtwos').removeClass('movebottoms');
			$('.cardthrees').removeClass('moverights');
		}
	})
	// end pricing section


	// start joinus section

	$('#accordion').accordion();

	// end joinus

	// start footer

	$('#getyear').text(new Date().getUTCFullYear());

	// end footer secton


	// start progress
	$(window).scroll(function(){
		var getprogress = $('#progress');
		var getprogressvalue = $('#progressvalues');
		var getscrolltop = $(this).scrollTop();

		// var getscrollheight = $(document).height();
		// console.log(getscrollheight);

		// var getclientheight = $(window).height();
		// console.log(getclientheight);

		// var calcheight = getscrollheight - getclientheight;
		// console.log(calcheight);

		// var finalheight = Math.round(getscrolltop * 100 / calcheight);
		// getprogressvalue.text(finalheight);

		// getprogress.css({
		// 	'background':`conic-gradient(steeblue ${finalheight}%, #eee ${finalheight}%)`
		// });

		// console.log(getprogress);

		var getscrollheight = document.documentElement.scrollHeight;
		// console.log(getscrollheight);

		var getclientheight = document.documentElement.clientHeight;
		// console.log(getclientheight);

		 var calcheight = getscrollheight - getclientheight;
		// console.log(calcheight);

		var finalheight = Math.round(getscrolltop * 100 / calcheight);
		getprogressvalue.text(finalheight);

		getprogress.css({
			'background':`conic-gradient(steelblue ${finalheight}%,#eee ${finalheight}%)`
		});
	})
	// end progress
});

