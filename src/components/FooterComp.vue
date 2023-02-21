<script setup lang="ts">
    const sep = '&nbsp;|&nbsp;';
    const loc = 'Location: 264 Comer Hill Rd. Great Falls, MT 59404';
    const hrs = 'Hours: 6AM-8PM Sun-Sat';
    const phn = 'Phone: (406) 750-8624';
    const msg = `${loc} ${sep} ${hrs} ${sep} ${phn}`;
</script>

<template>
    <footer v-html="msg"></footer>
</template>

<style scoped lang="scss">
    @import '@/assets/scss/main.scss';

    footer {
        width: 100%;
        text-align: center;
        font-style: italic;
        padding: 10px 0;
        background-color: $coffee;
        color: $aw;
        flex: $flex-hf;
    }
</style>
