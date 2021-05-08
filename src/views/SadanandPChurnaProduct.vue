<template>
           <!--Page Banner Start-->
           <!-- style="background-image: url(assets/images/testimonial-bg.jpg);" -->
        <div class="page-banner bg-light">
            <div class="container">
                <div class="page-banner-content text-center">
                    <h2 class="title">{{$t('products.product5.name')}}</h2>
                    <ol class="breadcrumb justify-content-center">
                        <li class="breadcrumb-item"><router-link :to="`/${$i18n.locale}`">Home</router-link></li>
                        <li class="breadcrumb-item"><router-link :to="`/${$i18n.locale}/products`">Products</router-link></li>
                        <li class="breadcrumb-item active" aria-current="page">{{$t('products.product5.name')}}</li>
                    </ol>
                </div>
            </div>
        </div>
        <!--Page Banner End-->

        <!--Shop Single Start-->
        <div class="shop-single-page section-padding-4">
            <div class="container">


                <!--Shop Single Start-->
                <div class="row justify-content-center">
                    <div class="col-lg-6 col-md-8">
						<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="@/assets/images/product/SadanandPChurna.jpg" alt="Product Image">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="@/assets/images/product/SadanandPChurna2.jpg" alt="Product Image">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
                    </div>
                    <div class="col-lg-6">
                        <div class="shop-single-content">
                            <h3 class="title">{{$t('products.product5.name')}}</h3>
                            <!-- <span class="product-sku">SKU: <span>501</span></span> -->
                            <!-- <div class="product-rating">
                                <ul class="rating-star">
                                    <li class="rating-on"><i class="fa fa-star-o"></i></li>
                                    <li class="rating-on"><i class="fa fa-star-o"></i></li>
                                    <li class="rating-on"><i class="fa fa-star-o"></i></li>
                                    <li class="rating-on"><i class="fa fa-star-o"></i></li>
                                    <li class="rating-on"><i class="fa fa-star-o"></i></li>
                                </ul>
                                <span>No reviews</span>
                            </div> -->
                            <div class="thumb-price">
								<div class="row">
								<div class="col-sm-12 col-lg-5">
									<span class="current-price">₹{{price}}</span>
                                	<!-- <span class="old-price">₹{{Number(price)+50}}</span> -->
                                	<!-- <span class="discount">-34%</span> -->
								</div>								
								
								</div>
								<div class="row mt-2">
									<div class="col-sm-6 col-lg-5">
									<span style="font-size:22px">Qty:  </span>
									<select name="quantity" id="quantity" v-model="selected">
									<option value="100ml">100ml</option>
									<option value="200ml">200ml</option>
									<option value="450ml">450ml</option>
									</select>
								</div>
								</div>
                            </div>
                            <div>
								<p>
								{{$t('products.product5.translation')}}
								</p>

								<div>
									 <p class="font-weight-bold">{{$t('products.product5.description.indication.name')}}</p>
									 <p>
										 <ul class="bullets">
											<li>{{$t('products.product5.description.indication.line1')}}</li> 
											<li>{{$t('products.product5.description.indication.line2')}}</li>
											<li>{{$t('products.product5.description.indication.line3')}}</li>
											<li>{{$t('products.product5.description.indication.line4')}}</li>
										</ul>
									 </p>
								</div>
								<br>
								<div>
									<p class="font-weight-bold">{{$t('products.product5.description.ingridents.name')}}</p>
									<p>{{$t('products.product5.description.ingridents.text')}}</p>
								</div>
								<br>
								<div>
									<p class="font-weight-bold">{{$t('products.product5.description.dosage.name')}}</p>
									<p>
										<ul class="bullets">
											<li v-html="$t('products.product5.description.dosage.line1')"></li> 
											<li v-html="$t('products.product5.description.dosage.line2')"></li>
											<!-- <li v-html="$t('products.product5.description.dosage.line3')"></li> -->
										</ul>
									</p>
								</div>
								<br>
								<!-- <p>
								<span class="font-weight-bold">{{$t('products.product5.description.note.name')}}</span> {{$t('products.product5.description.note.text')}}
								</p>																   -->

								<p>
									{{$t('products.product5.orderText')}}
								</p>

							</div>
							<div class="row my-4">
								<router-link :to="`/${$i18n.locale}/collectiondepot`"><button class="btn btn-block btn-rounded btn-success">Collection Depot</button></router-link>
							</div>
                            <!-- <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima dolores commodi neque officia aliquam labore quasi recusandae rem, quod officiis deleniti eos et cum doloremque necessitatibus obcaecati nesciunt, excepturi a Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, ipsa. Cumque id quis delectus provident quibusdam. Corporis, dolorum. Pariatur voluptatum, at aut enim labore sunt exercitationem libero quod odio eum.</p> -->
                            <!-- <ul class="product-additional-information">
                                <li><button><i class="ti-ruler-pencil"></i> Size Guide</button></li>
                                <li><button><i class="fa fa-truck"></i> Shipping</button></li>
                                <li><button><i class="ti-email"></i> Ask About This product </button></li>
                            </ul> -->

                            <!-- <div class="product-quantity d-flex flex-wrap align-items-center">
                                <span class="quantity-title">Quantity: </span>
                                <form action="#">
                                    <div class="quantity d-flex">
                                        <button type="button" class="sub"><i class="ti-minus"></i></button>
                                        <input type="text" value="1" />
                                        <button type="button" class="add"><i class="ti-plus"></i></button>
                                    </div>
                                </form>
                            </div> -->

                            <!-- <div class="product-action d-flex flex-wrap">
                                <div class="action">
                                    <button class="btn btn-primary">Add to cart</button>
                                </div>
                                <div class="action">
                                    <a href="#"><i class="fa fa-heart"></i></a>
                                </div>
                            </div> -->

                            <!-- <div class="dynamic-checkout-button disabled">
                                <div class="checkout-checkbox">
                                    <input type="checkbox" id="disabled">
                                    <label for="disabled"><span></span> I agree with the terms and conditions </label>
                                </div>
                                <div class="checkout-btn">
                                    <button class="btn btn-primary">Buy it now</button>
                                </div>
                            </div> -->

                            <!-- <div class="custom-payment-options">
                                <p>Guaranteed safe checkout</p>

                                <ul class="payment-options">
                                    <li><img src="assets/images/payment-icon/payment-1.svg" alt=""></li>
                                    <li><img src="assets/images/payment-icon/payment-2.svg" alt=""></li>
                                    <li><img src="assets/images/payment-icon/payment-3.svg" alt=""></li>
                                    <li><img src="assets/images/payment-icon/payment-4.svg" alt=""></li>
                                    <li><img src="assets/images/payment-icon/payment-5.svg" alt=""></li>
                                    <li><img src="assets/images/payment-icon/payment-7.svg" alt=""></li>
                                </ul>
                            </div> -->

                            <!-- <div class="social-share">
                                <span class="share-title">Share:</span>
                                <ul class="social">
                                    <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                    <li><a href="#"><i class="fa fa-pinterest-p"></i></a></li>
                                </ul>
                            </div> -->
                        </div>
                    </div>
                </div>
                <!--Shop Single End-->



                <!--Shop Single info Start-->
                <!-- <div class="shop-single-info my-5">
                    <div class="shop-info-tab">
                        <ul class="nav justify-content-center" role="tablist">
                            <li class="nav-item"><a class="nav-link active" data-toggle="tab" href="#tab1" role="tab">Description</a></li>
                            <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#tab2" role="tab">Direction of Use</a></li>
                            <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#tab3" role="tab">Reviews</a></li>
                        </ul>
                    </div>

                    <div class="tab-content">
                        <div class="tab-pane fade show active" id="tab1" role="tabpanel">
                            <div class="description">
                                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. <br> In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.</p>
                            </div>
                        </div>
                         <div class="tab-pane fade" id="tab2" role="tabpanel">
                            <div class="description">
                                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. <br> In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.</p>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="tab3" role="tabpanel">
                            <div class="reviews">
                                <h3 class="review-title">Customer Reviews</h3>

                                <ul class="reviews-items">
                                    <li>
                                        <div class="single-review">
                                            <h6 class="name">Rosie Silva</h6>
                                            <div class="rating-date">
                                                <ul class="rating">
                                                    <li class="rating-on"><i class="fa fa-star"></i></li>
                                                    <li class="rating-on"><i class="fa fa-star"></i></li>
                                                    <li class="rating-on"><i class="fa fa-star"></i></li>
                                                    <li class="rating-on"><i class="fa fa-star"></i></li>
                                                    <li class="rating-on"><i class="fa fa-star"></i></li>
                                                </ul>
                                                <span class="date">Oct 20, 2020</span>
                                            </div>

                                            <p>Proin bibendum dolor vitae neque ornare, vel mollis est venenatis. Orci varius natoque penatibus et magnis dis parturient montes, nascet</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="single-review">
                                            <h6 class="name">Rosie Silva</h6>
                                            <div class="rating-date">
                                                <ul class="rating">
                                                    <li class="rating-on"><i class="fa fa-star"></i></li>
                                                    <li class="rating-on"><i class="fa fa-star"></i></li>
                                                    <li class="rating-on"><i class="fa fa-star"></i></li>
                                                    <li class="rating-on"><i class="fa fa-star"></i></li>
                                                    <li class="rating-on"><i class="fa fa-star"></i></li>
                                                </ul>
                                                <span class="date">Oct 20, 2020</span>
                                            </div>

                                            <p>Proin bibendum dolor vitae neque ornare, vel mollis est venenatis. Orci varius natoque penatibus et magnis dis parturient montes, nascet</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="single-review">
                                            <h6 class="name">Rosie Silva</h6>
                                            <div class="rating-date">
                                                <ul class="rating">
                                                    <li class="rating-on"><i class="fa fa-star"></i></li>
                                                    <li class="rating-on"><i class="fa fa-star"></i></li>
                                                    <li class="rating-on"><i class="fa fa-star"></i></li>
                                                    <li class="rating-on"><i class="fa fa-star"></i></li>
                                                    <li class="rating-on"><i class="fa fa-star"></i></li>
                                                </ul>
                                                <span class="date">Oct 20, 2020</span>
                                            </div>

                                            <p>Proin bibendum dolor vitae neque ornare, vel mollis est venenatis. Orci varius natoque penatibus et magnis dis parturient montes, nascet</p>
                                        </div>
                                    </li>
                                </ul> -->

                                <!-- <div class="reviews-form">
                                    <form action="#">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="single-form">
                                                    <label>Name</label>
                                                    <input type="text" placeholder="Enter your name">
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="single-form">
                                                    <label>Email</label>
                                                    <input type="text" placeholder="john.smith@example.com">
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="reviews-rating">
                                                    <label>Rating</label>
                                                    <ul id="rating" class="rating">
                                                        <li class="star" title='Poor' data-value='1'><i class="fa fa-star-o"></i></li>
                                                        <li class="star" title='Poor' data-value='2'><i class="fa fa-star-o"></i></li>
                                                        <li class="star" title='Poor' data-value='3'><i class="fa fa-star-o"></i></li>
                                                        <li class="star" title='Poor' data-value='4'><i class="fa fa-star-o"></i></li>
                                                        <li class="star" title='Poor' data-value='5'><i class="fa fa-star-o"></i></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="single-form">
                                                    <label>Body of Review (1500)</label>
                                                    <textarea placeholder="Write your comments here"></textarea>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="single-form">
                                                    <button class="btn btn-dark">Submit Review</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div> -->
                            <!-- </div>
                        </div>
                    </div>
                </div> -->
                <!--Shop Single info End-->


            </div>
        </div>
        <!--Shop Single End--> 
</template>

<script>
  //import Swiper JS
  import Swiper, { Navigation } from 'swiper';
  Swiper.use([Navigation]);

export default {
  name: 'sadanandPChurna',
  data() {
	  return  {
		  selected:"100ml",
	  }
  },
   computed:{
	  price: function() {
		  if(this.selected == "100ml") {
			  return 100
		  }
		  else if(this.selected == "200ml") {
			  return 200
		  }
		  else if(this.selected == "450ml"){
			  return 400
		  }
	  }
  },
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
	//productZoom();
	

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
select {
	border:1px solid grey;
	width:50%;
}
.bullets {
	list-style-type:disc;
	padding-left:15px;
}
</style>
