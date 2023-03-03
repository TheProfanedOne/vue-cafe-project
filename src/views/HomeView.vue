<script setup lang="ts">
    import HomeAsync from '@/components/async/HomeAsync.vue';
</script>

<template>
    <Suspense>
        <template #default>
            <HomeAsync />
        </template>
        <template #fallback>
            <h1 id="fallback">Loading...</h1>
        </template>
    </Suspense>
</template>
