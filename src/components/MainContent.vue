<script setup lang="ts">
    import HomeWrapper from './wrappers/HomeWrapper.vue';
    import MenuWrapper from './wrappers/MenuWrapper.vue';
    import { ref } from 'vue';
    import type { MenuItem, SpecialBundle } from '@/stores/item-types';
    import { DateTime } from 'luxon';

    const props = defineProps<{ currMenu: string }>();

    const spec = ref({
        item: null,
        now: DateTime.now(),
    } as SpecialBundle);
    const b_items = ref<MenuItem[]>([]);
    const l_items = ref<MenuItem[]>([]);
    const d_items = ref<MenuItem[]>([]);
</script>

<template>
    <HomeWrapper v-if="!props.currMenu"
        v-model:spec="spec"
    />

    <MenuWrapper v-else
        :currMenu="props.currMenu"
        v-model:b_items="b_items"
        v-model:l_items="l_items"
        v-model:d_items="d_items"
    />
</template>

<style lang="scss">
    @import '@/assets/scss/main.scss';

    table {
        border-collapse: collapse;
        color: $aw;

        &,
        td {
            border: 1px solid;
        }
        th {
            border: 2px solid;
        }
        th,
        td {
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
            &.full-row {
                text-align: center;
                padding: 20px 0;
            }
            &.with-image {
                padding: 0;
            }
            &:not(.with-image) {
                padding: 5px;
            }
        }
        .with-image:is(th, td) {
            width: auto;
        }
    }

    h1#fallback {
        text-align: center;
        color: $aw;
        font-size: 7em;
    }
</style>
