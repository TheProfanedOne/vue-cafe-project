<script setup lang="ts">
import MenuTable from '@/components/MenuTable.vue';
import mds from '@/service/MenuDataService';
import useTitle from '@/composables/title';
import useLoginRedirect from '@/composables/loginRedirect';
import { useBreakfastStore } from '@/stores/menuStores';

useTitle('Breakfast Menu');
const notLoggedIn = useLoginRedirect('breakfast');

const store = useBreakfastStore();

if (!notLoggedIn && store.menuLength === 0) {
    const res = await mds.retrieveMenu('Breakfast');
    if (res.data !== 'Error: Invalid Category') {
        store.menu = res.data;
    }
}
</script>

<template>
    <MenuTable currMenu="Breakfast" :items="store.menu" />
</template>
