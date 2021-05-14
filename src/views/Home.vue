<template>
<!-- slider start -->
<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
	  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
	<li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="@/assets/images/slider/slider-2.jpg" alt="Banner 1">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="@/assets/images/slider/slider-1.jpg" alt="Banner 2">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="@/assets/images/slider/slider-3.jpg" alt="banner 3">
    </div>
	<div class="carousel-item">
      <img class="d-block w-100" src="@/assets/images/slider/slider-4.jpg" alt="banner 4">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
<!-- slider ends -->

        <!--Shipping Start-->
        <!-- <div class="shipping-area section-padding-3">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-sm-4">
                        <div class="single-shipping">
                            <div class="shipping-icon">
                                <img src="@/assets/images/shipping-icon/Free-Delivery.png" alt="">
                            </div>
                            <div class="shipping-content">
                                <h5 class="title">Free Delivery</h5>
                                <p>Free shipping around the world for all orders over $120</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-4">
                        <div class="single-shipping">
                            <div class="shipping-icon">
                                <img src="@/assets/images/shipping-icon/Online-Order.png" alt="">
                            </div>
                            <div class="shipping-content">
                                <h5 class="title">Online Order</h5>
                                <p>Don’t worry you can order Online by our Site</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-4">
                        <div class="single-shipping">
                            <div class="shipping-icon">
                                <img src="@/assets/images/shipping-icon/Freshness.png" alt="">
                            </div>
                            <div class="shipping-content">
                                <h5 class="title">Freshness</h5>
                                <p>You have freshness flowers every single order</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> -->
        <!--Shipping End-->

        <!--New Product Start-->
        <div class="new-product-area section-padding-2">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-6 col-md-9 col-sm-11">
                        <div class="section-title text-center">
                            <h2 class="title">{{ $t('products.title') }}</h2>
                            <p>{{ $t('products.description') }}</p>
                        </div>
                    </div>
                </div>
                <div class="product-wrapper">
                    <div class="swiper-container product-active">
                        <div class="swiper-wrapper">
                            <!-- <div class="swiper-slide">
                                <div class="single-product">
                                    <div class="product-image">
                                        <router-link :to="`/${$i18n.locale}/abhayTablet`">
                                            <img src="@/assets/images/product/AbhayTablet.jpg" alt="Image">
                                        </router-link>
                                    </div>
                                    <div class="product-content text-center">
                                        <h4 class="product-name"><router-link :to="`/${$i18n.locale}/abhayTablet`">{{ $t('products.product1.name') }}</router-link></h4>
                                        <div class="price-box">
                                            <span class="current-price">{{ $t('products.product1.price') }}</span>
                                        </div>
                                    </div>
                                </div>
                            </div> -->
                            <div class="swiper-slide">
                                <div class="single-product">
                                    <div class="product-image">
                                        <router-link :to="`/${$i18n.locale}/gurjoKadha`">
                                            <img src="@/assets/images/product/GurjoKadha.jpg" alt="Image">
                                        </router-link>
                                        <!-- <span class="sticker-new soldout-title">Soldout</span> -->

                                    </div>
                                    <div class="product-content text-center">
                                        <!-- <ul class="rating">
                                            <li class="rating-on"><i class="fa fa-star-o"></i></li>
                                            <li class="rating-on"><i class="fa fa-star-o"></i></li>
                                            <li class="rating-on"><i class="fa fa-star-o"></i></li>
                                            <li class="rating-on"><i class="fa fa-star-o"></i></li>
                                            <li class="rating-on"><i class="fa fa-star-o"></i></li>
                                        </ul> -->
                                        <h4 class="product-name"><router-link :to="`/${$i18n.locale}/gurjoKadha`">{{ $t('products.product2.name') }}</router-link></h4>
                                        <div class="price-box">
                                            <span class="current-price">{{ $t('products.product2.price') }}</span>
                                            <!-- <span class="old-price">{{ $t('products.product2.oldprice') }}</span> -->
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- <div class="swiper-slide">
                                <div class="single-product">
                                    <div class="product-image">
                                        <router-link :to="`/${$i18n.locale}/haridraTablet`">
                                            <img src="@/assets/images/product/HaridraTablet.jpg" alt="Image">
                                        </router-link>

                                    </div>
                                    <div class="product-content text-center">
                                        <h4 class="product-name"><router-link :to="`/${$i18n.locale}/haridraTablet`">{{ $t('products.product3.name') }}</router-link></h4>
                                        <div class="price-box">
                                            <span class="current-price">{{ $t('products.product3.price') }}</span>
                                        </div>
                                    </div>
                                </div>
                            </div> -->
                            <div class="swiper-slide">
                                <div class="single-product">
                                    <div class="product-image">
                                        <router-link :to="`/${$i18n.locale}/nityanandDantManjan`">
                                            <img src="@/assets/images/product/NityanandDantManjan.jpg" alt="Image">
                                        </router-link>
                                        <!-- <span class="sticker-new soldout-title">Soldout</span> -->

                                    </div>
                                    <div class="product-content text-center">
                                        <!-- <ul class="rating">
                                            <li class="rating-on"><i class="fa fa-star-o"></i></li>
                                            <li class="rating-on"><i class="fa fa-star-o"></i></li>
                                            <li class="rating-on"><i class="fa fa-star-o"></i></li>
                                            <li class="rating-on"><i class="fa fa-star-o"></i></li>
                                            <li class="rating-on"><i class="fa fa-star-o"></i></li>
                                        </ul> -->
                                        <h4 class="product-name"><router-link :to="`/${$i18n.locale}/nityanandDantManjan`">{{ $t('products.product4.name') }}</router-link></h4>
                                        <div class="price-box">
                                            <span class="current-price">{{ $t('products.product4.price') }}</span>
                                            <!-- <span class="old-price">{{ $t('products.product4.oldprice') }}</span> -->
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="single-product">
                                    <div class="product-image">
                                        <router-link :to="`/${$i18n.locale}/sadanandPChurna`">
                                            <img src="@/assets/images/product/SadanandPChurna.jpg" alt="Image">
                                        </router-link>
                                        <!-- <span class="sticker-new soldout-title">Soldout</span> -->

                                    </div>
                                    <div class="product-content text-center">
                                        <!-- <ul class="rating">
                                            <li class="rating-on"><i class="fa fa-star-o"></i></li>
                                            <li class="rating-on"><i class="fa fa-star-o"></i></li>
                                            <li class="rating-on"><i class="fa fa-star-o"></i></li>
                                            <li class="rating-on"><i class="fa fa-star-o"></i></li>
                                            <li class="rating-on"><i class="fa fa-star-o"></i></li>
                                        </ul> -->
                                        <h4 class="product-name"><router-link :to="`/${$i18n.locale}/sadanandPChurna`">{{ $t('products.product5.name') }}</router-link></h4>
                                        <div class="price-box">
                                            <span class="current-price">{{ $t('products.product5.price') }}</span>
                                            <!-- <span class="old-price">{{ $t('products.product5.oldprice') }}</span> -->
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="single-product">
                                    <div class="product-image">
                                        <router-link :to="`/${$i18n.locale}/shriGovindOil`">
                                            <img src="@/assets/images/product/ShriGovindOil.jpg" alt="Image">
                                        </router-link>
                                        <!-- <span class="sticker-new soldout-title">Soldout</span> -->

                                    </div>
                                    <div class="product-content text-center">
                                        <!-- <ul class="rating">
                                            <li class="rating-on"><i class="fa fa-star-o"></i></li>
                                            <li class="rating-on"><i class="fa fa-star-o"></i></li>
                                            <li class="rating-on"><i class="fa fa-star-o"></i></li>
                                            <li class="rating-on"><i class="fa fa-star-o"></i></li>
                                            <li class="rating-on"><i class="fa fa-star-o"></i></li>
                                        </ul> -->
                                        <h4 class="product-name"><router-link :to="`/${$i18n.locale}/shriGovindOil`">{{ $t('products.product6.name') }}</router-link></h4>
                                        <div class="price-box">
                                            <span class="current-price">{{ $t('products.product6.price') }}</span>
                                            <!-- <span class="old-price">{{ $t('products.product6.oldprice') }}</span> -->
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Add Arrows -->
                        <div class="swiper-next"><i class="fa fa-angle-right"></i></div>
                        <div class="swiper-prev"><i class="fa fa-angle-left"></i></div>
                    </div>
                </div>
            </div>
        </div>
        <!--New Product End-->


        <!--About Start-->
        <div class="about-area section-padding-4" style="margin:6.5rem 0rem !important">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="about-image">
                            <img src="@/assets/images/about/about.jpg" alt="">
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="about-content">
                            <br>
                            <h2 class="title">{{ $t('about.title') }}</h2>
                            <p>{{ $t('about.aboutpage.para1') }}</p>
                            <!-- <p>{{ $t('about.aboutpage.para2') }}</p> -->
                            <!-- <ul>
                                <li> Hand picked just for you. </li>
                                <li> Hand picked just for you. </li>
                                <li> Hand picked just for. </li>
                            </ul> -->
                            <div class="about-btn">
                                <router-link :to="`/${$i18n.locale}/aboutmaharaj`" class="btn btn-round" style="background-color:#68923e;color:white;">{{ $t('about.buttontext') }}</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--About End-->


        <!--Testimonial Start-->
		<div>
			<p class="text-center testimonial-text">{{ $t('testimonial.name') }}</p>
		</div>
        <div class="testimonial-area" :style="{backgroundImage: 'url('+require('@/assets/'+'/images/testimonial-bg.jpg')+')'}">
            <!-- style="background-image: url(assets/images/testimonial-bg.jpg);" -->
            <div class="container">
                <div class="swiper-container testimonial-active">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <div class="single-testimonial text-center">
                                <!-- <p>{{ $t('testimonials.candidate1.description') }}</p>

                                <div class="testimonial-author">
                                    <img src="@/assets/images/testimonial-img-1.png" alt="">
                                    <span class="author-name">{{ $t('testimonials.candidate1.name') }}</span>
                                </div> -->
								<iframe class="testimonial-video" src="https://www.youtube.com/embed/3r2nP2kt2vY" title="YouTube video player" frameborder="0" allow="accelerometer;clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="single-testimonial text-center">
                                <!-- <p>{{ $t('testimonials.candidate2.description') }}</p>

                                <div class="testimonial-author">
                                    <img src="@/assets/images/testimonial-img-2.png" alt="">
                                    <span class="author-name">{{ $t('testimonials.candidate2.name') }}</span>
                                </div> -->
								<iframe class="testimonial-video" src="https://www.youtube.com/embed/cKoauAypqnc" title="YouTube video player" frameborder="0" allow="accelerometer;clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </div>
						                        <div class="swiper-slide">
                            <div class="single-testimonial text-center">
                                <!-- <p>{{ $t('testimonials.candidate2.description') }}</p>

                                <div class="testimonial-author">
                                    <img src="@/assets/images/testimonial-img-2.png" alt="">
                                    <span class="author-name">{{ $t('testimonials.candidate2.name') }}</span>
                                </div> -->
								<iframe class="testimonial-video" src="https://www.youtube.com/embed/9rFSWzZYhuM" title="YouTube video player" frameborder="0" allow="accelerometer;clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </div>
						<div class="swiper-slide">
                            <div class="single-testimonial text-center">
                                <!-- <p>{{ $t('testimonials.candidate2.description') }}</p>

                                <div class="testimonial-author">
                                    <img src="@/assets/images/testimonial-img-2.png" alt="">
                                    <span class="author-name">{{ $t('testimonials.candidate2.name') }}</span>
                                </div> -->
								<iframe class="testimonial-video" src="https://www.youtube.com/embed/A3nftN1_H5E" title="YouTube video player" frameborder="0" allow="accelerometer;clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>

                    <!-- Add Arrows -->
                    <div class="swiper-next"><i class="fa fa-angle-right"></i></div>
                    <div class="swiper-prev"><i class="fa fa-angle-left"></i></div>
                </div>
            </div>
        </div>
        <!--Testimonial End-->





