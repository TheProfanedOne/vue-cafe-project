import { createRouter, createWebHistory } from 'vue-router';
import NotFoundView from '@/views/NotFoundView.vue';
import RootView from '@/views/RootView.vue';
import LoginView from '@/views/LoginView.vue';
import HomeView from '@/views/HomeView.vue';
import BreakView from '@/views/BreakView.vue';
import LunchView from '@/views/LunchView.vue';
import DinnerView from '@/views/DinnerView.vue';
import { inject } from 'vue';
import { userKey } from '@/composables/keys';


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: "root",
            component: RootView
        },
        {
            path: '/login/:rte?',
            name: 'login',
            component: LoginView,
        },
        {
            path: '/home',
            name: 'home',
            component: HomeView,
            beforeEnter(_to, _from) {
                const user = inject(userKey);
                if (!user?.currUser.value) {
                    return '/login/home';
                }
            },
        },
        {
            path: '/breakfast',
            name: 'breakfast',
            component: BreakView,
            beforeEnter(_to, _from) {
                const user = inject(userKey);
                if (!user?.currUser.value) {
                    return '/login/breakfast';
                }
            },
        },
        {
            path: '/lunch',
            name: 'lunch',
            component: LunchView,
            beforeEnter(_to, _from) {
                const user = inject(userKey);
                if (!user?.currUser.value) {
                    return '/login/lunch';
                }
            },
        },
        {
            path: '/dinner',
            name: 'dinner',
            component: DinnerView,
            beforeEnter(_to, _from) {
                const user = inject(userKey);
                if (!user?.currUser.value) {
                    return '/login/dinner';
                }
            },
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not found',
            component: NotFoundView
        },
    ]
});

export default router;
