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
                                <td v-if="person.row == true" colspan="4" class="table-row-highlight">{{person.location}}</td>
                                <td v-if="person.row == false" class="price">
                                    <span class="amount">{{person.id}}</span>
                                </td>
                                <td v-if="person.row == false" class="price">
                                    <span class="amount">{{person.name}}</span>
                                </td>
                                <td v-if="person.row == false" class="total">
                                    <span class="total-amount">{{person.location}}</span>
                                </td>
                                <td v-if="person.row == false" class="total">
                                    <a class="total-amount" :href="`tel:${person.contact}`" >{{person.contact}}</a>
                                </td>
                            </tr>
                        </tbody>
              </table>
              <p>
                 मुंबई, ठाणे, पालघर, रायगड, पुणे आणि नाशिक जिल्ह्यातील औषधांच्या वितरणासाठी इच्छुक गुंतवणूकदारांनी संपर्क साधावा. 
                  श्री. पुरुषोत्तम पाटील - 9867365535    श्री. प्रकाश पाटील - 9892819975    श्री. सुभाष भाग्यवंत - 88285 94212

              </p>
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
{"location":"भिवंडी",'row':true},
{id:"1", "name":"श्री. शैलेश भोईर ", "location":"गणेशपुरी","contact":"8975447111",row:false },
{id:"2",  "name":"श्री. दयानंद पवार ", "location":"खंबाळा ", "contact":"9552722816",row:false},
{id:"3",  "name":"श्री. राम पाटील ", "location":"अंबाडी", "contact":"9653254034",row:false},
{id:"4",  "name":"डॉ. मोनिका नाईक ", "location":"सोनाला", "contact":"9619000303",row:false},
{id:"5",  "name":"डॉ. सुनंदा पाटील ", "location":"वळगाव", "contact":"8888140352",row:false},
{id:"6",  "name":"श्री. भरत पाटील ", "location":"वडवलि वाशिंद", "contact":"9272806867",row:false},
{"location":"मिरा-भाईंदर",row:true},
{id:"7",  "name":"श्री. गुरुनाथ भोईर ", "location":"मुर्धा ", "contact":"9820671826",row:false},
{id:"8",  "name":"श्री. पवन घरत ", "location":"गोडदेव", "contact":"9967604970",row:false},
{id:"9",  "name":"श्री. जयकिसन पाटील ", "location":"राई", "contact":"9224716709",row:false},
{id:"10", "name":"डॉ. नंदकुमार पाटील ", "location":"मोर्वा", "contact":"9920311258",row:false},
{id:"11", "name":"श्री. सुधिर पाटील ", "location":"राई", "contact":"8652045918",row:false},
{"location":"वसई, विरार, पालघर ",row:true},
{id:"12", "name":"श्री. दयानंद म्हात्रे ", "location":"जूचंद्र ", "contact":"9273116172",row:false},
{id:"13", "name":"सौ. साधना पाटील ", "location":"जूचंद्र ", "contact":"9529912911",row:false},
{id:"14", "name":"श्री. तुषार सोनार 	", "location":"एव्हरशाईन", "contact":"8087521458",row:false},
{id:"15", "name":"श्री. अरूण शर्मा ", "location":"वसई पश्चिम", "contact":"9930331515",row:false},
{id:"16", "name":"श्री. केतन शाहा ", "location":"नालासोपारा", "contact":"9820735569",row:false},
{id:"17", "name":"श्री. अजित मेहेर", "location":"आगाशी ", "contact":"8796403719",row:false},
{id:"18", "name":"श्री. हरिदास संगमेश्वर ", "location":"डोंगरपाडा", "contact":"7507691783",row:false},
{id:"19", "name":"श्री. नामदेव पाटील ", "location":"नाडा, वाडा ", "contact":"9145472724",row:false},
{id:"20", "name":"श्री. बाबूराव गावड ", "location":"केळवे-सफाळे ", "contact":"9518995743",row:false},
{id:"21", "name":"सौ. संध्या घरत ", "location":"घरतपाडा, मनोर", "contact":"8412027755",row:false},
{"location":"कल्याण-डोंबिवली, बदलापूर, ठाणे ",row:true},
{id:"22", "name":"श्री. यतीन पाठारे ", "location":"कल्याण", "contact":"9870314814",row:false },
{id:"23", "name":"श्री. सुभाष भाग्यवंत ", "location":"हाजिमलंग", "contact":"8828594212",row:false },
{id:"24", "name":"श्री. रतन पाटील ", "location":"डोंबिवली", "contact":"9867145030",row:false },
{id:"25", "name":"श्री. श्री. दिपक वारघडे ", "location":"बदलापूर", "contact":"9764244280",row:false },
{id:"26", "name":"सौ. कल्पना भोईर ", "location":"कासारवडवली", "contact":"7400326847",row:false },
{id:"27", "name":"श्री. मुकेश पाटील ", "location":"दिवा स्टेशन ", "contact":"8655667773",row:false }
],
      marathiPersons : [
{"location":"भिवंडी",'row':true},
{id:"१", "name":"श्री. शैलेश भोईर ", "location":"गणेशपुरी","contact":"8975447111",row:false },
{id:"२",  "name":"श्री. दयानंद पवार ", "location":"खंबाळा ", "contact":"9552722816",row:false},
{id:"३",  "name":" श्री. राम पाटील ", "location":"अंबाडी", "contact":"9653254034",row:false},
{id:"४",  "name":"डॉ. मोनिका नाईक ", "location":"सोनाला", "contact":"9619000303",row:false},
{id:"५",  "name":"डॉ. सुनंदा पाटील ", "location":"वळगाव", "contact":"8888140352",row:false},
{id:"६",  "name":"श्री. भरत पाटील ", "location":"वडवलि वाशिंद", "contact":"9272806867",row:false},
{"location":"मिरा-भाईंदर",row:true},
{id:"७",  "name":"श्री. गुरुनाथ भोईर ", "location":"मुर्धा ", "contact":"9820671826",row:false},
{id:"८",  "name":"श्री. पवन घरत ", "location":"गोडदेव", "contact":"9967604970",row:false},
{id:"९",  "name":"श्री. जयकिसन पाटील ", "location":"राई", "contact":"9224716709",row:false},
{id:"१०", "name":"डॉ. नंदकुमार पाटील ", "location":"मोर्वा", "contact":"9920311258",row:false},
{id:"११", "name":"श्री. सुधिर पाटील ", "location":"राई", "contact":"8652045918",row:false},
{"location":"वसई, विरार, पालघर ",row:true},
{id:"१२", "name":"श्री. दयानंद म्हात्रे ", "location":"जूचंद्र ", "contact":"9273116172",row:false},
{id:"१३", "name":"सौ. साधना पाटील ", "location":"जूचंद्र ", "contact":"9529912911",row:false},
{id:"१४", "name":"श्री. तुषार सोनार 	", "location":"एव्हरशाईन", "contact":"8087521458",row:false},
{id:"१५", "name":"श्री. अरूण शर्मा ", "location":"वसई पश्चिम", "contact":"9930331515",row:false},
{id:"१६", "name":"श्री. केतन शाहा ", "location":"नालासोपारा", "contact":"9820735569",row:false},
{id:"१७", "name":"श्री. अजित मेहेर", "location":"आगाशी ", "contact":"8796403719",row:false},
{id:"१८", "name":"श्री. हरिदास संगमेश्वर ", "location":"डोंगरपाडा", "contact":"7507691783",row:false},
{id:"१९", "name":"श्री. नामदेव पाटील ", "location":"नाडा, वाडा ", "contact":"9145472724",row:false},
{id:"२०", "name":"श्री. बाबूराव गावड ", "location":"केळवे-सफाळे ", "contact":"9518995743",row:false},
{id:"२१", "name":"सौ. संध्या घरत ", "location":"घरतपाडा, मनोर", "contact":"8412027755",row:false},
{"location":"कल्याण-डोंबिवली, बदलापूर, ठाणे ",row:true},
{id:"२२", "name":"श्री. यतीन पाठारे ", "location":"कल्याण", "contact":"9870314814",row:false },
{id:"२३", "name":"श्री. सुभाष भाग्यवंत ", "location":"हाजिमलंग", "contact":"8828594212",row:false },
{id:"२४", "name":"श्री. रतन पाटील ", "location":"डोंबिवली", "contact":"9867145030",row:false },
{id:"२५", "name":"श्री. श्री. दिपक वारघडे ", "location":"बदलापूर", "contact":"9764244280",row:false },
{id:"२६", "name":"सौ. कल्पना भोईर ", "location":"कासारवडवली", "contact":"7400326847",row:false },
{id:"२७", "name":"श्री. मुकेश पाटील ", "location":"दिवा स्टेशन ", "contact":"8655667773",row:false }
],
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
.table-row-highlight {
  background: #93af76;
  padding:7px;
  color:white;
  font-size:20px;
}
</style>