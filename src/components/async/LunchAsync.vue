<script setup lang="ts">
    import MenuTable from '@/components/MenuTable.vue';
    import mds from '@/service/MenuDataService';
    import useTitle from '@/composables/title';
    import { inject } from 'vue';
    import { lMenuKey, type MenuInject } from '@/composables/keys';
    import useLoginRedirect from '@/composables/loginRedirect';

    useTitle('Lunch Menu');
    useLoginRedirect('lunch');

    const { menu, setMenu } = inject(lMenuKey) as MenuInject;

    if (menu.value.length === 0) {
        const res = await mds.retrieveMenu("Lunch");
        if (res.data !== 'Error: Invalid Category') {
            setMenu(res.data);
        }
    }
</script>

<template>
    <MenuTable
        currMenu="Lunch"
        :items="menu"
    />
</template>
