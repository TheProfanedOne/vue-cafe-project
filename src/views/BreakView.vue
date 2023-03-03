<script setup lang="ts">
    import BreakAsync from '@/components/async/BreakAsync.vue';
</script>

<template>
    <Suspense>
        <template #default>
            <BreakAsync />
        </template>
        <template #fallback>
            <h1 id="fallback">Loading...</h1>
        </template>
    </Suspense>
</template>
