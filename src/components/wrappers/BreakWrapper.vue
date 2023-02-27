<script setup lang="ts">
    import BreakAsync from './async/BreakAsync.vue';
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
            <BreakAsync
                :b_items="props.modelValue"
                @update:b_items="newValue => emit('update:modelValue', newValue)"
            />
        </template>
        <template #fallback>
            <h1 id="fallback">Loading...</h1>
        </template>
    </Suspense>
</template>
