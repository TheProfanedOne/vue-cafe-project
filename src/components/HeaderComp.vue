<script setup lang="ts">
    import bannerUrl from '@/assets/images/header/banner.jpg';

    const props = defineProps<{ currMenu: string }>();
    const emit = defineEmits<{
        (e: 'update:currMenu', newMenu: string): void;
    }>();

    const cssVars = {
        banner: `url(${bannerUrl})`,
    };

    const onClickH = () => {
        if (props.currMenu) {
            emit('update:currMenu', '');
        }
    };

    const onClickB = () => {
        if (props.currMenu !== 'Breakfast') {
            emit('update:currMenu', 'Breakfast');
        }
    };

    const onClickL = () => {
        if (props.currMenu !== 'Lunch') {
            emit('update:currMenu', 'Lunch');
        }
    };

    const onClickD = () => {
        if (props.currMenu !== 'Dinner') {
            emit('update:currMenu', 'Dinner');
        }
    };
</script>

<template>
    <header>
        <div>
            <span> RISE AND GRIND </span>
        </div>
        <nav>
            <span @contextmenu.prevent @click="onClickH">Home</span>
            <span @contextmenu.prevent @click="onClickB">Breakfast</span>
            <span @contextmenu.prevent @click="onClickL">Lunch</span>
            <span @contextmenu.prevent @click="onClickD">Dinner</span>
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

            span {
                width: 100%;
                text-align: center;
                color: $aw;
                padding: 10px 0;
                border-right: 1px solid $aw;
                border-left: 1px solid $aw;
                cursor: pointer;

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
