import { createRouter, createWebHistory } from 'vue-router';
import NotFoundView from '@/views/NotFoundView.vue';
import RootView from '@/views/RootView.vue';
import LoginView from '@/views/LoginView.vue';
import HomeView from '@/views/HomeView.vue';
import BreakView from '@/views/BreakView.vue';
import LunchView from '@/views/LunchView.vue';
import DinnerView from '@/views/DinnerView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'root',
            component: RootView,
        },
        {
            path: '/login',
            name: 'login',
            component: LoginView,
            props: route => ({ from: route.query.from ?? '' })
        },
        {
            path: '/home',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/breakfast',
            name: 'breakfast',
            component: BreakView,
        },
        {
            path: '/lunch',
            name: 'lunch',
            component: LunchView,
        },
        {
            path: '/dinner',
            name: 'dinner',
            component: DinnerView,
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not found',
            component: NotFoundView,
        },
    ],
});

export default router;
