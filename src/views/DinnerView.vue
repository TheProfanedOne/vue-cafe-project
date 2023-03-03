<script setup lang="ts">
    import DinnerAsync from '@/components/async/DinnerAsync.vue';
</script>

<template>
    <Suspense>
        <template #default>
            <DinnerAsync />
        </template>
        <template #fallback>
            <h1 id="fallback">Loading...</h1>
        </template>
    </Suspense>
</template>
