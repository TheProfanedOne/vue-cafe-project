<script setup lang="ts">
    import { ref, computed } from 'vue';
    import HeaderComp from '@/components/HeaderComp.vue';
    import FooterComp from '@/components/FooterComp.vue';
    import LoginForm from '@/components/LoginForm.vue';
    import { RouterView } from 'vue-router';

    const currentUser = ref('');
    const loggedIn = computed(() => !!currentUser.value);

    const currMenu = ref('');
</script>

<template>
    <div class="wrapper">
        <HeaderComp v-model:currMenu="currMenu" />

        <main>
            <RouterView v-if="loggedIn" v-slot="{ Component }">
                <component :is="Component" :currMenu="currMenu" />
            </RouterView>
            <LoginForm v-else v-model:currentUser="currentUser" />
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
