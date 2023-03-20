<script setup lang="ts">
import MenuTable from '@/components/MenuTable.vue';
import mds from '@/service/MenuDataService';
import useTitle from '@/composables/title';
import useLoginRedirect from '@/composables/loginRedirect';
import { useLunchStore } from '@/stores/menuStores';

useTitle('Lunch Menu');
const notLoggedIn = useLoginRedirect('lunch');

const store = useLunchStore();

if (!notLoggedIn && store.menuLength === 0) {
    const res = await mds.retrieveMenu('Lunch');
    if (res.data !== 'Error: Invalid Category') {
        store.menu = res.data;
    }
}
</script>

<template>
    <MenuTable currMenu="Lunch" :items="store.menu" />
</template>
