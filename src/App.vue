<script setup lang="ts">
    import HeaderComp from '@/components/HeaderComp.vue';
    import FooterComp from '@/components/FooterComp.vue';
    import { RouterView } from 'vue-router';
    import { ref, provide } from 'vue';
    import { userKey, specKey, bMenuKey, lMenuKey, dMenuKey } from '@/composables/keys';
    import type{ MenuItem, SpecialBundle } from '@/types/item-types';
    import { DateTime } from 'luxon';

    const currUser = ref('');
    const spec = ref<SpecialBundle>({
        item: null,
        now: DateTime.now(),
    });
    const bMenu = ref<MenuItem[]>([]);
    const lMenu = ref<MenuItem[]>([]);
    const dMenu = ref<MenuItem[]>([]);

    provide(userKey, {
        currUser,
        setUser: newUser => currUser.value = newUser,
    });
    provide(specKey, {
        spec,
        setSpec: newSpec => spec.value = newSpec,
    });
    provide(bMenuKey, {
        menu: bMenu,
        setMenu: newMenu => bMenu.value = newMenu,
    });
    provide(lMenuKey, {
        menu: lMenu,
        setMenu: newMenu => lMenu.value = newMenu,
    });
    provide(dMenuKey, {
        menu: dMenu,
        setMenu: newMenu => dMenu.value = newMenu,
    });
</script>

<template>
    <div class="wrapper">
        <HeaderComp />

        <main>
            <RouterView />
        </main>

        <FooterComp />
    </div>
</template>

<style scoped lang="scss">
    @import '@/assets/scss/main.scss';

    div.wrapper {
        @include flex(column);
        width: 100vw;
        height: 100vh;
        position: relative;
    }

    main {
        @include flex(column wrap, true);
        flex: $flex-main;
    }
</style>
