import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/home/Home.vue'

const Home =  () => import('../views/home/Home');
const Cate = () => import('../views/cate/Cate');
const Shopcar = () => import('../views/shopcar/Shopcar')
const Profile = () => import('../views/profile/Profile')

Vue.use(VueRouter);

const routes = [
  // {
  //   path: "",
  //   redirect: "/home"
  // },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/cate',
    component: Cate
  },
  {
    path: '/shopcar',
    name: 'Shopcar',
    component: Shopcar
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  }
];

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
});

export default router
