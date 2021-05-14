<template>
                <!--Page Banner Start-->
        <div class="page-banner" style="background-image: url(assets/images/testimonial-bg.jpg);">
            <div class="container">
                <div class="page-banner-content text-center">
                    <h2 class="title">{{ $t('navigation.collectiondepot') }}</h2>
                    <ol class="breadcrumb justify-content-center">
                        <li class="breadcrumb-item"><router-link :to="`/${$i18n.locale}`">{{ $t('navigation.home') }}</router-link></li>
                        <li class="breadcrumb-item active" aria-current="page">{{ $t('navigation.collectiondepot') }}</li>
                    </ol>
                </div>
            </div>
        </div>
        <!--Page Banner End-->
        <!--Wishlist Start-->
          <div class="table-responsive text-center mx-3">
            <table class="table table-sm table-bordered table-hover">
              <thead style="background-color:#68923e;color:white;">
                  <tr>
                    <th class="image">Sr.No</th>
                    <th class="product">Name</th>
                    <th class="price">Location</th>
                    <th class="quantity">Contact</th>
                  </tr>
              </thead>
                        <tbody>
                            <tr v-for="person in data" :key="person.id">
                                <td class="price">
                                    <span class="amount">{{person.id}}</span>
                                </td>
                                <td class="price">
                                    <span class="amount">{{person.name}}</span>
                                </td>
                                <td class="total">
                                    <span class="total-amount">{{person.location}}</span>
                                </td>
                                <td class="total">
                                    <a class="total-amount" :href="`tel:${person.contact}`" >{{person.contact}}</a>
                                </td>
                            </tr>
                        </tbody>
              </table>
          </div>
        <!--Wishlist End-->
</template>

<script>