</template>

<style scoped>
.testimonial-video {
	width:80%;
	height:400px
}
.testimonial-text {
	color:#68923e;
	font-size:40px;
	margin-top:100px;
	font-weight: 400;
}
@media (max-width: 575.98px) {
.testimonial-text {
	font-size:24px;
}
 }
</style>

<script>
  //import Swiper JS
  import Swiper, { Navigation } from 'swiper';
  Swiper.use([Navigation]);

export default {
  name: 'Home',
  mounted() {
(function ($) {
    "use strict";
    
        
	/*--
		Header Search
    -----------------------------------*/
	function sticky() {
		$(window).on('scroll', function(event) {    
			var scroll = $(window).scrollTop();
			if (scroll < 350) {
				$(".header-section, .header-mobile").removeClass("sticky");
			} else{
				$(".header-section, .header-mobile").addClass("sticky");
			}
		});
	}
	sticky();

        
	/*--
		Header top Notification
    -----------------------------------*/
	function notificationClose() {
		$('.notification-close-btn').on('click', function () {			
			$('.top-notification-bar').slideUp();
		});		
	}
	notificationClose();
		
	
	/*--
		Slider
    -----------------------------------*/
		
	var swiper = new Swiper('.slider-active', {
		speed: 800,
		loop: true,
		slidesPerView: 1,
		navigation: {
			nextEl: '.swiper-next',
			prevEl: '.swiper-prev',
		},
		effect: "fade",
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	});

	
	/*--
		tooltip
	-----------------------------------*/
	
	var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-tooltip="tooltip"]'))
	var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
		return new bootstrap.Tooltip(tooltipTriggerEl)
	})

	
	/*--
		Product Active
    -----------------------------------*/

	var swiper = new Swiper('.product-active', {
		slidesPerView: 4,
		spaceBetween: 30,
		speed: 800,
		loop: true,
		navigation: {
			nextEl: '.swiper-next',
			prevEl: '.swiper-prev',
		},
		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			576: {
			  slidesPerView: 2,
			},
			768: {
			  slidesPerView: 3,
			},
			992: {
			  slidesPerView: 4,
			},
		}
	});

	
	/*--
		Product Countdown
    -----------------------------------*/

	function countdown() {
		$('[data-countdown]').each(function() {
			var $this = $(this), finalDate = $(this).data('countdown');
			$this.countdown(finalDate, function(event) {
			  $this.html(event.strftime('<div class="single-count"><span class="count">%D</span><p>Days</p></div><div class="single-count"><span class="count">%H</span><p>Hour</p></div><div class="single-count"><span class="count">%M</span><p>mint</p></div><div class="single-count"><span class="count">%S</span><p>Sec</p></div>'));
			});
		});	
	}
	countdown();


	/*--
		Testimonial
    -----------------------------------*/
		
	var swiper = new Swiper('.testimonial-active', {
		speed: 300,
		loop: true,
		slidesPerView: 1,
		navigation: {
		  nextEl: '.swiper-next',
		  prevEl: '.swiper-prev',
		},
	});


	/*--
		Blog
    -----------------------------------*/
		
	var swiper = new Swiper('.blog-active', {
		speed: 800,
		loop: true,
		slidesPerView: 3,
		spaceBetween: 30,
		navigation: {
		  nextEl: '.swiper-next',
		  prevEl: '.swiper-prev',
		},
		breakpoints: {
			0: {
			  slidesPerView: 1,
			},
			576: {
			  slidesPerView: 1,
			},
			768: {
			  slidesPerView: 2,
			},
			992: {
			  slidesPerView: 3,
			},
		}
	});


	/*--
		Brand Active
    -----------------------------------*/
		
	var swiper = new Swiper('.brand-active', {
		speed: 800,
		loop: true,
		slidesPerView: 6,
		spaceBetween: 30,
		navigation: {
		  nextEl: '.swiper-next',
		  prevEl: '.swiper-prev',
		},
		breakpoints: {
			0: {
			  slidesPerView: 2,
			},
			576: {
			  slidesPerView: 3,
			},
			768: {
			  slidesPerView: 5,
			},
			992: {
			  slidesPerView: 6,
			},
		}
	});

	
	/*--
		Color Script
	-----------------------------------*/
	
	function color() {
		$('.color-list li span').each(function() {
			var get_color = $(this).attr('data-color');
			$(this).css("background-color", get_color);
		});
		
		$('.color-list li').on("click", function() {
			$(this).siblings(this).removeClass('active').end().addClass('active');
		});
	
	
		// Shop Color
		$('.color-list li .color-radio label').each(function() {
			var get_color = $(this).attr('data-color');
			$(this).css("background-color", get_color);
		});
	}
 	color();
	
	/*--
		Size Script
	-----------------------------------*/

	function size() {
		$('.size-list li').on("click", function() {
			$(this).siblings(this).removeClass('active').end().addClass('active');
		});
	}
	size();
	 

	
	/*--
		Product Zoom Script
	-----------------------------------*/

	function productZoom() {
		$(".product-zoom").elevateZoom({
			gallery:'gallery_01',
			cursor: "crosshair",
			galleryActiveClass: 'active',
			easing : true, 
			imageCrossfade: true,
			zoomType: "inner"
		}); 
	
		//pass the images to Fancybox
		$(".product-zoom").bind("click", function(e) {  
		var ez =   $('.product-zoom').data('elevateZoom');	
			$.fancybox(ez.getGalleryList());
		return false;
		});
	}
	productZoom();
	

	/*--
		Shop Thumb Active Script
	-----------------------------------*/

	var swiper = new Swiper('.shop-thumb-active', {
		speed: 300,
		loop: false,
		slidesPerView: 3,
		spaceBetween: 20,
		navigation: {
		  nextEl: '.swiper-thumb-next',
		  prevEl: '.swiper-thumb-prev',
		},		
	});
	

	/*--
		Blog Gallery Active Script
	-----------------------------------*/

	var swiper = new Swiper('.blog-gallery', {
		speed: 300,
		loop: false,
		slidesPerView: 1,
		spaceBetween: 20,
		navigation: {
		  nextEl: '.blog-gallery-next',
		  prevEl: '.blog-gallery-prev',
		},
	});

	
	/*--
		product quantity Script
	-----------------------------------*/

	function quantity() {
		$('.add').on('click', function () {
			if ($(this).prev().val()) {
				$(this).prev().val(+$(this).prev().val() + 1);
			}
		});
		$('.sub').on('click', function () {
			if ($(this).next().val() > 1) {
				if ($(this).next().val() > 1) $(this).next().val(+$(this).next().val() - 1);
			}
		});
	}
	quantity();
	

	/*--
		Checkout Button Disabled
	-----------------------------------*/
	
	function btnDisabled() {
		$('#disabled').on('click', function(){
			if( $('#disabled:checked').length > 0 ) {
				$('.dynamic-checkout-button').removeClass('disabled');
			} else {
				$('.dynamic-checkout-button').addClass('disabled');
			}
		});
	}
	btnDisabled();

	
	/*--
		Rating Script
	-----------------------------------*/

	$("#rating li").on('mouseover', function(){
		var onStar = parseInt($(this).data('value'), 10);
		var siblings = $(this).parent().children('li.star');
		Array.from(siblings, function(item){
			var value = item.dataset.value;
			var child = item.firstChild;
			if(value <= onStar){
				child.classList.add('hover')
			} else {
				child.classList.remove('hover')
			}
		})
	})

	$("#rating").on('mouseleave', function(){
		var child = $(this).find('li.star i');
		Array.from(child, function(item){
			item.classList.remove('hover');
		})
	})

	
	$('#rating li').on('click', function(e) {
		var onStar = parseInt($(this).data('value'), 10);
		var siblings = $(this).parent().children('li.star');
		Array.from(siblings, function(item){
			var value = item.dataset.value;
			var child = item.firstChild;
			if(value <= onStar){
				child.classList.remove('hover', 'fa-star-o');
				child.classList.add('fa-star')
			} else {
				child.classList.remove('fa-star');
				child.classList.add('fa-star-o')
			}
		})
	}) 

	
	/*--
		select2 Active
	-----------------------------------*/

	 
	function select2() {
		$(".select2").select2({
			tags: true
		}); 
	}
	select2();

	
	/*--
		Checkout Account Active
	-----------------------------------*/

	 
	function checkoutAccount() {
		$('#account').on('click', function () {
			if ($('#account:checked').length > 0) {
				$('.checkout-account').slideDown();
			} else {
				$('.checkout-account').slideUp();
			}
		});
	}
	checkoutAccount();

	
	/*--
		Checkout Shipping Active
	-----------------------------------*/

	 
	function checkoutShipping() {
		$('#shipping').on('click', function () {
			if ($('#shipping:checked').length > 0) {
				$('.checkout-shipping').slideDown();
			} else {
				$('.checkout-shipping').slideUp();
			}
		});
	}
	checkoutShipping();

	
	/*--
		Checkout Payment Active
	-----------------------------------*/

	 
	function checkoutPayment() {
		var checked = $('.payment-radio input:checked')
		if (checked) {
			$(checked).siblings('.payment-details').slideDown(500);
		};
		$('.payment-radio input').on('change', function() {
			$('.payment-details').slideUp(500);
			$(this).siblings('.payment-details').slideToggle(500);
		});
	}
	checkoutPayment();
	
	
	/*--
		Back to top Script
	-----------------------------------*/

	function backTop() {
		// Show or hide the sticky footer button
		$(window).on('scroll', function (event) {
			if ($(this).scrollTop() > 600) {
				$('.back-to-top').fadeIn(200)
			} else {
				$('.back-to-top').fadeOut(200)
			}
		});


		//Animate the scroll to yop
		$('.back-to-top').on('click', function (event) {
		event.preventDefault();

			$('html, body').animate({
				scrollTop: 0,
			}, 1500);
		});
	}
	backTop();

	
	/*--
		Menu Script
	-----------------------------------*/
	
	function menuScript() {
		$('#menu-trigger').on('click', function(){
			$('.header-mobile-menu').addClass('open')
			$('.overlay').addClass('open')
		});
		
		$('.mobile-menu-close').on('click', function(){
			$('.header-mobile-menu').removeClass('open')
			$('.overlay').removeClass('open')
		});
		
		$('.overlay').on('click', function(){
			$('.header-mobile-menu').removeClass('open')
			$('.overlay').removeClass('open')
		});
			
		
		/*Variables*/
		var $offCanvasNav = $('.navbar-mobile-wrapper'),
			$offCanvasNavSubMenu = $offCanvasNav.find('ul ');
	
		/*Add Toggle Button With Off Canvas Sub Menu*/
		$offCanvasNavSubMenu.parent().prepend('<span class="mobile-menu-expand"></span>');
	
		/*Close Off Canvas Sub Menu*/
		$offCanvasNavSubMenu.slideUp();
	
		/*Category Sub Menu Toggle*/
		$offCanvasNav.on('click', 'li a, li .mobile-menu-expand, li .menu-title', function(e) {
			var $this = $(this);
			if (($this.parent().attr('class').match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/)) && ($this.attr('href') === '#' || $this.hasClass('mobile-menu-expand'))) {
				e.preventDefault();
				if ($this.siblings('ul:visible').length) {
					$this.parent('li').removeClass('active-expand');
					//$this.siblings('ul').slideUp();
				} else {
					$this.parent('li').addClass('active-expand');
					$this.closest('li').siblings('li').find('ul:visible').slideUp();
					$this.closest('li').siblings('li').removeClass('active-expand');
					$this.siblings('ul').slideDown();
				}
			}
		});
		
		$( ".sub-menu, .mega-sub-menu, .mega-item" ).parent( "li" ).addClass( "menu-item-has-children" );

		$( ".mega-sub-menu" ).parent( "li" ).css( "position", "static" );
	}
	menuScript();
    
    
})(jQuery);

  }
}
</script>

<style scoped>

</style>