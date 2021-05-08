<template>
              <!--Page Banner Start-->
               <!-- :style="{backgroundImage: 'url('+require('@/assets/'+'images/testimonial-bg.jpg')+')'}"  -->
        <div class="page-banner bg-light">
            <div class="container">
                <div class="page-banner-content text-center">
                    <h2 class="title">Products</h2>
                    <ol class="breadcrumb justify-content-center">
                        <li class="breadcrumb-item"><router-link :to="`/${$i18n.locale}`">Home</router-link></li>
                        <li class="breadcrumb-item active" aria-current="page">All Products</li>
                    </ol>
                </div>
            </div>
        </div>
        <!--Page Banner End-->

       <!--Shop Start-->
        <div class="shop-page section-padding-6">
            <div class="container">

                <!--Shop Top Bar Start-->
                <!-- <div class="shop-top-bar d-sm-flex align-items-center justify-content-between">
                    <div class="top-bar-btn">
                        <ul class="nav" role="tablist">
                            <li class="nav-item"><a class="nav-link grid active" data-toggle="tab" href="#grid" role="tab"></a></li>
                            <li class="nav-item"><a class="nav-link list" data-toggle="tab" href="#list" role="tab"></a></li>
                        </ul>
                    </div>
                    <div class="top-bar-sorter">
                        <div class="sorter-wrapper d-flex align-items-center">
                            <label>Sort by:</label>
                            <select class="sorter wide" name="SortBy" id="SortBy">
                                <option value="manual">Featured</option>
                                <option value="best-selling">Best Selling</option>
                                <option value="title-ascending">Alphabetically, A-Z</option>
                                <option value="title-descending">Alphabetically, Z-A</option>
                                <option value="price-ascending">Price, low to high</option>
                                <option value="price-descending">Price, high to low</option>
                                <option value="created-descending">Date, new to old</option>
                                <option value="created-ascending">Date, old to new</option>
                            </select>
                        </div>
                    </div>
                    <div class="top-bar-page-amount">
                        <p>Showing 1 - 9 of 10 result</p>
                    </div>
                </div> -->
                <!--Shop Top Bar End-->


                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="grid" role="tabpanel">
                        <div class="row">
                            <div class="col-lg-4 col-sm-6">
                                <div class="single-product">
                                    <div class="product-image">
                                        <router-link :to="`/${$i18n.locale}/abhayTablet`">
                                            <img src="@/assets/images/product/AbhayTablet.jpg" alt="Product Image">
                                        </router-link>

                                        <!-- <div class="action-links">
                                            <ul>
                                                <li><a href="cart.html" data-tooltip="tooltip" data-placement="left" title="Add to cart"><i class="icon-shopping-bag"></i></a></li>
                                                <li><a href="compare.html" data-tooltip="tooltip" data-placement="left" title="Compare"><i class="icon-sliders"></i></a></li>
                                                <li><a href="wishlist.html" data-tooltip="tooltip" data-placement="left" title="Add to Wishlist"><i class="icon-heart"></i></a></li>
                                                <li><a href="javascript:void(0);" data-tooltip="tooltip" data-placement="left" title="Quick View" data-toggle="modal" data-target="#exampleModal"><i class="icon-eye"></i></a></li>
                                            </ul>
                                        </div> -->
                                    </div>
                                    <div class="product-content text-center">
                                        <!-- <ul class="rating">
                                            <li class="rating-on"><i class="fa fa-star-o"></i></li>
                                            <li class="rating-on"><i class="fa fa-star-o"></i></li>
                                            <li class="rating-on"><i class="fa fa-star-o"></i></li>
                                            <li class="rating-on"><i class="fa fa-star-o"></i></li>
                                            <li class="rating-on"><i class="fa fa-star-o"></i></li>
                                        </ul> -->
                                        <h4 class="product-name"><router-link :to="`/${$i18n.locale}/abhayTablet`">Abhay Tablet</router-link></h4>
                                        <div class="price-box">
                                            <span class="current-price">₹79.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                             <div class="col-lg-4 col-sm-6">
                                <div class="single-product">
                                    <div class="product-image">
                                        <router-link :to="`/${$i18n.locale}/gurjoKadha`">
                                            <img src="@/assets/images/product/GurjoKadha.jpg" alt="Product Image">
                                        </router-link>

                                        <!-- <div class="action-links">
                                            <ul>
                                                <li><a href="cart.html" data-tooltip="tooltip" data-placement="left" title="Add to cart"><i class="icon-shopping-bag"></i></a></li>
                                                <li><a href="compare.html" data-tooltip="tooltip" data-placement="left" title="Compare"><i class="icon-sliders"></i></a></li>
                                                <li><a href="wishlist.html" data-tooltip="tooltip" data-placement="left" title="Add to Wishlist"><i class="icon-heart"></i></a></li>
                                                <li><a href="javascript:void(0);" data-tooltip="tooltip" data-placement="left" title="Quick View" data-toggle="modal" data-target="#exampleModal"><i class="icon-eye"></i></a></li>
                                            </ul>
                                        </div> -->
                                    </div>
                                    <div class="product-content text-center">
                                        <!-- <ul class="rating">
                                            <li class="rating-on"><i class="fa fa-star-o"></i></li>
                                            <li class="rating-on"><i class="fa fa-star-o"></i></li>
                                            <li class="rating-on"><i class="fa fa-star-o"></i></li>
                                            <li class="rating-on"><i class="fa fa-star-o"></i></li>
                                            <li class="rating-on"><i class="fa fa-star-o"></i></li>
                                        </ul> -->
                                        <h4 class="product-name"><router-link :to="`/${$i18n.locale}/gurjoKadha`">Gurjo Kadha</router-link></h4>
                                        <div class="price-box">
                                            <span class="current-price">₹79.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                             <div class="col-lg-4 col-sm-6">
                                <div class="single-product">
                                    <div class="product-image">
                                        <router-link :to="`/${$i18n.locale}/haridraTablet`">
                                            <img src="@/assets/images/product/HaridraTablet.jpg" alt="product Image">
                                        </router-link>

                                        <!-- <div class="action-links">
                                            <ul>
                                                <li><a href="cart.html" data-tooltip="tooltip" data-placement="left" title="Add to cart"><i class="icon-shopping-bag"></i></a></li>
                                                <li><a href="compare.html" data-tooltip="tooltip" data-placement="left" title="Compare"><i class="icon-sliders"></i></a></li>
                                                <li><a href="wishlist.html" data-tooltip="tooltip" data-placement="left" title="Add to Wishlist"><i class="icon-heart"></i></a></li>
                                                <li><a href="javascript:void(0);" data-tooltip="tooltip" data-placement="left" title="Quick View" data-toggle="modal" data-target="#exampleModal"><i class="icon-eye"></i></a></li>
                                            </ul>
                                        </div> -->
                                    </div>
                                    <div class="product-content text-center">
                                        <!-- <ul class="rating">
                                            <li class="rating-on"><i class="fa fa-star-o"></i></li>
                                            <li class="rating-on"><i class="fa fa-star-o"></i></li>
                                            <li class="rating-on"><i class="fa fa-star-o"></i></li>
                                            <li class="rating-on"><i class="fa fa-star-o"></i></li>
                                            <li class="rating-on"><i class="fa fa-star-o"></i></li>
                                        </ul> -->
                                        <h4 class="product-name"><router-link :to="`/${$i18n.locale}/haridraTablet`">Haridra Tablet</router-link></h4>
                                        <div class="price-box">
                                            <span class="current-price">₹79.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                             <div class="col-lg-4 col-sm-6">
                                <div class="single-product">
                                    <div class="product-image">
                                        <router-link :to="`/${$i18n.locale}/nityanandDantManjan`">
                                            <img src="@/assets/images/product/NityanandDantManjan.jpg" alt="product Image">
                                        </router-link>

                                        <!-- <div class="action-links">
                                            <ul>
                                                <li><a href="cart.html" data-tooltip="tooltip" data-placement="left" title="Add to cart"><i class="icon-shopping-bag"></i></a></li>
                                                <li><a href="compare.html" data-tooltip="tooltip" data-placement="left" title="Compare"><i class="icon-sliders"></i></a></li>
                                                <li><a href="wishlist.html" data-tooltip="tooltip" data-placement="left" title="Add to Wishlist"><i class="icon-heart"></i></a></li>
                                                <li><a href="javascript:void(0);" data-tooltip="tooltip" data-placement="left" title="Quick View" data-toggle="modal" data-target="#exampleModal"><i class="icon-eye"></i></a></li>
                                            </ul>
                                        </div> -->
                                    </div>
                                    <div class="product-content text-center">
                                        <!-- <ul class="rating">
                                            <li class="rating-on"><i class="fa fa-star-o"></i></li>
                                            <li class="rating-on"><i class="fa fa-star-o"></i></li>
                                            <li class="rating-on"><i class="fa fa-star-o"></i></li>
                                            <li class="rating-on"><i class="fa fa-star-o"></i></li>
                                            <li class="rating-on"><i class="fa fa-star-o"></i></li>
                                        </ul> -->
                                        <h4 class="product-name"><router-link :to="`/${$i18n.locale}/nityanandDantManjan`">Nityanand Dant Manjan</router-link></h4>
                                        <div class="price-box">
                                            <span class="current-price">₹79.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                             <div class="col-lg-4 col-sm-6">
                                <div class="single-product">
                                    <div class="product-image">
                                        <router-link :to="`/${$i18n.locale}/sadanandPChurna`">
                                            <img src="@/assets/images/product/SadanandPChurna.jpg" alt="product Image">
                                        </router-link>

                                        <!-- <div class="action-links">
                                            <ul>
                                                <li><a href="cart.html" data-tooltip="tooltip" data-placement="left" title="Add to cart"><i class="icon-shopping-bag"></i></a></li>
                                                <li><a href="compare.html" data-tooltip="tooltip" data-placement="left" title="Compare"><i class="icon-sliders"></i></a></li>
                                                <li><a href="wishlist.html" data-tooltip="tooltip" data-placement="left" title="Add to Wishlist"><i class="icon-heart"></i></a></li>
                                                <li><a href="javascript:void(0);" data-tooltip="tooltip" data-placement="left" title="Quick View" data-toggle="modal" data-target="#exampleModal"><i class="icon-eye"></i></a></li>
                                            </ul>
                                        </div> -->
                                    </div>
                                    <div class="product-content text-center">
                                        <!-- <ul class="rating">
                                            <li class="rating-on"><i class="fa fa-star-o"></i></li>
                                            <li class="rating-on"><i class="fa fa-star-o"></i></li>
                                            <li class="rating-on"><i class="fa fa-star-o"></i></li>
                                            <li class="rating-on"><i class="fa fa-star-o"></i></li>
                                            <li class="rating-on"><i class="fa fa-star-o"></i></li>
                                        </ul> -->
                                        <h4 class="product-name"><router-link :to="`/${$i18n.locale}/sadanandPChurna`">Sadanand-P Churna</router-link></h4>
                                        <div class="price-box">
                                            <span class="current-price">₹79.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                             <div class="col-lg-4 col-sm-6">
                                <div class="single-product">
                                    <div class="product-image">
                                        <router-link :to="`/${$i18n.locale}/shriGovindOil`">
                                            <img src="@/assets/images/product/ShriGovindOil.jpg" alt="product Image">
                                        </router-link>

                                        <!-- <div class="action-links">
                                            <ul>
                                                <li><a href="cart.html" data-tooltip="tooltip" data-placement="left" title="Add to cart"><i class="icon-shopping-bag"></i></a></li>
                                                <li><a href="compare.html" data-tooltip="tooltip" data-placement="left" title="Compare"><i class="icon-sliders"></i></a></li>
                                                <li><a href="wishlist.html" data-tooltip="tooltip" data-placement="left" title="Add to Wishlist"><i class="icon-heart"></i></a></li>
                                                <li><a href="javascript:void(0);" data-tooltip="tooltip" data-placement="left" title="Quick View" data-toggle="modal" data-target="#exampleModal"><i class="icon-eye"></i></a></li>
                                            </ul>
                                        </div> -->
                                    </div>
                                    <div class="product-content text-center">
                                        <!-- <ul class="rating">
                                            <li class="rating-on"><i class="fa fa-star-o"></i></li>
                                            <li class="rating-on"><i class="fa fa-star-o"></i></li>
                                            <li class="rating-on"><i class="fa fa-star-o"></i></li>
                                            <li class="rating-on"><i class="fa fa-star-o"></i></li>
                                            <li class="rating-on"><i class="fa fa-star-o"></i></li>
                                        </ul> -->
                                        <h4 class="product-name"><router-link :to="`/${$i18n.locale}/shriGovindOil`">Shri Govind Oil</router-link></h4>
                                        <div class="price-box">
                                            <span class="current-price">₹79.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                


                <!--Pagination Start-->
                <!-- <div class="page-pagination">
                    <ul class="pagination justify-content-center">
                        <li class="page-item"><a class="page-link prev" href="#">Prev</a></li>
                        <li class="page-item"><a class="page-link active" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item"><a class="page-link next" href="#">Next</a></li>
                    </ul>
                </div> -->
                <!--Pagination End-->


            </div>
        </div>
        <!--Shop End-->
</template>

<script>

export default {
  name: 'Product'
}
</script>
