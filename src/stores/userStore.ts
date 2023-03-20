import { defineStore } from "pinia";
import { ref, computed } from 'vue';

export const useUserStore = defineStore('user', () => {
    const currUser = ref('');
    const notLoggedIn = computed(() => currUser.value === '');
    return { currUser, notLoggedIn };
});

