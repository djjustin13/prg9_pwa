<template>
    <div class="header">
        <div class="header__content container">
            <router-link to="/"><span class="header__content__logo">CMGT</span></router-link>
            <nav class="header__content__nav">
                <router-link to="/">Home</router-link>
                <!-- <router-link to="/projecten">Projecten</router-link> -->
            </nav>
            <img :src="`/img/svg/${network}.svg`" alt="Network status" class="header__content__signal">
        </div>
        
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    export default {
        name: 'JstHeader',
        components: {
        },
        computed: {
            ...mapGetters({
                network: 'device/network'
            })
        }
    }
</script>

<style lang="scss">
    $component: 'header';

    .#{$component} {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: space(4.5);
        z-index: 99;
        background-color: $primary-color;
        color: $white;

        &__content {
            height: 100%;
            display: flex;
            align-items: center;

            &__logo {
                font-size: $font-size-xl;
                color: $white;
            }

            &__nav {
                width: 100%;
                display: flex;
                align-items: center;
                height: 100%;

                a {
                    color: $white;
                    padding: 0 space(2)
                }
            }

            &__signal {
                height: 50%;
            }
        }

        

    }

</style>
