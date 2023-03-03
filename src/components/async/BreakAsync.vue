<script setup lang="ts">
    import MenuTable from '@/components/MenuTable.vue';
    import mds from '@/service/MenuDataService';
    import useTitle from '@/composables/title';
    import { inject } from 'vue';
    import { bMenuKey, type MenuInject } from '@/composables/keys';
    import { userKey, type UserInject } from '@/composables/keys';
    import { useRouter } from 'vue-router';
    import { onBeforeMount } from 'vue';

    useTitle('Breakfast Menu');

    const { currUser } = inject(userKey) as UserInject;
    const router = useRouter();

    onBeforeMount(() => {
        if (currUser.value === '') {
            router.push('/login/home');
        }
    });

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
