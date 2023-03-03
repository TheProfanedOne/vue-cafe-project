import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'root',
            component: () => import('@/views/RootView.vue'),
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('@/views/LoginView.vue'),
        },
        {
            path: '/home',
            name: 'home',
            component: () => import('@/views/HomeView.vue'),
        },
        {
            path: '/breakfast',
            name: 'breakfast',
            component: () => import('@/views/BreakView.vue'),
        },
        {
            path: '/lunch',
            name: 'lunch',
            component: () => import('@/views/LunchView.vue'),
        },
        {
            path: '/dinner',
            name: 'dinner',
            component: () => import('@/views/DinnerView.vue'),
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not found',
            component: () => import('@/views/NotFoundView.vue'),
        },
    ],
});

export default router;
