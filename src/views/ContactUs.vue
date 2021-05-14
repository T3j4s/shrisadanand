<template>
        <!--Page Banner Start-->
        <div class="page-banner bg-light">
            <div class="container">
                <div class="page-banner-content text-center">
                    <h2 class="title">{{ $t('navigation.contact') }}</h2>
                    <ol class="breadcrumb justify-content-center">
                        <li class="breadcrumb-item"><router-link :to="`/${$i18n.locale}`">{{ $t('navigation.home') }}</router-link></li>
                        <li class="breadcrumb-item active" aria-current="page">{{ $t('navigation.contact') }}</li>
                    </ol>
                </div>
            </div>
        </div>
        <!--Page Banner End-->

        <!--Contact Map Start-->
        <div class="contact-map">
            <div id="contact-map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3761.019580159162!2d73.01322871490773!3d19.497793386847345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7a0bda1de6fe3%3A0x96006abb861ea2fb!2sSadguru%20Dham!5e0!3m2!1sen!2sin!4v1620922088026!5m2!1sen!2sin" width="100%" height="500" allowfullscreen="true" loading="lazy"></iframe>
            </div>
        </div>
        <!--Contact Map End-->

        <!--Contact Start-->
        <div class="contact-page section-padding-5">
            <div class="container">
                <div class="contact-info">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <div class="section-title text-center">
                                <h2 class="title">{{$t('contactpage.title')}}</h2>
                                <!-- <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.</p> -->
                            </div>
                        </div>
                    </div>

                    <div class="contact-info-content">
                        <div class="row">
                            <div class="col-sm-4">
                                <div class="single-contact-info text-center">
                                    <i class="fa fa-fax"></i>
                                    <h4 class="title"> {{$t('footer.address.name')}} </h4>
                                    <p>{{$t('footer.address.line1')}}<br> {{$t('footer.address.line2')}}<br> {{$t('footer.address.line3')}}<br> {{$t('footer.address.line4')}}</p>
                                </div>
                            </div>
                            <div class="col-sm-4">
                                <div class="single-contact-info text-center">
                                    <i class="fa fa-phone"></i>
                                    <h4 class="title"> {{$t('footer.contact.name')}} </h4>
                                    <p><a href="tel:8828594212">{{$t('footer.contact.contact')}}  </a></p>
                                    <!-- <p><a href="tel:7162981822">+88 716-298-1822 </a></p> -->
                                </div>
                            </div>
                            <div class="col-sm-4">
                                <div class="single-contact-info text-center">
                                    <i class="fa fa-envelope"></i>
                                    <h4 class="title"> {{$t('footer.email')}} </h4>
                                    <p><a href="mailto:care@shrisadanand.com "> care@shrisadanand.com  </a></p>
                                    <!-- <p><a href="mailto:info@kngu.com"> info@kngu.com </a></p> -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="contact-form">
                    <form id="contact-form" action="javascript:void(0);">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="single-form">
                                    <input type="text" name="name" placeholder="Name" >
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="single-form">
                                    <input type="email" name="email" placeholder="Email">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="single-form">
                                    <input type="text" name="subject" placeholder="Subject">
                                </div>
                            </div>
                             <div class="col-md-6">
                                <div class="single-form">
                                    <input type="number" name="contact" placeholder="Mobile No">
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="single-form">
                                    <textarea name="message" placeholder="Message"></textarea>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <p class="formMessage"></p>
                            </div>
                            <div class="col-md-12">
                                <div class="single-form text-center">
                                    <input type='submit' class="btn btn-dark" :value="$t('contactpage.sendMessage')" />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <!--Contact End-->

</template>

  <script>
  export default {
  name: 'ContactUs',
  mounted() {
                    (function() {
            // https://dashboard.emailjs.com/admin/integration
            emailjs.init('user_Za6F7Tm0w6QLXWOWNIGq5');
        })();
                $('.formMessage').text('')
                $('.formMessage').hide();
                document.getElementById('contact-form').addEventListener('submit', function(event) {
                event.preventDefault();
                // generate a five digit number for the contact_number variable
                //this.contact_number.value = Math.random() * 100000 | 0;
                // these IDs from the previous steps
                if(this.email.value.length > 0 && this.contact.value.length > 0 && this.name.value.length > 0 && this.subject.value.length > 0 && this.message.value.length > 0) {
                    let email=false;
                    let contact=false;
                    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(this.email.value)) {
                        email = true;
                     }
                     else {
                     $('.formMessage').hide();
                     $('.formMessage').text('Please provide a valid Email').fadeIn('slow');
                     $('.formMessage').show();  
                     return false
                     }

                    if(this.contact.value.length != 10) {
                     $('.formMessage').hide();
                     $('.formMessage').text('Please provide a valid Mobile Number (10 digit only)').fadeIn('slow');
                     $('.formMessage').show();
                     return false
                    }
                    else {
                        contact = true;
                    }

                    if(email && contact) {
                     $('.formMessage').text('').fadeOut('slow') 
                     $('.formMessage').hide();

                        emailjs.sendForm('service_fk2xtld', 'template_pbdrbhf', this)
                            .then(function() {
                                $('.formMessage').text('Message Sent');
                                $('.formMessage').show().fadeIn('slow');
                                this.name.value='';
                                this.email.value='';
                                this.subject.value='';
                                this.contact.value='';
                                this.message.value='';
                                setTimeout(()=>{
                                $('.formMessage').fadeOut('slow');
                                $('.formMessage').hide();
                                },5000);
                            }, function(error) {
                                $('.formMessage').text('Error - Contact Server Admin').fadeIn('slow');
                                $('.formMessage').show();
                            });
                    }
                    else {
                        return false
                    }
                }
                else {
                     $('.formMessage').hide();
                     $('.formMessage').text('All field are Mandatory').fadeIn('slow');
                     $('.formMessage').show();
                     return false
                }
            });
  }
}

 </script>

 <style scoped>
    .formMessage {
        color:white;
        background-color:black;
        padding:10px 20px;
    }
 </style>