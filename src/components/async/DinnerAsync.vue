<script setup lang="ts">
import MenuTable from '@/components/MenuTable.vue';
import mds from '@/service/MenuDataService';
import useTitle from '@/composables/title';
import useLoginRedirect from '@/composables/loginRedirect';
import { useDinnerStore } from '@/stores/menuStores';

useTitle('Dinner Menu');
const notLoggedIn = useLoginRedirect('dinner');

const store = useDinnerStore();

if (!notLoggedIn && store.menuLength === 0) {
    const res = await mds.retrieveMenu('Dinner');
    if (res.data !== 'Error: Invalid Category') {
        store.menu = res.data;
    }
}
</script>

<template>
    <MenuTable currMenu="Dinner" :items="store.menu" />
</template>
