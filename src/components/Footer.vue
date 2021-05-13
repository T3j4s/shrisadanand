<template>
            <!--Footer Section Start-->
        <div class="footer-area" style="margin-top:100px">
            <div class="container">
                <div class="footer-widget-area section-padding-6">
                    <div class="row justify-content-between">

                        <!--Footer Widget Start-->
                        <div class="col-lg-4 col-md-6">
                            <div class="footer-widget">
                                <a class="footer-logo" href="#"><img src="@/assets/images/logo/logo-white.png" alt=""></a>
                                <div class="footer-widget-text">
                                    <p>{{ $t('footer.footertext') }}</p>
                                </div>
                                <div class="widget-social">
                                    <ul>
                                        <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                        <li><a href="https://www.instagram.com/balyogi_shri_sadanand_maharaj/" target="_blank"><i class="fa fa-instagram"></i></a></li>
                                        <li><a href="#"><i class="fa fa-youtube"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <!--Footer Widget End-->
                        </div>

                        <div class="col-lg-2 col-md-4 col-sm-6">
                            <div class="footer-widget">
                                <h4 class="footer-widget-title font-weight-bold">{{ $t('footer.quicklinks.name') }}</h4>

                                <div class="footer-widget-menu">
                                    <ul>
                                        <li><router-link :to="`/${$i18n.locale}/`">{{ $t('footer.quicklinks.link1') }}</router-link></li>
                                        <li><router-link :to="`/${$i18n.locale}/products`">{{ $t('footer.quicklinks.link2') }}</router-link></li>
                                        <li><router-link :to="`/${$i18n.locale}/ayurveda`">{{ $t('footer.quicklinks.link3') }}</router-link></li>
                                        <li><router-link :to="`/${$i18n.locale}/aboutmaharaj`">{{ $t('footer.quicklinks.link4') }}</router-link></li>
                                        <li><router-link :to="`/${$i18n.locale}/contactus`">{{ $t('footer.quicklinks.link5') }}</router-link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-4 col-sm-6">
                            <div class="footer-widget">
                                <h4 class="footer-widget-title font-weight-bold">{{ $t('footer.address.name') }}</h4>

                                <div class="footer-widget-menu">
                                    <ul style="color:white;">
                                        <li>{{ $t('footer.address.line1') }}</li>
                                        <li>{{ $t('footer.address.line2') }}</li>
                                        <li>{{ $t('footer.address.line3') }}</li>
                                        <li>{{ $t('footer.address.line4') }}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-4 col-sm-6">
                            <div class="footer-widget">
                                <h4 class="footer-widget-title font-weight-bold">{{ $t('footer.contact.name') }}</h4>

                                <div class="footer-widget-menu">
                                    <ul>
                                        <li><a href="tel:8828594212">{{ $t('footer.contact.contact') }}</a></li>
                                        <li><a href="mailto:care@shrisadanand.com "> care@shrisadanand.com  </a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <!-- <div class="col-lg-1 col-md-4 col-sm-6">
                            <div class="footer-widget">
                                <h4 class="footer-widget-title">Contact Us</h4>

                                <div class="footer-widget-menu">
                                    <ul>
                                        <li><a href="my-account.html">My Account</a></li>
                                        <li><a href="#">Terms of Use</a></li>
                                        <li><a href="#">Deliveries & Returns</a></li>
                                        <li><a href="#">Gift card</a></li>
                                        <li><a href="#">Legal Notice</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div> -->

                    </div>
                </div>
            </div>
        </div>
        <!--Footer Section End-->
</template>