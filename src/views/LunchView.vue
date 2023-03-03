<script setup lang="ts">
    import LunchAsync from '@/components/async/LunchAsync.vue';
</script>

<template>
    <Suspense>
        <template #default>
            <LunchAsync />
        </template>
        <template #fallback>
            <h1 id="fallback">Loading...</h1>
        </template>
    </Suspense>
</template>
