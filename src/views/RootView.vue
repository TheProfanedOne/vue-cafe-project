<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/userStore';

const store = useUserStore();
const router = useRouter();

if (store.notLoggedIn) {
    router.replace({ name: 'login' });
} else {
    router.replace({ name: 'home' });
}
</script>

<template></template>
