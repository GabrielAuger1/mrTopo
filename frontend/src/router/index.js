import { createRouter, createWebHistory } from 'vue-router';
import IndexView from '../views/IndexView.vue';
import AreasView from '../views/AreasView.vue';
import AreaView from '../views/AreaView.vue';
import AreaFormView from '../views/AreaFormView.vue';
import RouteView from '../views/RouteView.vue';
import RouteFormView from '../views/RouteFormView.vue';
import SignUpView from '../views/SignUpView.vue';
import SignInView from '../views/SignInView.vue';
import ProfileView from '../views/ProfileView.vue';

const routes = [
  { path: '/', name: 'Index', component: IndexView },
  { path: '/areas', name: 'Areas', component: AreasView },
  { path: '/areas/:id', name: 'Area', component: AreaView },
  { path: '/areas/new', name: 'NewArea', component: AreaFormView },
  { path: '/areas/:id/edit', name: 'EditArea', component: AreaFormView },
  { path: '/routes/new', name: 'NewRoute', component: RouteFormView },
  { path: '/routes/:id', name: 'Route', component: RouteView },
  { path: '/routes/:id/edit', name: 'EditRoute', component: RouteFormView },
  { path: '/signup', name: 'SignUp', component: SignUpView },
  { path: '/signin', name: 'SignIn', component: SignInView },
  { path: '/profile', name: 'Profile', component: ProfileView },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
