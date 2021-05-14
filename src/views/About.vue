<template>
              <!--Page Banner Start-->
               <!-- :style="{backgroundImage: 'url('+require('@/assets/'+'images/testimonial-bg.jpg')+')'}"  -->
        <div class="page-banner bg-light">
            <div class="container">
                <div class="page-banner-content text-center">
                    <h2 class="title">{{ $t('navigation.about.submenu1') }}</h2>
                    <ol class="breadcrumb justify-content-center">
                        <li class="breadcrumb-item"><router-link :to="`/${$i18n.locale}`">{{ $t('navigation.home') }}</router-link></li>
                        <li class="breadcrumb-item active" aria-current="page">{{ $t('navigation.about.submenu1') }}</li>
                    </ol>
                </div>
            </div>
        </div>
        <!--Page Banner End-->

        <!--About Start-->
        <div class="about-page-area section-padding" style="margin-bottom:5.5rem">
            <div class="container">
                <figure>
                    <div class="about-thumb">
                        <img src="@/assets/images/about/about.jpg" alt="Image">
                    </div>
                    <figcaption class="about-page-content">
                        <!-- <h2 class="title">{{$t('about.aboutpage.title')}}</h2> -->
                        <p>{{$t('about.aboutpage.para1')}}</p>
                        <p>{{$t('about.aboutpage.para2')}}</p>
                        <p>{{$t('about.aboutpage.para3')}}</p>
                        <p>{{$t('about.aboutpage.para4')}}</p>
                        <!-- <div class="about-signature">
                            <img src="@/assets/images/signature.png" alt="">
                        </div> -->
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
