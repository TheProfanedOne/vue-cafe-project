<script setup lang="ts">
    import MenuTable from '@/components/MenuTable.vue';
    import mds from '@/service/MenuDataService';
    import useTitle from '@/composables/title';
    import { inject } from 'vue';
    import { dMenuKey, type MenuInject } from '@/composables/keys';

    useTitle('Dinner Menu');

    const { menu, setMenu } = inject(dMenuKey) as MenuInject;

    if (menu.value.length === 0) {
        const res = await mds.retrieveMenu("Dinner");
        if (res.data !== 'Error: Invalid Category') {
            setMenu(res.data);
        }
    }
</script>

<template>
    <MenuTable
        currMenu="Dinner"
        :items="menu"
    />
</template>
