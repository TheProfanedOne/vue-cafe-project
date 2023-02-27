<script setup lang="ts">
    import LunchAsync from './async/LunchAsync.vue';
    import type { MenuItem } from '@/types/item-types';

    const props = defineProps<{
        modelValue: MenuItem[];
    }>();

    const emit = defineEmits<{
        (e: 'update:modelValue', newValue: MenuItem[]): void;
    }>();
</script>

<template>
    <Suspense>
        <template #default>
            <LunchAsync
                :l_items="props.modelValue"
                @update:l_items="newValue => emit('update:modelValue', newValue)"
            />
        </template>
        <template #fallback>
            <h1 id="fallback">Loading...</h1>
        </template>
    </Suspense>
</template>
