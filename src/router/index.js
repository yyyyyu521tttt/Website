import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import ('@/components/home/home')
const NewsCenter = () => import ('@/components/news-center/news-center')
const NewsCenterDetails = () => import ('@/components/news-center-details/news-center-details')
const Recruitment = () => import ('@/components/recruitment/recruitment')
const RecruitmentDetails = () => import ('@/components/recruitment-details/recruitment-details')
const Introduce = () => import ('@/components/introduce/introduce')
const ManagementTeam = () => import ('@/components/management-team/management-team')
const DevelopmentCatalogue = () => import ('@/components/development-catalogue/development-catalogue')
const QualificationHonor = () => import ('@/components/qualification-Honor/qualification-Honor')
const ContactUs = () => import ('@/components/contact-us/contact-us')
const SuccessCase = () => import ('@/components/success-case/success-case')
const Product = () => import ('@/components/product/product')
const ProductDetails = () => import ('@/components/product-details/product-details')
const Culture = () => import ('@/components/Culture/Culture')

Vue.use(Router)

export default new Router({
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      const position = {}
      if (to.hash) {
        position.selector = to.hash
      }
      if (to.matched.some(m => m.meta.scrollToTop)) {
        position.x = 0
        position.y = 0
      }
      return position
    }
  },
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/newsCenter',
      component: NewsCenter,
      children: [
        {
          path: ':id',
          component: NewsCenterDetails,
        }
      ]
    },
    {
      path: '/recruitment',
      component: Recruitment,
      children: [
        {
          path: ':id',
          component: RecruitmentDetails
        }
      ]
    },
    {
      path: '/introduce',
      component: Introduce
    },
    {
      path: '/managementTeam',
      component: ManagementTeam
    },
    {
      path: '/developmentCatalogue',
      component: DevelopmentCatalogue
    },
    {
      path: '/qualificationHonor',
      component: QualificationHonor
    },
    {
      path: '/contactUs',
      component: ContactUs
    },
    {
      path: '/successCase',
      component: SuccessCase
    },
    {
      path: '/product',
      component: Product,
      children: [
        {
          path: ':id',
          component: ProductDetails
        }
      ]
    },
    {
      path: '/culture',
      component: Culture
    }
  ]
})