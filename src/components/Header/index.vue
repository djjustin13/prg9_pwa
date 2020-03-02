<template>
    <div class="header">
        <div class="header__content container">
            <span class="header__content__logo">CMGT</span>
            <nav class="header__content__nav">
                <router-link to="/">Home</router-link>
                <router-link to="/projecten">Projecten</router-link>
            </nav>
        </div>
        
    </div>
</template>

<script>
export default {
    name: 'JstHeader',
    components: {

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
        }

        

    }

</style>
