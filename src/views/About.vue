<template>
              <!--Page Banner Start-->
               <!-- :style="{backgroundImage: 'url('+require('@/assets/'+'images/testimonial-bg.jpg')+')'}"  -->
        <div class="page-banner bg-light">
            <div class="container">
                <div class="page-banner-content text-center">
                    <h2 class="title">About Maharaj</h2>
                    <ol class="breadcrumb justify-content-center">
                        <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
                        <li class="breadcrumb-item active" aria-current="page">About</li>
                    </ol>
                </div>
            </div>
        </div>
        <!--Page Banner End-->

        <!--About Start-->
        <div class="about-page-area section-padding" style="margin-bottom:6.5rem">
            <div class="container">
                <figure>
                    <div class="about-thumb">
                        <img src="@/assets/images/about/about-2.jpg" alt="">
                    </div>
                    <figcaption class="about-page-content text-center">
                        <h2 class="title">We are a digital agency focused on delivering content and utility user-experiences.</h2>
                        <p>Adipiscing lacus ut elementum, nec duis, tempor litora turpis dapibus. Imperdiet cursus odio tortor in elementum. Egestas nunc eleifend feugiat lectus laoreet, vel nunc taciti integer cras. Hac pede dis, praesent nibh ac dui mauris sit. Pellentesque mi, facilisi mauris, elit sociis leo sodales accumsan. Iaculis ac fringilla torquent lorem consectetuer, sociosqu phasellus risus urna aliquam, ornare.</p>
                        <div class="about-signature">
                            <img src="@/assets/images/signature.png" alt="">
                        </div>
                    </figcaption>
                </figure>
            </div>
        </div>
        <!--About End-->
</template>

<script>

export default {
  name: 'About'
}
</script>
