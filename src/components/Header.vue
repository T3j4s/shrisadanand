<template>
     <!--Header Section Start-->
        <div class="header-section d-none d-lg-block">
            <div class="main-header">
                <div class="container position-relative">
                    <div class="row align-items-center">
                        <div class="col-lg-2">
                            <div class="header-logo">
                                <router-link :to="`/${$i18n.locale}`"><img src="@/assets/images/logo/logo.png" alt="logo"></router-link>
                            </div>
                        </div>
                        <div class="col-lg-8 position-static">
                            <div class="site-main-nav">
                                <nav class="site-nav">
                                    <ul>
                                        <li><router-link :to="`/${$i18n.locale}`">{{ $t('navigation.home') }}</router-link></li>
                                        <!-- <li>
                                            <a href="#">Product</a>

                                            <ul class="sub-menu">
                                                <li>
                                                    <a href="#">Combo</a>
                                                    <ul class="sub-menu">
                                                        <li><a href="blog.html">Blog</a></li>
                                                        <li><a href="blog-left-sidebar.html">Blog Left Sidebar</a></li>
                                                        <li><a href="blog-right-sidebar.html">Blog Right Sidebar</a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="#">Blog Single</a>
                                                    <ul class="sub-menu">
                                                        <li><a href="blog-single-left-sidebar.html">Blog Single Left Sidebar</a></li>
                                                        <li><a href="blog-single-right-sidebar.html">Blog Single Right Sidebar</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li> -->
                                        <li>
                                            <a href="#">{{ $t('navigation.product.name') }}</a>
                                            <ul class="sub-menu">
                                                <li><router-link :to="`/${$i18n.locale}/products`">{{ $t('navigation.product.submenu1') }}</router-link></li>
                                                <li><router-link :to="`/${$i18n.locale}/products/combo`">{{ $t('navigation.product.submenu2') }}</router-link></li>
                                            </ul>
                                        </li>
                                        <li><router-link :to="`/${$i18n.locale}/ayurveda`">{{ $t('navigation.aboutayurveda') }}</router-link></li>
                                        <li><router-link :to="`/${$i18n.locale}/collectiondepot`">{{ $t('navigation.collectiondepot') }}</router-link></li>
                                        <li>
                                            <a href="#">{{ $t('navigation.about.name') }}</a>
                                            <ul class="sub-menu">
                                                <li><router-link :to="`/${$i18n.locale}/aboutmaharaj`">{{ $t('navigation.about.submenu1') }}</router-link></li>
                                                <li><a href="http://www.balyogisadanandmaharaj.in/" target="_blank">{{ $t('navigation.about.submenu2') }}</a></li>
                                            </ul>
                                        </li>
                                        <li><router-link :to="`/${$i18n.locale}/contactus`">{{ $t('navigation.contact') }}</router-link></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div class="col-lg-2 position-static">
                            <div class="site-main-nav">
                                <nav class="site-nav">
                                    <ul>
                                        <li>
                                            <a href="#"><i class="icon-globe language-icon"></i></a>
                                            <ul class="sub-menu">
                                                <li><a href="#"  @click.prevent="setLocale('en')">{{ $t('navigation.language.english') }}</a></li>
                                                <li><a href="#"  @click.prevent="setLocale('mr')">{{ $t('navigation.language.marathi') }}</a></li>
                                                <li><a href="#"  @click.prevent="setLocale('hi')">{{ $t('navigation.language.hindi') }}</a></li>

                                            </ul>
                                        </li>
                                        <!-- <li><div id="google_translate_element"></div></li> -->
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--Header Section End-->
        <!--Header Mobile Start-->
        <div class="header-mobile d-lg-none">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-6">
                        <div class="header-logo">
                            <router-link :to="`/${$i18n.locale}`"><img src="@/assets/images/logo/logo.png" alt="logo"></router-link>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="header-meta-info">
                            <div class="header-account">
                                <div class="header-account-list dropdown top-link">
                                    <a href="#" role="button" data-toggle="dropdown"><i class="icon-globe"></i></a>

                                    <ul class="dropdown-menu ">
                                        <li><a href="#"  @click.prevent="setLocale('en')">{{ $t('navigation.language.english') }}</a></li>
                                         <li><a href="#"  @click.prevent="setLocale('mr')">{{ $t('navigation.language.marathi') }}</a></li>
                                        <li><a href="#"  @click.prevent="setLocale('hi')">{{ $t('navigation.language.hindi') }}</a></li>
                                    </ul>
                                </div>
                                <!-- <div class="header-account-list mini-cart">
                                    <a href="#">
                                        <i class="icon-shopping-bag"></i>
                                        <span class="item-count ">0</span>
                                    </a>
                                </div> -->
                                <div class="header-account-list mobile-menu-trigger">
                                    <button id="menu-trigger">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--Header Mobile End-->

        <!--Header Mobile Menu Start-->
        <div class="header-mobile-menu d-lg-none">

            <a href="javascript:void(0)" class="mobile-menu-close">
                <span></span>
                <span></span>
            </a>

            <!-- <div class="header-meta-info">
                <div class="header-search">
                    <form action="#">
                        <input type="text" placeholder="Search our store ">
                        <button><i class="icon-search"></i></button>
                    </form>
                </div>
            </div> -->

            <div class="site-main-nav">
                <nav class="site-nav">
                    <ul class="navbar-mobile-wrapper">
                        <li><a :href="`/${$i18n.locale}`">{{ $t('navigation.home') }}</a></li>
                        <!-- <li>
                            <a href="#">Products</a>

                            <ul class="mega-sub-menu">
                                <li class="mega-dropdown">
                                    <a class="mega-title" href="#">Shop</a>

                                    <ul class="mega-item">
                                        <li><a href="shop-grid-3.html">Shop Grid 3</a></li>
                                        <li><a href="shop-grid-4.html">Shop Grid 4</a></li>
                                        <li><a href="shop-list.html">Shop List</a></li>
                                        <li><a href="shop-grid-left-sidebar.html">Shop Grid Left Sidebar</a></li>
                                        <li><a href="shop-grid-right-sidebar.html">Shop Grid Right Sidebar</a></li>
                                        <li><a href="shop-list-left-sidebar.html">Shop List Left Sidebar</a></li>
                                        <li><a href="shop-list-right-sidebar.html">Shop List Right Sidebar</a></li>
                                    </ul>
                                </li>
                                <li class="mega-dropdown">
                                    <a class="mega-title" href="#">Shop Single</a>

                                    <ul class="mega-item">
                                        <li><a href="shop-single.html">Shop Single</a></li>
                                        <li><a href="shop-single-affiliate.html">Shop Single Affiliate</a></li>
                                        <li><a href="shop-single-variable.html">Shop Single Variable</a></li>
                                        <li><a href="shop-single-group.html">Shop Single Group</a></li>
                                    </ul>
                                </li>
                                <li class="mega-dropdown">
                                    <a class="mega-title" href="#">Page</a>

                                    <ul class="mega-item">
                                        <li><a href="cart.html">Cart</a></li>
                                        <li><a href="wishlist.html">Wishlist</a></li>
                                        <li><a href="compare.html">Compare</a></li>
                                        <li><a href="checkout.html">Checkout</a></li>
                                        <li><a href="empty-cart.html">Empty Cart</a></li>
                                        <li><a href="my-account.html">My Account</a></li>
                                    </ul>
                                </li>
                                <li class="mega-dropdown">
                                    <a class="menu-banner" href="#">
                                        <img src="assets/images/menu-banner.jpg" alt="">
                                    </a>
                                </li>
                            </ul>
                        </li> -->
                        <!-- <li>
                            <a href="#">Blog</a>

                            <ul class="sub-menu">
                                <li>
                                    <a href="#">Blog</a>
                                    <ul class="sub-menu">
                                        <li><a href="blog.html">Blog</a></li>
                                        <li><a href="blog-left-sidebar.html">Blog Left Sidebar</a></li>
                                        <li><a href="blog-right-sidebar.html">Blog Right Sidebar</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">Blog Single</a>
                                    <ul class="sub-menu">
                                        <li><a href="blog-single-left-sidebar.html">Blog Single Left Sidebar</a></li>
                                        <li><a href="blog-single-right-sidebar.html">Blog Single Right Sidebar</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li> -->
                        <li>
                            <a href="#">{{ $t('navigation.product.name') }}</a>
                            <ul class="sub-menu">
                                <li><a :href="`/${$i18n.locale}/products`">{{ $t('navigation.product.submenu1') }}</a></li>
                                <li><a :href="`/${$i18n.locale}/products/combo`">{{ $t('navigation.product.submenu2') }}</a></li>
                            </ul>
                        </li>
                        <li><a :href="`/${$i18n.locale}/ayurveda`">{{ $t('navigation.aboutayurveda') }}</a></li>
                        <li><a :href="`/${$i18n.locale}/collectiondepot`">{{ $t('navigation.collectiondepot') }}</a></li>
                        <li>
                            <a href="#">{{ $t('navigation.about.name') }}</a>
                            <ul class="sub-menu">
                                <li><a :href="`/${$i18n.locale}/aboutmaharaj`">{{ $t('navigation.about.submenu1') }}</a></li>
                                <li><a href="http://www.balyogisadanandmaharaj.in/" target="_blank">{{ $t('navigation.about.submenu2') }}</a></li>
                            </ul>
                        </li>
                        <li><a :href="`/${$i18n.locale}/contactus`">{{ $t('navigation.contact') }}</a></li>
                    </ul>
                </nav>
            </div>

            <div class="header-social">
                <ul class="social">
                    <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                    <li><a href="https://www.instagram.com/balyogi_shri_sadanand_maharaj/" target="_blank"><i class="fa fa-instagram"></i></a></li>
                    <li><a href="#"><i class="fa fa-youtube"></i></a></li>
                </ul>
            </div>

        </div>
        <!--Header Mobile Menu End-->

        <div class="overlay"></div>
</template>

<script>
export default {
    name:"Header",
    data() {
            return {

            }
    },
    methods:{
    setLocale(locale) {
      this.$i18n.locale = locale
      this.$router.push({
        params: { lang: locale }
      })
      //this.hideDropdown()
        }
    }
}
</script>

<style scoped>
.language-icon {
    font-size:21px;
    color:#222222;
    font-weight:500px
}
</style>