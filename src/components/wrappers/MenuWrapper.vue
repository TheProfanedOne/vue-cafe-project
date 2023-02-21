<script setup lang="ts">
    import BreakAsync from './async/BreakAsync.vue';
    import LunchAsync from './async/LunchAsync.vue';
    import DinnerAsync from './async/DinnerAsync.vue';
    import type { MenuItem } from '@/stores/item-types';

    const props = defineProps<{
        currMenu: string;
        b_items: MenuItem[];
        l_items: MenuItem[];
        d_items: MenuItem[];
    }>();

    const emit = defineEmits<{
        (e: 'update:b_items', newValue: MenuItem[]): void;
        (e: 'update:l_items', newValue: MenuItem[]): void;
        (e: 'update:d_items', newValue: MenuItem[]): void;
    }>();
</script>

<template>
    <Suspense>
        <template #default>
            <BreakAsync v-if="props.currMenu === 'Breakfast'"
                :currMenu="props.currMenu"
                :b_items="props.b_items"
                @update:b_items="newValue => emit('update:b_items', newValue)"
            />
            <LunchAsync v-else-if="props.currMenu === 'Lunch'"
                :currMenu="props.currMenu"
                :l_items="props.l_items"
                @update:l_items="newValue => emit('update:l_items', newValue)"
            />
            <DinnerAsync v-else
                :currMenu="props.currMenu"
                :d_items="props.d_items"
                @update:d_items="newValue => emit('update:d_items', newValue)"
            />
        </template>
        <template #fallback>
            <h1 id="fallback">Loading...</h1>
        </template>
    </Suspense>
</template>
