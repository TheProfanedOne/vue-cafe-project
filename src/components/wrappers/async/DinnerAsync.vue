<script setup lang="ts">
    import type { MenuItem } from '@/types/item-types';
    import MenuTable from '@/components/MenuTable.vue';
    import mds from '@/service/MenuDataService';
    import useTitle from '@/composables/title';

    useTitle('Dinner Menu');

    const props = defineProps<{ d_items: MenuItem[] }>();
    const emit = defineEmits<{
        (e: 'update:d_items', newValue: MenuItem[]): void;
    }>();

    if (props.d_items.length === 0) {
        const res = await mds.retrieveMenu("Breakfast");
        if (res.data !== 'Error: Invalid Category') {
            emit('update:d_items', res.data);
        }
    }
</script>

<template>
    <MenuTable
        currMenu="Breakfast"
        :items="props.d_items"
    />
</template>
