import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Product from '../views/Product.vue'
import ProductCombo from '../views/ProductCombo.vue'
import AboutAyurveda from '../views/AboutAyurveda.vue'
import CollectionDepot from '../views/CollectionDepot.vue'
import AboutAashram from '../views/AboutAashram.vue'
import About from '../views/About.vue'
import ContactUs from '../views/ContactUs.vue'
import AbhayTablet from '../views/AbhayTabletProduct'
import GurjoKadha from '../views/GurjoKadhaProduct'
import HaridraTablet from '../views/HaridraTabletProduct'
import NityanandDantManjan from '../views/NityanandDantManjanProduct'
import SadanandPChurna from '../views/SadanandPChurnaProduct'
import ShriGovindOil from '../views/ShriGovindOilProduct'
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
      path: 'abhayTablet',
      name: 'abhayTablet',
      component: AbhayTablet
    },
    {
      path: 'gurjoKadha',
      name: 'gurjoKadha',
      component: GurjoKadha
    },
    {
      path: 'haridraTablet',
      name: 'haridraTablet',
      component: HaridraTablet
    },
    {
      path: 'nityanandDantManjan',
      name: 'nityanandDantManjan',
      component: NityanandDantManjan
    },
    {
      path: 'sadanandPChurna',
      name: 'sadanandPChurna',
      component: SadanandPChurna
    },
    {
      path: 'shriGovindOil',
      name: 'shriGovindOil',
      component: ShriGovindOil
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
  window.scrollTo(0, 0);
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
