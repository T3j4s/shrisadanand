<template>
                <!--Page Banner Start-->
        <div class="page-banner" style="background-image: url(assets/images/testimonial-bg.jpg);">
            <div class="container">
                <div class="page-banner-content text-center">
                    <h2 class="title">Collection Depot</h2>
                    <ol class="breadcrumb justify-content-center">
                        <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
                        <li class="breadcrumb-item active" aria-current="page">collection Depot</li>
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
                            <tr v-for="person in persons" :key="person.id">
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
                                    <a class="total-amount">{{person.contact}}</a>
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
      persons : [
{"id":"१", "name":"सौ. कल्पना भोईर", "location":"कासार वडवली ठाणे","contact":"७४००३२६८४७" },
{id:"२",  "name":"श्री. अजित मेहेर", "location":"आगाशी विरार", "contact":"८७९६४०३७१९" },
{id:"३",  "name":"श्री. बाबूराव गावड", "location":"केळवा रोड सफाळा", "contact":"९५१८९९५७४३"},
{id:"४",  "name":"श्री. दयानंद म्हाञे", "location":"जूचंद्र वसई", "contact":"९२७३११६१७२" },
{id:"५",  "name":"श्री. यतीन पाठारे", "location":"कल्याण", "contact":"९८७०३१४८१४" },
{id:"६",  "name":"श्री. भरत पाटील", "location":"वडवलि वाशिंद", "contact":"९२७२८०६८६७" },
{id:"७",  "name":"श्री. अरूण शर्मा", "location":"वसई स्टेशन प", "contact":"९९३०३३१५१५" },
{id:"८",  "name":"श्री. रतन पाटील", "location":"डोंबिवली", "contact":"९८६७१४५०३०" },
{id:"९",  "name":"श्री. सुभाष भाग्यवंत", "location":"हाजिमलंग", "contact":"८८२८५९४२१२" },
{id:"१०", "name":"श्री. गुरुनाथ भोईर", "location":"मुर्धा भाईदंर", "contact":"९८२०६७१८२६" },
{id:"११", "name":"श्री. पवन घरत", "location":"गोडदेव भाईदंर", "contact":"९९३०५३६६६३" },
{id:"१२", "name":"श्री. नामदेव पाटिल", "location":"नाडा-वाडा", "contact":"९१४५४७२७२४" },
{id:"१३", "name":"श्री. शैलेश भोईर", "location":"गणेशपुरी", "contact":"८९७५४४७१११" },
{id:"१४", "name":"श्री. हरिदास संगमेश्वर", "location":"डोंगरपाडा विरार", "contact":"७५०७६९१७८३" },
{id:"१५", "name":"श्री. केतन शाहा", "location":"नाळासोपारा", "contact":"९८२०७३५५६९" },
{id:"१६", "name":"श्री. तुषार सोनार", "location":"इवरशांईन वसई", "contact":"८०८७५२१४५८" },
{id:"१७", "name":"श्री. दयानंद पवार", "location":"अंबाडी खंबाळा", "contact":"९५५२७२२८१६" },
{id:"१८", "name":"श्री. दिपक वारघडे", "location":"बदलापूर", "contact":"९७६४२४४२८०" },
{id:"१९", "name":"श्री. राम पाटील", "location":"भिवंडी-अंबाडी", "contact":"९६५३२५४०३४" },
{id:"२०", "name":"श्री. मुकेश पाटील", "location":"दिवा स्टेशन", "contact":"८६५५६६७७७३" },
{id:"२१", "name":"श्री. साधना पाटील", "location":"जूचंद्र वसई", "contact":"९५२९९१२९११" },
{id:"२२", "name":"डाॅ. मोनिका नाईक", "location":"सोनाला भिवंडी", "contact":"९६१९०००३०३" },
{id:"२३", "name":"श्री. जयकिसन पाटील", "location":"राई भाईदंर", "contact":"९२२४७१६७०९" },
{id:"२४", "name":"डाॅ. नंदकुमार पाटील", "location":"मोर्वा भाईदंर", "contact":"९९२०३११२५८" },
{id:"२५", "name":"श्री. सुधिर पाटील", "location":"राई भाईदंर", "contact":"८६५२०४५९१८" },
{id:"२६", "name":"सौ. संध्या घरत", "location":"घरतपाडा मनोर", "contact":"८४१२०२७७५५" },
{id:"२७", "name":"डाॅ. सुनंदा पाटील", "location":"वळ भिवंडी", "contact":"८८८८१४०३५२" }
]
    }
  }
}
</script>

<style scoped>
.table-bordered {
  border:1px solid #68923e;
}
</style>