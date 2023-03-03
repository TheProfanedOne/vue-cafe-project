<script setup lang="ts">
    import MenuTable from '@/components/MenuTable.vue';
    import mds from '@/service/MenuDataService';
    import useTitle from '@/composables/title';
    import { inject } from 'vue';
    import { lMenuKey } from '@/composables/keys';
    import useLoginRedirect from '@/composables/loginRedirect';

    useTitle('Lunch Menu');
    const notLoggedIn = useLoginRedirect('lunch');

    const { menu, setMenu } = inject(lMenuKey)!;

    if (!notLoggedIn && menu.value.length === 0) {
        const res = await mds.retrieveMenu('Lunch');
        if (res.data !== 'Error: Invalid Category') {
            setMenu(res.data);
        }
    }
</script>

<template>
    <MenuTable currMenu="Lunch" :items="menu" />
</template>
