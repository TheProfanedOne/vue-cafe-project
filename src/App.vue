<script setup lang="ts">
import HeaderComp from '@/components/HeaderComp.vue';
import FooterComp from '@/components/FooterComp.vue';
import { RouterView } from 'vue-router';
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
