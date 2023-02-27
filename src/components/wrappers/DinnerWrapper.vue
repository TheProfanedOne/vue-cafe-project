<script setup lang="ts">
    import DinnerAsync from './async/DinnerAsync.vue';
    import type { MenuItem } from '@/types/item-types';

    const props = defineProps<{ modelValue: MenuItem[] }>();
    const emit = defineEmits<{
        (e: 'update:modelValue', newValue: MenuItem[]): void;
    }>();
</script>

<template>
    <Suspense>
        <template #default>
            <DinnerAsync
                :d_items="props.modelValue"
                @update:d_items="newValue => emit('update:modelValue', newValue)"
            />
        </template>
        <template #fallback>
            <h1 id="fallback">Loading...</h1>
        </template>
    </Suspense>
</template>
