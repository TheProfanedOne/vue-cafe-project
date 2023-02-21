<script setup lang="ts">
    import HomeAsync from './async/HomeAsync.vue';
    import type { SpecialBundle } from '@/stores/item-types';

    const props = defineProps<{
        spec: SpecialBundle;
    }>();

    const emit = defineEmits<{
        (e: 'update:spec', newValue: SpecialBundle): void;
    }>();
</script>

<template>
    <Suspense>
        <template #default>
            <HomeAsync
                :spec="props.spec"
                @update:spec="newValue => emit('update:spec', newValue)"
            />
        </template>
        <template #fallback>
            <h1 id="fallback">Loading...</h1>
        </template>
    </Suspense>
</template>
