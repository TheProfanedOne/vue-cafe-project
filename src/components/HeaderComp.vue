<script setup lang="ts">
import bannerUrl from '@/assets/images/header/banner.jpg';
import { RouterLink } from 'vue-router';

const cssVars = {
    banner: `url(${bannerUrl})`,
};
</script>

<template>
    <header>
        <div>
            <span> RISE AND GRIND </span>
        </div>
        <nav>
            <RouterLink to="/home">Home</RouterLink>
            <RouterLink to="/breakfast">Breakfast</RouterLink>
            <RouterLink to="/lunch">Lunch</RouterLink>
            <RouterLink to="/dinner">Dinner</RouterLink>
        </nav>
    </header>
</template>

<style scoped lang="scss">
@import '@/assets/scss/main.scss';

header {
    width: 100%;
    background-color: $coffee;
    @include flex(column wrap);
    flex: $flex-hf;

    div {
        font-family: 'Wild World';
        font-size: 7em;
        color: $aw;
        padding: 0.3em 0;
        @include flex(column, true);
        justify-self: center;
        width: 100%;
        background-image: v-bind('cssVars.banner');
    }

    nav {
        display: grid;
        grid-template-columns: repeat(4, 1fr);

        a {
            width: 100%;
            text-align: center;
            color: $aw;
            padding: 10px 0;
            border-right: 1px solid $aw;
            border-left: 1px solid $aw;
            text-decoration: none;

            &:first-of-type {
                border-left: 0px;
            }

            &:last-of-type {
                border-right: 0px;
            }
        }
    }
}
</style>
