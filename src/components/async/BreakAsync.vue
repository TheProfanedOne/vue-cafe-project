<script setup lang="ts">
    import MenuTable from '@/components/MenuTable.vue';
    import mds from '@/service/MenuDataService';
    import useTitle from '@/composables/title';
    import { inject } from 'vue';
    import { bMenuKey, type MenuInject } from '@/composables/keys';

    useTitle('Breakfast Menu');

    const { menu, setMenu } = inject(bMenuKey) as MenuInject;

    if (menu.value.length === 0) {
        const res = await mds.retrieveMenu("Breakfast");
        if (res.data !== 'Error: Invalid Category') {
            setMenu(res.data);
        }
    }
</script>

<template>
    <MenuTable
        currMenu="Breakfast"
        :items="menu"
    />
</template>
