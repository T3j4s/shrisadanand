<template>
    
        <!--Top Notification Start-->
        <div class="top-notification-bar text-center">
            <div class="container">
                <div class="notification-entry">
                    <p>{{ $t('upperheader.text1') }}</p>
                </div>
            </div>
            <!-- <div class="notification-close">
                <button class="notification-close-btn" @click="close()"><i class="fa fa-times"></i></button>
            </div> -->
        </div>
        <!--Top Notification End-->
</template>

<script>
export default {
    name:"UpperHeader",
    methods: {
        close() {
           $('.top-notification-bar').hide(); 
        }
    }
}
</script>