<script setup lang="ts">
    import type { MenuItem } from '@/stores/item-types';
    import MenuTable from '@/components/MenuTable.vue';
    import mds from '@/service/MenuDataService';
    import useTitle from '@/composables/title';

    useTitle('Lunch Menu');

    const props = defineProps<{
        currMenu: string;
        l_items: MenuItem[];
    }>();

    const emit = defineEmits<{
        (e: 'update:l_items', newValue: MenuItem[]): void;
    }>();

    if (props.l_items.length === 0) {
        const res = await mds.retrieveMenuItems(props.currMenu);
        if (res.data !== 'Error: Invalid Category') {
            emit('update:l_items', res.data);
        }
    }
</script>

<template>
    <MenuTable
        :currMenu="props.currMenu"
        :items="props.l_items"
    />
</template>
