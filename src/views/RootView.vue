<script setup lang="ts">
    import { useRouter } from 'vue-router';
    import { inject } from 'vue';
    import { userKey } from '@/composables/keys';

    const router = useRouter();
    const { currUser } = inject(userKey)!;

    if (currUser.value === '') {
        router.push('/login');
    } else {
        router.push('/home');
    }
</script>

<template></template>
