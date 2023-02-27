<script setup lang="ts">
    import HomeWrapper from './wrappers/HomeWrapper.vue';
    import BreakWrapper from './wrappers/BreakWrapper.vue';
    import LunchWrapper from './wrappers/LunchWrapper.vue';
    import DinnerWrapper from './wrappers/DinnerWrapper.vue';
    import { ref } from 'vue';
    import type { MenuItem, SpecialBundle } from '@/types/item-types';
    import { DateTime } from 'luxon';

    const props = defineProps<{ currMenu: string }>();

    const spec = ref<SpecialBundle>({
        item: null,
        now: DateTime.now(),
    });
    const b_items = ref<MenuItem[]>([]);
    const l_items = ref<MenuItem[]>([]);
    const d_items = ref<MenuItem[]>([]);
</script>

<template>
    <BreakWrapper v-if="props.currMenu === 'Breakfast'"
        v-model="b_items"
    />
    <LunchWrapper v-else-if="props.currMenu === 'Lunch'"
        v-model="l_items"
    />
    <DinnerWrapper v-else-if="props.currMenu === 'Dinner'"
        v-model="d_items"
    />
    <HomeWrapper v-else
        v-model="spec"
    />
</template>

<style lang="scss">
    @import '@/assets/scss/main.scss';

    table {
        border-collapse: collapse;
        color: $aw;

        &, td {
            border: 1px solid;
        }
        th {
            border: 2px solid;
        }
        th, td {
            width: 12rem;
            box-sizing: border-box;
            position: relative;
        }
        img {
            height: 109px;
            width: auto;
            box-sizing: border-box;
        }
        td {
            padding: 5px;

            &.full-row {
                text-align: center;
                padding: 20px 0;
            }
            &.with-image {
                padding: 0;
            }
        }
        .with-image {
            width: auto;
        }
    }

    h1#fallback {
        text-align: center;
        color: $aw;
        font-size: 7em;
    }
</style>
