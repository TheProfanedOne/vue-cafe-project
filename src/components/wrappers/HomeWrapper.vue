<script setup lang="ts">
    import HomeAsync from './async/HomeAsync.vue';
    import type { SpecialBundle } from '@/types/item-types';

    const props = defineProps<{ modelValue: SpecialBundle }>();
    const emit = defineEmits<{
        (e: 'update:modelValue', newValue: SpecialBundle): void;
    }>();
</script>

<template>
    <Suspense>
        <template #default>
            <HomeAsync
                :spec="props.modelValue"
                @update:spec="newValue => emit('update:modelValue', newValue)"
            />
        </template>
        <template #fallback>
            <h1 id="fallback">Loading...</h1>
        </template>
    </Suspense>
</template>
