import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Product from '../views/Product.vue'
import ProductCombo from '../views/ProductCombo.vue'
import AboutAyurveda from '../views/AboutAyurveda.vue'
import CollectionDepot from '../views/CollectionDepot.vue'
import AboutAashram from '../views/AboutAashram.vue'
import About from '../views/About.vue'
import ContactUs from '../views/ContactUs.vue'
import GurjoKadhaProduct from '../views/GurjoKadhaProduct'
import i18n from '../i18n'

const routes = [
{
    path: '/',
    redirect: `/en`
},  
{
  path:'/:lang',
  component:{
    template: `<router-view></router-view>`
  },
  children:[
    {
      path: '',
      name: 'Home',
      component: Home
    },
    {
      path: 'products',
      name: 'Product',
      component: Product
    },
    {
      path: 'products/combo',
      name: 'ProductCombo',
      component: ProductCombo
    },
    {
      path: 'ayurveda',
      name: 'AboutAyurveda',
      component: AboutAyurveda
    },
    {
      path: 'collectiondepot',
      name: 'CollectionDepot',
      component: CollectionDepot
    },
    {
      path: 'aboutmaharaj',
      name: 'About',
      component: About
    },
    {
      path: 'aboutaashram',
      name: 'AboutAashram',
      component: AboutAashram
    },
    {
      path: 'contactus',
      name: 'ContactUs',
      component: ContactUs
    },
    {
      path: 'gurjokadha',
      name: 'GurjoKadhaProduct',
      component: GurjoKadhaProduct
    }
  ]
}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// use beforeEach route guard to set the language
router.beforeEach((to, from, next) => {

  // use the language from the routing param or default language
  let language = to.params.lang;
  if (!language) {
    language = 'en'
  }

  // set the current language for i18n.
  i18n.locale = language
  next()
})

export default router