export default {
  name: 'Collection Depot',
  data() {
    return {
      data:[],
englishPersons : [
{id:"1", "name":"सौ. कल्पना भोईर", "location":"कासार वडवली ठाणे","contact":"7400326847" },
{id:"2",  "name":"श्री. अजित मेहेर", "location":"आगाशी विरार", "contact":"8796403719" },
{id:"3",  "name":"श्री. बाबूराव गावड", "location":"केळवा रोड सफाळा", "contact":"9518995743"},
{id:"4",  "name":"श्री. दयानंद म्हाञे", "location":"जूचंद्र वसई", "contact":"9273116172" },
{id:"5",  "name":"श्री. यतीन पाठारे", "location":"कल्याण", "contact":"9870314814" },
{id:"6",  "name":"श्री. भरत पाटील", "location":"वडवलि वाशिंद", "contact":"9272806867" },
{id:"7",  "name":"श्री. अरूण शर्मा", "location":"वसई स्टेशन प", "contact":"9930331515" },
{id:"8",  "name":"श्री. रतन पाटील", "location":"डोंबिवली", "contact":"9867145030" },
{id:"9",  "name":"श्री. सुभाष भाग्यवंत", "location":"हाजिमलंग", "contact":"8828594212" },
{id:"10", "name":"श्री. गुरुनाथ भोईर", "location":"मुर्धा भाईदंर", "contact":"9820671826" },
{id:"11", "name":"श्री. पवन घरत", "location":"गोडदेव भाईदंर", "contact":"9930536663" },
{id:"12", "name":"श्री. नामदेव पाटिल", "location":"नाडा-वाडा", "contact":"9145472724" },
{id:"12", "name":"श्री. शैलेश भोईर", "location":"गणेशपुरी", "contact":"8975447111" },
{id:"14", "name":"श्री. हरिदास संगमेश्वर", "location":"डोंगरपाडा विरार", "contact":"7507691783" },
{id:"15", "name":"श्री. केतन शाहा", "location":"नाळासोपारा", "contact":"9820735569" },
{id:"16", "name":"श्री. तुषार सोनार", "location":"इवरशांईन वसई", "contact":"8087521458" },
{id:"17", "name":"श्री. दयानंद पवार", "location":"अंबाडी खंबाळा", "contact":"9552722816" },
{id:"18", "name":"श्री. दिपक वारघडे", "location":"बदलापूर", "contact":"9764244280" },
{id:"19", "name":"श्री. राम पाटील", "location":"भिवंडी-अंबाडी", "contact":"9653254034" },
{id:"20", "name":"श्री. मुकेश पाटील", "location":"दिवा स्टेशन", "contact":"8655667773" },
{id:"21", "name":"श्री. साधना पाटील", "location":"जूचंद्र वसई", "contact":"9529912911" },
{id:"22", "name":"डाॅ. मोनिका नाईक", "location":"सोनाला भिवंडी", "contact":"9619000303" },
{id:"23", "name":"श्री. जयकिसन पाटील", "location":"राई भाईदंर", "contact":"9224716709" },
{id:"24", "name":"डाॅ. नंदकुमार पाटील", "location":"मोर्वा भाईदंर", "contact":"9920311258" },
{id:"25", "name":"श्री. सुधिर पाटील", "location":"राई भाईदंर", "contact":"8652045918" },
{id:"26", "name":"सौ. संध्या घरत", "location":"घरतपाडा मनोर", "contact":"8412027755" },
{id:"27", "name":"डाॅ. सुनंदा पाटील", "location":"वळ भिवंडी", "contact":"8888140352" }
],
      marathiPersons : [
{id:"१", "name":"सौ. कल्पना भोईर", "location":"कासार वडवली ठाणे","contact":"7400326847" },
{id:"२",  "name":"श्री. अजित मेहेर", "location":"आगाशी विरार", "contact":"8796403719" },
{id:"३",  "name":"श्री. बाबूराव गावड", "location":"केळवा रोड सफाळा", "contact":"9518995743"},
{id:"४",  "name":"श्री. दयानंद म्हाञे", "location":"जूचंद्र वसई", "contact":"9273116172" },
{id:"५",  "name":"श्री. यतीन पाठारे", "location":"कल्याण", "contact":"9870314814" },
{id:"६",  "name":"श्री. भरत पाटील", "location":"वडवलि वाशिंद", "contact":"9272806867" },
{id:"७",  "name":"श्री. अरूण शर्मा", "location":"वसई स्टेशन प", "contact":"9930331515" },
{id:"८",  "name":"श्री. रतन पाटील", "location":"डोंबिवली", "contact":"9867145030" },
{id:"९",  "name":"श्री. सुभाष भाग्यवंत", "location":"हाजिमलंग", "contact":"8828594212" },
{id:"१०", "name":"श्री. गुरुनाथ भोईर", "location":"मुर्धा भाईदंर", "contact":"9820671826" },
{id:"११", "name":"श्री. पवन घरत", "location":"गोडदेव भाईदंर", "contact":"9930536663" },
{id:"१२", "name":"श्री. नामदेव पाटिल", "location":"नाडा-वाडा", "contact":"9145472724" },
{id:"१३", "name":"श्री. शैलेश भोईर", "location":"गणेशपुरी", "contact":"8975447111" },
{id:"१४", "name":"श्री. हरिदास संगमेश्वर", "location":"डोंगरपाडा विरार", "contact":"7507691783" },
{id:"१५", "name":"श्री. केतन शाहा", "location":"नाळासोपारा", "contact":"9820735569" },
{id:"१६", "name":"श्री. तुषार सोनार", "location":"इवरशांईन वसई", "contact":"8087521458" },
{id:"१७", "name":"श्री. दयानंद पवार", "location":"अंबाडी खंबाळा", "contact":"9552722816" },
{id:"१८", "name":"श्री. दिपक वारघडे", "location":"बदलापूर", "contact":"9764244280" },
{id:"१९", "name":"श्री. राम पाटील", "location":"भिवंडी-अंबाडी", "contact":"9653254034" },
{id:"२०", "name":"श्री. मुकेश पाटील", "location":"दिवा स्टेशन", "contact":"८६५५६६७७७३" },
{id:"२१", "name":"श्री. साधना पाटील", "location":"जूचंद्र वसई", "contact":"8655667773" },
{id:"२२", "name":"डाॅ. मोनिका नाईक", "location":"सोनाला भिवंडी", "contact":"9619000303" },
{id:"२३", "name":"श्री. जयकिसन पाटील", "location":"राई भाईदंर", "contact":"9224716709" },
{id:"२४", "name":"डाॅ. नंदकुमार पाटील", "location":"मोर्वा भाईदंर", "contact":"9920311258" },
{id:"२५", "name":"श्री. सुधिर पाटील", "location":"राई भाईदंर", "contact":"8652045918" },
{id:"२६", "name":"सौ. संध्या घरत", "location":"घरतपाडा मनोर", "contact":"8412027755" },
{id:"२७", "name":"डाॅ. सुनंदा पाटील", "location":"वळ भिवंडी", "contact":"8888140352" }
]
    }
  },
  created() {
    if(this.$route.params.lang == 'en') {
      this.data = this.englishPersons;
    }
    else {
      this.data= this.marathiPersons;
    } 
  },
  updated() {
    if(this.$route.params.lang == 'en') {
      this.data = this.englishPersons;
    }
    else {
      this.data= this.marathiPersons;
    }
  }
}
</script>

<style scoped>
.table-bordered {
  border:1px solid #68923e;
}
</style>